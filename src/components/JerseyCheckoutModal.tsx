import React, { useState, useEffect } from 'react';
import { useClub } from '../context/ClubContext';
import { HalabaCrest } from './HalabaCrest';
import {
  ShoppingBag,
  X,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Truck,
  Lock,
  RefreshCw,
  MapPin,
  Sparkles
} from 'lucide-react';

export const JerseyCheckoutModal: React.FC = () => {
  const { t, language, isCheckoutModalOpen, checkoutItem, closeCheckoutModal, recordShopOrder } = useClub();

  const [selectedSize, setSelectedSize] = useState<string>('L');
  const [quantity, setQuantity] = useState<number>(1);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('Halaba Kulito');
  const [subcityOrRegion, setSubcityOrRegion] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Success state
  const [verifiedOrder, setVerifiedOrder] = useState<{
    orderNumber: string;
    itemName: string;
    size: string;
    amount: number;
    fullName: string;
    address: string;
  } | null>(null);

  // Sandbox simulation state for test environments
  const [sandboxTx, setSandboxTx] = useState<{
    txRef: string;
    amount: number;
  } | null>(null);

  // Reset or initialize default size when checkoutItem changes
  useEffect(() => {
    if (checkoutItem && checkoutItem.availableSizes.length > 0) {
      setSelectedSize(checkoutItem.availableSizes[0]);
    }
  }, [checkoutItem]);

  if (!isCheckoutModalOpen || !checkoutItem) return null;

  const itemName = typeof checkoutItem.name === 'object'
    ? checkoutItem.name[language] || checkoutItem.name.en
    : checkoutItem.name;

  const itemDesc = typeof checkoutItem.description === 'object'
    ? checkoutItem.description[language] || checkoutItem.description.en
    : checkoutItem.description;

  const totalAmount = checkoutItem.price * quantity;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim() || !phone.trim() || !streetAddress.trim() || !city.trim()) {
      setErrorMsg('Please complete all required contact and delivery address fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const txRef = `halaba-shop-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

      const res = await fetch('/api/initialize-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: totalAmount,
          type: 'SHOP_ORDER',
          fullName: fullName.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          cityOrRegion: city.trim(),
          shopOrderDetails: {
            itemId: checkoutItem.id,
            itemName,
            size: selectedSize,
            streetAddress: streetAddress.trim(),
            city: city.trim(),
            subcityOrRegion: subcityOrRegion.trim() || city.trim(),
          },
          title: `Halaba FC Shop: ${itemName}`,
          description: `Order for ${itemName} (Size: ${selectedSize}, Qty: ${quantity}) - ${totalAmount} ETB`,
          tx_ref: txRef,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to initialize payment with Chapa.');
      }

      // If live Chapa URL provided, redirect to Chapa checkout
      if (data.checkout_url && !data.isSandbox && !data.checkout_url.includes('chapa_modal')) {
        window.location.href = data.checkout_url;
        return;
      }

      // In sandbox mode or test mode, show simulator
      setSandboxTx({
        txRef: data.tx_ref || txRef,
        amount: totalAmount,
      });
      setIsSubmitting(false);
    } catch (err: any) {
      console.error('Error initiating jersey checkout:', err);
      setErrorMsg(err.message || 'Error communicating with Chapa payment gateway.');
      setIsSubmitting(false);
    }
  };

  const handleCompleteSandboxPayment = async () => {
    if (!sandboxTx) return;
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/complete-sandbox-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tx_ref: sandboxTx.txRef,
          method: 'Telebirr',
        }),
      });

      const data = await res.json();
      if (data.verified && data.order) {
        const fullAddr = `${streetAddress.trim()}, ${subcityOrRegion ? subcityOrRegion.trim() + ', ' : ''}${city.trim()}`;
        recordShopOrder({
          id: `ord-${Date.now()}`,
          orderNumber: data.order.orderNumber,
          itemId: checkoutItem.id,
          itemName,
          size: selectedSize,
          amount: data.order.amount,
          fullName: data.order.fullName,
          email: data.order.email,
          phone: data.order.phone,
          streetAddress: streetAddress.trim(),
          city: city.trim(),
          subcityOrRegion: subcityOrRegion.trim(),
          createdAt: new Date().toISOString(),
          status: 'PAID',
          tx_ref: data.order.tx_ref,
          verifiedAt: data.order.verifiedAt,
        });

        setVerifiedOrder({
          orderNumber: data.order.orderNumber,
          itemName,
          size: selectedSize,
          amount: data.order.amount,
          fullName: data.order.fullName,
          address: fullAddr,
        });
      } else {
        setErrorMsg('Payment verification failed.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Payment simulation failed.');
    } finally {
      setIsSubmitting(false);
      setSandboxTx(null);
    }
  };

  const handleClose = () => {
    setVerifiedOrder(null);
    setSandboxTx(null);
    setErrorMsg(null);
    closeCheckoutModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-neutral-900 border border-neutral-700 w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col max-h-[92vh] overflow-y-auto">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success View */}
        {verifiedOrder ? (
          <div className="text-center py-6 space-y-5">
            <div className="mx-auto w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>

            <div>
              <span className="text-xs font-sports font-bold tracking-widest text-emerald-400 uppercase">
                {t.orderSuccessTitle}
              </span>
              <h2 className="text-2xl font-sports font-black text-white uppercase mt-1">
                Order Confirmed
              </h2>
              <p className="text-xs text-neutral-300 mt-2 max-w-sm mx-auto">
                {t.orderSuccessMsg}
              </p>
            </div>

            <div className="bg-neutral-950/80 rounded-2xl p-4 border border-neutral-800 text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                <span className="text-neutral-400">Order Ref #:</span>
                <span className="font-mono font-bold text-amber-400">{verifiedOrder.orderNumber}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                <span className="text-neutral-400">Item:</span>
                <span className="font-medium text-white">{verifiedOrder.itemName} (Size {verifiedOrder.size})</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                <span className="text-neutral-400">Total Paid:</span>
                <span className="font-bold text-emerald-400">{verifiedOrder.amount.toLocaleString()} ETB</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                <span className="text-neutral-400">Recipient:</span>
                <span className="font-medium text-white">{verifiedOrder.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Delivery To:</span>
                <span className="font-medium text-neutral-200 text-right">{verifiedOrder.address}</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-sports font-black uppercase tracking-wider text-base shadow-lg transition-all"
            >
              Continue Shopping
            </button>
          </div>
        ) : sandboxTx ? (
          /* Sandbox Simulation Dialog (Chapa Test Environment) */
          <div className="py-4 space-y-5">
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-sports font-black text-lg text-white uppercase">Chapa Sandbox Gateway</h3>
                <p className="text-xs text-neutral-400">Complete jersey payment simulation for {sandboxTx.amount} ETB</p>
              </div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-400">Transaction Ref:</span>
                <span className="font-mono text-neutral-200">{sandboxTx.txRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Customer:</span>
                <span className="text-white font-semibold">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Product:</span>
                <span className="text-white">{itemName} ({selectedSize})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Destination:</span>
                <span className="text-white">{streetAddress}, {city}</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-amber-400 pt-2 border-t border-neutral-800">
                <span>Total Amount:</span>
                <span>{sandboxTx.amount} ETB</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleCompleteSandboxPayment}
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sports font-black text-base uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Verifying with Chapa...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    <span>Simulate Telebirr / CBE Payment ({sandboxTx.amount} ETB)</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setSandboxTx(null)}
                className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          /* Main Checkout Form */
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Modal Header */}
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-emerald-600 p-0.5 flex items-center justify-center shadow-lg">
                <div className="w-full h-full bg-neutral-900 rounded-[14px] flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xxs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Official Merchandise Checkout
                </div>
                <h2 className="text-xl font-sports font-black text-white uppercase tracking-wider mt-0.5">
                  {t.checkoutTitle}
                </h2>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-950/70 border border-red-800/80 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Selected Product Card Summary */}
            <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800 flex gap-4 items-center">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-neutral-800">
                <img
                  src={checkoutItem.imageUrl}
                  alt={itemName}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-sports font-bold text-base text-white truncate uppercase">
                  {itemName}
                </h3>
                <p className="text-xxs text-neutral-400 line-clamp-1 mt-0.5">
                  {itemDesc}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-sports font-black text-lg text-emerald-400">
                    {checkoutItem.price.toLocaleString()} ETB
                  </span>
                  <span className="text-xxs uppercase px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800/60 text-emerald-400 font-bold">
                    Official EPL Licensed
                  </span>
                </div>
              </div>
            </div>

            {/* Size & Quantity Picker */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  {t.selectSize} *
                </label>
                <div className="flex flex-wrap gap-2">
                  {checkoutItem.availableSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-sports font-bold uppercase transition-all ${
                        selectedSize === size
                          ? 'bg-red-600 text-white shadow-md shadow-red-900/40 ring-2 ring-red-500'
                          : 'bg-neutral-950 border border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Quantity
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 rounded-lg bg-neutral-950 border border-neutral-800 text-white font-bold text-base flex items-center justify-center hover:bg-neutral-800"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-sports font-black text-lg text-white">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                    className="w-9 h-9 rounded-lg bg-neutral-950 border border-neutral-800 text-white font-bold text-base flex items-center justify-center hover:bg-neutral-800"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div className="space-y-3 pt-2 border-t border-neutral-800/80">
              <h4 className="text-xs font-sports font-black uppercase tracking-wider text-amber-400">
                1. Customer Contact Details
              </h4>
              <div>
                <label className="block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Mulugeta Fekadu"
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Phone Number (Telebirr / CBE) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="09... / +251..."
                    className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-red-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="supporter@example.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="space-y-3 pt-2 border-t border-neutral-800/80">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400" />
                <h4 className="text-xs font-sports font-black uppercase tracking-wider text-amber-400">
                  2. Delivery Address
                </h4>
              </div>

              <div>
                <label className="block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  {t.streetAddress} *
                </label>
                <input
                  type="text"
                  required
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="e.g. Stadium Road, House #402, Kebele 02"
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    {t.city} *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Halaba Kulito, Hawassa, Addis Ababa"
                    className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    {t.subcityRegion}
                  </label>
                  <input
                    type="text"
                    value={subcityOrRegion}
                    onChange={(e) => setSubcityOrRegion(e.target.value)}
                    placeholder="e.g. Central Ethiopia Region"
                    className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Total & Submit */}
            <div className="pt-2">
              <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800/90 flex items-center justify-between mb-3 text-xs">
                <div>
                  <span className="text-neutral-400 block">Total Due:</span>
                  <span className="text-xxs text-neutral-500">{quantity} item(s) • Free club delivery</span>
                </div>
                <span className="font-sports font-black text-2xl text-emerald-400">
                  {totalAmount.toLocaleString()} ETB
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-sports font-black text-base uppercase tracking-wider shadow-xl shadow-red-950/40 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Connecting to Chapa...</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Proceed to Chapa Payment ({totalAmount.toLocaleString()} ETB)</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xxs text-neutral-400 mt-2.5">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>Secured Chapa Checkout • Telebirr, CBE Birr, Awash Bank & Cards</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

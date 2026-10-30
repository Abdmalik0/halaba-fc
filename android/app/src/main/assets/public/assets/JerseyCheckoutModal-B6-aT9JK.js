import { r as reactExports, j as jsxRuntimeExports, X, l as CircleCheck, i as Sparkles, Q as CircleAlert, ai as Truck, a as ShoppingBag } from "./vendor-react-BqvxpxOH.js";
import { u as useClub, H as HalabaCrest } from "./index-DaWmYZcG.js";
import "./vendor-capacitor-CxZwZfQO.js";
import "./vendor-firebase-BFy01gyE.js";
const JerseyCheckoutModal = () => {
  const { t, language, isCheckoutModalOpen, checkoutItem, closeCheckoutModal, recordShopOrder } = useClub();
  const [selectedSize, setSelectedSize] = reactExports.useState("L");
  const [quantity, setQuantity] = reactExports.useState(1);
  const [fullName, setFullName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [streetAddress, setStreetAddress] = reactExports.useState("");
  const [city, setCity] = reactExports.useState("Halaba Kulito");
  const [subcityOrRegion, setSubcityOrRegion] = reactExports.useState("");
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [errorMsg, setErrorMsg] = reactExports.useState(null);
  const [verifiedOrder, setVerifiedOrder] = reactExports.useState(null);
  const [sandboxTx, setSandboxTx] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (checkoutItem && checkoutItem.availableSizes.length > 0) {
      setSelectedSize(checkoutItem.availableSizes[0]);
    }
  }, [checkoutItem]);
  if (!isCheckoutModalOpen || !checkoutItem) return null;
  const itemName = typeof checkoutItem.name === "object" ? checkoutItem.name[language] || checkoutItem.name.en : checkoutItem.name;
  const itemDesc = typeof checkoutItem.description === "object" ? checkoutItem.description[language] || checkoutItem.description.en : checkoutItem.description;
  const totalAmount = checkoutItem.price * quantity;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!fullName.trim() || !phone.trim() || !streetAddress.trim() || !city.trim()) {
      setErrorMsg(
        language === "am" ? "እባክዎ ሁሉንም አስፈላጊ የመገናኛና የመላኪያ አድራሻ መረጃዎችን ይሙሉ" : "Please complete all required contact and delivery address fields."
      );
      return;
    }
    setIsSubmitting(true);
    try {
      const txRef = "halaba-shop-".concat(Date.now(), "-").concat(Math.floor(1e3 + Math.random() * 9e3));
      const res = await fetch("/api/initialize-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalAmount,
          type: "SHOP_ORDER",
          fullName: fullName.trim(),
          phone: phone.trim(),
          email: email.trim() || void 0,
          cityOrRegion: city.trim(),
          shopOrderDetails: {
            itemId: checkoutItem.id,
            itemName,
            size: selectedSize,
            streetAddress: streetAddress.trim(),
            city: city.trim(),
            subcityOrRegion: subcityOrRegion.trim() || city.trim()
          },
          title: "Halaba FC Shop: ".concat(itemName),
          description: "Order for ".concat(itemName, " (Size: ").concat(selectedSize, ", Qty: ").concat(quantity, ") - ").concat(totalAmount, " ETB"),
          tx_ref: txRef
        })
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || (language === "am" ? "በቻፓ በኩል ክፍያ መጀመር አልተቻለም" : "Failed to initialize payment with Chapa."));
      }
      if (data.checkout_url && !data.isSandbox && !data.checkout_url.includes("chapa_modal")) {
        window.location.href = data.checkout_url;
        return;
      }
      setSandboxTx({
        txRef: data.tx_ref || txRef,
        amount: totalAmount
      });
      setIsSubmitting(false);
    } catch (err) {
      console.error("Error initiating jersey checkout:", err);
      setErrorMsg(err.message || (language === "am" ? "ከክፍያ መግቢያ ጋር መገናኘት አልተቻለም" : "Error communicating with Chapa payment gateway."));
      setIsSubmitting(false);
    }
  };
  const handleCompleteSandboxPayment = async () => {
    if (!sandboxTx) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/complete-sandbox-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tx_ref: sandboxTx.txRef,
          method: "Telebirr"
        })
      });
      const data = await res.json();
      if (data.verified && data.order) {
        const fullAddr = "".concat(streetAddress.trim(), ", ").concat(subcityOrRegion ? subcityOrRegion.trim() + ", " : "").concat(city.trim());
        recordShopOrder({
          id: "ord-".concat(Date.now()),
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
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          status: "PAID",
          tx_ref: sandboxTx.txRef
        });
        setVerifiedOrder({
          orderNumber: data.order.orderNumber,
          itemName,
          size: selectedSize,
          amount: data.order.amount,
          fullName: data.order.fullName,
          address: fullAddr
        });
      }
    } catch (err) {
      console.error("Sandbox checkout verification error:", err);
      const randOrder = "ORD-".concat(Date.now().toString().slice(-6));
      const fullAddr = "".concat(streetAddress.trim(), ", ").concat(subcityOrRegion ? subcityOrRegion.trim() + ", " : "").concat(city.trim());
      recordShopOrder({
        id: "ord-".concat(Date.now()),
        orderNumber: randOrder,
        itemId: checkoutItem.id,
        itemName,
        size: selectedSize,
        amount: totalAmount,
        fullName: fullName.trim(),
        email: email.trim() || void 0,
        phone: phone.trim(),
        streetAddress: streetAddress.trim(),
        city: city.trim(),
        subcityOrRegion: subcityOrRegion.trim(),
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        status: "PAID",
        tx_ref: sandboxTx.txRef
      });
      setVerifiedOrder({
        orderNumber: randOrder,
        itemName,
        size: selectedSize,
        amount: totalAmount,
        fullName: fullName.trim(),
        address: fullAddr
      });
    } finally {
      setIsSubmitting(false);
      setSandboxTx(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-2xl bg-neutral-900 border border-neutral-700 rounded-3xl shadow-2xl overflow-hidden my-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-r from-red-950 via-neutral-900 to-green-950 border-b border-neutral-800 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 44 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-xl text-white uppercase tracking-wider", children: t.checkoutTitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 mt-0.5", children: t.checkoutSubtitle })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: closeCheckoutModal,
          className: "w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 sm:p-8 space-y-6", children: verifiedOrder ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 mx-auto flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider", children: t.orderSuccessTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-neutral-300 max-w-md mx-auto", children: t.orderSuccessMsg }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-neutral-950 border border-neutral-800 max-w-md mx-auto text-left text-xs space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-neutral-800 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400", children: language === "am" ? "የትዕዛዝ ቁጥር" : "Order Ref" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-amber-400", children: verifiedOrder.orderNumber })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400", children: language === "am" ? "የእቃ ስም" : "Item" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-white", children: [
            verifiedOrder.itemName,
            " (",
            language === "am" ? "መጠን" : "Size",
            ": ",
            verifiedOrder.size,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400", children: language === "am" ? "የተከፈለ መጠን" : "Amount Paid" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-emerald-400", children: [
            verifiedOrder.amount.toLocaleString(),
            " ",
            t.etbCurrency
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400", children: language === "am" ? "ተቀባይ" : "Recipient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-200", children: verifiedOrder.fullName })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400", children: language === "am" ? "የመላኪያ አድራሻ" : "Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-300 text-right max-w-[200px] truncate", children: verifiedOrder.address })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: closeCheckoutModal,
          className: "mt-4 px-8 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sports font-bold uppercase tracking-wider text-xs shadow-xl transition-all",
          children: language === "am" ? "ወደ ሱቅ ተመለስ" : "Return to Shop"
        }
      )
    ] }) : sandboxTx ? (
      /* Chapa Test Simulator Screen */
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-emerald-400 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-emerald-300 block", children: language === "am" ? "የቻፓ የክፍያ ማረጋገጫ" : "Chapa Instant Payment Gateway" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-300", children: language === "am" ? "የቻፓ ክፍያ በቴሌብር እና በኢትዮጵያ ንግድ ባንክ ተዘጋጅቷል። ትዕዛዝዎን ለማረጋገጥ ይክፈሉ።" : "Simulate instant confirmation via Telebirr or CBE Birr." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-neutral-400 pb-2 border-b border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "የክፍያ መለያ" : "Transaction Ref" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-amber-400 font-bold", children: sandboxTx.txRef })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-300", children: language === "am" ? "ጠቅላላ የሚከፈል" : "Total Payable" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-sports font-black text-xl text-emerald-400", children: [
              sandboxTx.amount.toLocaleString(),
              " ",
              t.etbCurrency
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleCompleteSandboxPayment,
            disabled: isSubmitting,
            className: "w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-sports font-black uppercase tracking-wider text-sm shadow-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSubmitting ? t.submitting : language === "am" ? "ክፍያውን አጠናቅቅ እና ትዕዛዙን አረጋግጥ" : "Complete Payment & Confirm Order" })
            ]
          }
        )
      ] })
    ) : (
      /* Checkout Form */
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        errorMsg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: errorMsg })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: checkoutItem.imageUrl,
              alt: itemName,
              className: "w-20 h-20 object-cover rounded-xl border border-neutral-800 shrink-0"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sports font-black text-lg text-white uppercase tracking-wide truncate", children: itemName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 line-clamp-1 mt-0.5", children: itemDesc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-sports font-black text-base text-emerald-400", children: [
                checkoutItem.price.toLocaleString(),
                " ",
                t.etbCurrency
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs uppercase px-2 py-0.5 rounded bg-neutral-900 border border-neutral-700 text-neutral-300", children: t.inStockLabel })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1.5", children: [
              t.sizeGuide,
              " *"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: checkoutItem.availableSizes.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSelectedSize(s),
                className: "px-3 py-1.5 rounded-lg text-xs font-sports font-bold uppercase transition-all ".concat(selectedSize === s ? "bg-red-600 text-white shadow-md" : "bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800"),
                children: s
              },
              s
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1.5", children: language === "am" ? "ብዛት" : "Quantity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                value: quantity,
                onChange: (e) => setQuantity(Number(e.target.value)),
                className: "w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs font-bold focus:outline-none focus:border-red-500",
                children: [1, 2, 3, 4, 5].map((q) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: q, children: q }, q))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-2 border-t border-neutral-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "font-sports font-bold text-sm text-neutral-200 uppercase tracking-wider flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-4 h-4 text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.deliveryAddressLabel })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xxs font-sports font-bold uppercase tracking-wider text-neutral-400 mb-1", children: [
                t.fullName,
                " *"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  value: fullName,
                  onChange: (e) => setFullName(e.target.value),
                  placeholder: t.fullNamePlaceholder,
                  className: "w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-red-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xxs font-sports font-bold uppercase tracking-wider text-neutral-400 mb-1", children: [
                t.phone,
                " *"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "tel",
                  required: true,
                  value: phone,
                  onChange: (e) => setPhone(e.target.value),
                  placeholder: t.phonePlaceholder,
                  className: "w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-red-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xxs font-sports font-bold uppercase tracking-wider text-neutral-400 mb-1", children: [
                t.city,
                " *"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  value: city,
                  onChange: (e) => setCity(e.target.value),
                  placeholder: language === "am" ? "ለምሳሌ፡ ሀላባ ቁሊቶ / አዲስ አበባ" : "e.g. Halaba Kulito / Addis Ababa",
                  className: "w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-red-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xxs font-sports font-bold uppercase tracking-wider text-neutral-400 mb-1", children: [
                t.streetAddress,
                " *"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  value: streetAddress,
                  onChange: (e) => setStreetAddress(e.target.value),
                  placeholder: language === "am" ? "የመንገድ ስም / የቤት ቁጥር" : "Street name / House number",
                  className: "w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-red-500"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-neutral-800 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs uppercase tracking-wider text-neutral-400 block font-semibold", children: t.orderSummary }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-sports font-black text-2xl text-emerald-400", children: [
              totalAmount.toLocaleString(),
              " ",
              t.etbCurrency
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: "px-6 py-3 rounded-xl btn-secondary-amber text-white font-sports font-black uppercase tracking-wider text-xs shadow-xl flex items-center gap-2 transition-all disabled:opacity-50",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSubmitting ? t.submitting : t.proceedToPayment })
              ]
            }
          )
        ] })
      ] })
    ) })
  ] }) });
};
export {
  JerseyCheckoutModal
};

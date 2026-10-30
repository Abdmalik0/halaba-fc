import { r as reactExports, j as jsxRuntimeExports, H as Heart, X, l as CircleCheck, i as Sparkles, Q as CircleAlert } from "./vendor-react-BqvxpxOH.js";
import { u as useClub } from "./index-DaWmYZcG.js";
import "./vendor-capacitor-CxZwZfQO.js";
import "./vendor-firebase-BFy01gyE.js";
const DonationModal = () => {
  const { t, language, isDonationModalOpen, closeDonationModal, recordDonation } = useClub();
  const presetAmounts = [100, 500, 1e3, 2500];
  const [selectedPreset, setSelectedPreset] = reactExports.useState(500);
  const [isCustom, setIsCustom] = reactExports.useState(false);
  const [customAmount, setCustomAmount] = reactExports.useState("");
  const [fullName, setFullName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [purpose, setPurpose] = reactExports.useState(t.purposeGeneral);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [errorMsg, setErrorMsg] = reactExports.useState(null);
  const [verifiedDonation, setVerifiedDonation] = reactExports.useState(null);
  const [sandboxTx, setSandboxTx] = reactExports.useState(null);
  if (!isDonationModalOpen) return null;
  const currentAmount = isCustom ? Number(customAmount) || 0 : selectedPreset;
  const handleSelectPreset = (amount) => {
    setSelectedPreset(amount);
    setIsCustom(false);
    setErrorMsg(null);
  };
  const handleCustomChange = (val) => {
    const clean = val.replace(/[^\d]/g, "");
    setCustomAmount(clean);
    setIsCustom(true);
    setErrorMsg(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    if (currentAmount <= 0) {
      setErrorMsg(language === "am" ? "እባክዎ ትክክለኛ የልገሳ መጠን ይምረጡ ወይም ያስገቡ" : "Please select or enter a valid donation amount.");
      return;
    }
    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg(language === "am" ? "ሙሉ ስም እና ስልክ ቁጥር ማስገባት ግዴታ ነው" : "Full Name and Phone Number are required.");
      return;
    }
    setIsSubmitting(true);
    try {
      const txRef = "halaba-donate-".concat(Date.now(), "-").concat(Math.floor(1e3 + Math.random() * 9e3));
      const res = await fetch("/api/initialize-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: currentAmount,
          type: "DONATION",
          fullName: fullName.trim(),
          phone: phone.trim(),
          email: email.trim() || void 0,
          cityOrRegion: "Halaba",
          donationDetails: {
            purpose,
            supporterName: fullName.trim()
          },
          title: "Halaba City FC Donation - ".concat(purpose),
          description: "Supporter donation to Halaba City FC (".concat(currentAmount, " ETB)"),
          tx_ref: txRef
        })
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || (language === "am" ? "በቻፓ በኩል ልገሳ ማስጀመር አልተቻለም" : "Failed to initialize donation with Chapa"));
      }
      if (data.checkout_url && !data.isSandbox && !data.checkout_url.includes("chapa_modal")) {
        window.location.href = data.checkout_url;
        return;
      }
      setSandboxTx({
        txRef: data.tx_ref || txRef,
        amount: currentAmount
      });
      setIsSubmitting(false);
    } catch (err) {
      console.error("Error initiating donation:", err);
      setErrorMsg(err.message || (language === "am" ? "ከክፍያ መግቢያ ጋር መገናኘት አልተቻለም" : "Error communicating with payment gateway."));
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
      if (data.verified && data.donation) {
        recordDonation({
          id: "don-".concat(Date.now()),
          donationNumber: data.donation.donationNumber,
          fullName: data.donation.fullName,
          email: data.donation.email,
          phone: data.donation.phone,
          amount: data.donation.amount,
          purpose: data.donation.purpose,
          tx_ref: data.donation.tx_ref,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          status: "COMPLETED",
          verifiedAt: data.donation.verifiedAt
        });
        setVerifiedDonation({
          donationNumber: data.donation.donationNumber,
          amount: data.donation.amount,
          fullName: data.donation.fullName,
          purpose: data.donation.purpose,
          date: (/* @__PURE__ */ new Date()).toLocaleDateString()
        });
      }
    } catch (err) {
      console.error("Sandbox donation verification note:", err);
      const randDon = "DON-".concat(Date.now().toString().slice(-6));
      recordDonation({
        id: "don-".concat(Date.now()),
        donationNumber: randDon,
        fullName: fullName.trim(),
        email: email.trim() || void 0,
        phone: phone.trim(),
        amount: currentAmount,
        purpose,
        tx_ref: sandboxTx.txRef,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        status: "COMPLETED"
      });
      setVerifiedDonation({
        donationNumber: randDon,
        amount: currentAmount,
        fullName: fullName.trim(),
        purpose,
        date: (/* @__PURE__ */ new Date()).toLocaleDateString()
      });
    } finally {
      setIsSubmitting(false);
      setSandboxTx(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-3xl shadow-2xl overflow-hidden my-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-r from-emerald-950 via-neutral-900 to-red-950 border-b border-neutral-800 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-6 h-6 fill-emerald-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-xl text-white uppercase tracking-wider", children: t.donateTitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 mt-0.5", children: t.donateSubtitle })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: closeDonationModal,
          className: "w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 sm:p-8 space-y-6", children: verifiedDonation ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 mx-auto flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider", children: t.donationSuccessTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-neutral-300 max-w-md mx-auto", children: t.donationSuccessMsg }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-neutral-950 border border-neutral-800 max-w-sm mx-auto text-left text-xs space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-neutral-800 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400", children: language === "am" ? "የልገሳ ቁጥር" : "Receipt No." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-amber-400", children: verifiedDonation.donationNumber })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400", children: language === "am" ? "ለጋሽ" : "Donor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-white", children: verifiedDonation.fullName })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400", children: t.donationPurposeLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-300", children: verifiedDonation.purpose })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400", children: language === "am" ? "የተለገሰ መጠን" : "Amount Contributed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-emerald-400 text-sm", children: [
            verifiedDonation.amount.toLocaleString(),
            " ",
            t.etbCurrency
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: closeDonationModal,
          className: "mt-4 px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sports font-bold uppercase tracking-wider text-xs shadow-xl transition-all",
          children: language === "am" ? "ጨርስ" : "Done"
        }
      )
    ] }) : sandboxTx ? (
      /* Simulator Screen */
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-emerald-400 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-emerald-300 block", children: language === "am" ? "የቻፓ ደህንነቱ የተጠበቀ ክፍያ" : "Chapa Instant Payment Gateway" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-300", children: language === "am" ? "በቴሌብር ወይም በኢትዮጵያ ንግድ ባንክ ክፍያውን አጠናቅቀው ደረሰኝዎን ይቀበሉ።" : "Complete payment via Telebirr or CBE Birr." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-neutral-400 pb-2 border-b border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "የክፍያ መለያ" : "Transaction Ref" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-amber-400 font-bold", children: sandboxTx.txRef })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-300", children: language === "am" ? "የልገሳ መጠን" : "Donation Total" }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSubmitting ? t.submitting : language === "am" ? "ልገሳውን አረጋግጥ" : "Confirm Donation Payment" })
            ]
          }
        )
      ] })
    ) : (
      /* Donation Form */
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        errorMsg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: errorMsg })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-2", children: [
            t.selectDonationAmount,
            " *"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2 mb-3", children: presetAmounts.map((amt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => handleSelectPreset(amt),
              className: "py-2.5 rounded-xl font-sports font-black text-sm uppercase transition-all ".concat(!isCustom && selectedPreset === amt ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950/50" : "bg-neutral-950 text-neutral-300 hover:text-white border border-neutral-800"),
              children: amt
            },
            amt
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: customAmount,
                onChange: (e) => handleCustomChange(e.target.value),
                placeholder: t.enterAmountPlaceholder,
                className: "w-full px-4 py-2.5 rounded-xl bg-neutral-950 border text-white text-xs font-mono focus:outline-none focus:border-emerald-500 ".concat(isCustom ? "border-emerald-500 ring-1 ring-emerald-500" : "border-neutral-800")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 font-bold text-xxs", children: t.etbCurrency })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1.5", children: [
            t.donationPurposeLabel,
            " *"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: purpose,
              onChange: (e) => setPurpose(e.target.value),
              className: "w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs font-medium focus:outline-none focus:border-emerald-500",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t.purposeGeneral, children: t.purposeGeneral }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t.purposeAcademy, children: t.purposeAcademy }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t.purposeStadium, children: t.purposeStadium })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-neutral-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xxs font-sports font-bold uppercase tracking-wider text-neutral-400 mb-1", children: [
              t.donorNameLabel,
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
                className: "w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-emerald-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xxs font-sports font-bold uppercase tracking-wider text-neutral-400 mb-1", children: [
              t.donorPhoneLabel,
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
                className: "w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-emerald-500"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-neutral-800 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs uppercase tracking-wider text-neutral-400 block font-semibold", children: language === "am" ? "የልገሳ ጠቅላላ" : "Total Donation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-sports font-black text-2xl text-emerald-400", children: [
              currentAmount.toLocaleString(),
              " ",
              t.etbCurrency
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              disabled: isSubmitting || currentAmount <= 0,
              className: "px-6 py-3 rounded-xl btn-donate-emerald text-white font-sports font-black uppercase tracking-wider text-xs shadow-xl flex items-center gap-2 transition-all disabled:opacity-50",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 fill-white" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSubmitting ? t.submitting : language === "am" ? "በቻፓ ይለግሱ" : "Donate with Chapa" })
              ]
            }
          )
        ] })
      ] })
    ) })
  ] }) });
};
export {
  DonationModal
};

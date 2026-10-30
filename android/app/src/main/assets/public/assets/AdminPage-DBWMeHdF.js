import { r as reactExports, j as jsxRuntimeExports, l as CircleCheck, A as Award, v as RefreshCw, a2 as Plus, a3 as Database, k as LoaderCircle, d as ShieldCheck, a4 as Eye, a5 as EyeOff, E as ExternalLink, a6 as ArrowUp, a7 as ArrowDown, a8 as SquarePen, a9 as Trash2, X, aa as Link, ab as Upload, ac as Image$1, i as Sparkles, ad as Check, L as Lock, w as TriangleAlert, f as Mail, ae as LogOut, af as Users, a as ShoppingBag, N as Newspaper, C as Calendar, T as Trophy, Z as Zap, ag as Settings, D as Download, B as Search, H as Heart, z as Calculator, ah as Minus, p as Pause, o as Play } from "./vendor-react-BqvxpxOH.js";
import { u as useClub, N as NetVibeSvgEmblem, H as HalabaCrest, C as ClubImages } from "./index-DaWmYZcG.js";
import "./vendor-capacitor-CxZwZfQO.js";
import "./vendor-firebase-BFy01gyE.js";
const compressPosterImage = (file, maxDim = 1200) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      var _a;
      const img = new Image();
      img.onload = () => {
        var _a2;
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round(height * maxDim / width);
            width = maxDim;
          } else {
            width = Math.round(width * maxDim / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve((_a2 = readerEvent.target) == null ? void 0 : _a2.result);
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.88);
        resolve(compressedDataUrl);
      };
      img.onerror = () => {
        var _a2;
        return resolve((_a2 = readerEvent.target) == null ? void 0 : _a2.result);
      };
      img.src = (_a = readerEvent.target) == null ? void 0 : _a.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
const SponsorManager = () => {
  const {
    sponsors,
    addSponsor,
    updateSponsor,
    deleteSponsor,
    resetSponsors,
    isSponsorsLoading,
    sponsorsSyncError,
    language
  } = useClub();
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingSponsorId, setEditingSponsorId] = reactExports.useState(null);
  const [name, setName] = reactExports.useState("");
  const [nameAm, setNameAm] = reactExports.useState("");
  const [tier, setTier] = reactExports.useState("Technology Partner & App Developer");
  const [tierAm, setTierAm] = reactExports.useState("ኦፊሴላዊ የቴክኖሎጂ አጋር እና የመተግበሪያ አበልፃጊ");
  const [imageUrl, setImageUrl] = reactExports.useState("");
  const [websiteUrl, setWebsiteUrl] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [descriptionAm, setDescriptionAm] = reactExports.useState("");
  const [active, setActive] = reactExports.useState(true);
  const [uploadError, setUploadError] = reactExports.useState(null);
  const [isUploading, setIsUploading] = reactExports.useState(false);
  const [isSavingToFirestore, setIsSavingToFirestore] = reactExports.useState(false);
  const [toastMessage, setToastMessage] = reactExports.useState(null);
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };
  const openAddModal = () => {
    setEditingSponsorId(null);
    setName("");
    setNameAm("");
    setTier("Official Partner");
    setTierAm("ኦፊሴላዊ አጋር");
    setImageUrl("");
    setWebsiteUrl("");
    setDescription("");
    setDescriptionAm("");
    setActive(true);
    setUploadError(null);
    setIsModalOpen(true);
  };
  const openEditModal = (sponsor) => {
    setEditingSponsorId(sponsor.id);
    setName(sponsor.name);
    setNameAm(sponsor.nameAm || "");
    setTier(sponsor.tier);
    setTierAm(sponsor.tierAm || "");
    setImageUrl(sponsor.imageUrl);
    setWebsiteUrl(sponsor.websiteUrl || "");
    setDescription(sponsor.description || "");
    setDescriptionAm(sponsor.descriptionAm || "");
    setActive(sponsor.active);
    setUploadError(null);
    setIsModalOpen(true);
  };
  const handleFileUpload = async (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (file) {
      if (file.size > 15 * 1024 * 1024) {
        setUploadError("File size exceeds 15MB limit. Please select a smaller photo file.");
        return;
      }
      setUploadError(null);
      setIsUploading(true);
      try {
        const dataUrl = await compressPosterImage(file);
        setImageUrl(dataUrl);
      } catch (e2) {
        setUploadError("Failed to read image file. Please try another image.");
      } finally {
        setIsUploading(false);
      }
    }
  };
  const handleFileDrop = async (e) => {
    var _a;
    e.preventDefault();
    const file = (_a = e.dataTransfer.files) == null ? void 0 : _a[0];
    if (file) {
      if (file.size > 15 * 1024 * 1024) {
        setUploadError("File size exceeds 15MB limit. Please select a smaller photo file.");
        return;
      }
      setUploadError(null);
      setIsUploading(true);
      try {
        const dataUrl = await compressPosterImage(file);
        setImageUrl(dataUrl);
      } catch (e2) {
        setUploadError("Failed to read image file. Please try another image.");
      } finally {
        setIsUploading(false);
      }
    }
  };
  const handleSave = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setUploadError("Please enter a sponsor name.");
      return;
    }
    if (!imageUrl.trim()) {
      setUploadError("Please provide a poster image (upload local file or enter image link).");
      return;
    }
    setIsSavingToFirestore(true);
    setUploadError(null);
    try {
      if (editingSponsorId) {
        await updateSponsor(editingSponsorId, {
          name: name.trim(),
          nameAm: nameAm.trim() || void 0,
          tier: tier.trim(),
          tierAm: tierAm.trim() || void 0,
          imageUrl: imageUrl.trim(),
          websiteUrl: websiteUrl.trim() || void 0,
          description: description.trim() || void 0,
          descriptionAm: descriptionAm.trim() || void 0,
          active
        });
        showToast('Updated sponsor poster for "'.concat(name, '" in Firebase Firestore.'));
      } else {
        await addSponsor({
          name: name.trim(),
          nameAm: nameAm.trim() || void 0,
          tier: tier.trim(),
          tierAm: tierAm.trim() || void 0,
          imageUrl: imageUrl.trim(),
          websiteUrl: websiteUrl.trim() || void 0,
          description: description.trim() || void 0,
          descriptionAm: descriptionAm.trim() || void 0,
          active,
          order: sponsors.length + 1
        });
        showToast('Added new sponsor poster for "'.concat(name, '" to Firebase Firestore.'));
      }
      setIsModalOpen(false);
    } catch (err) {
      setUploadError((err == null ? void 0 : err.message) || "Failed to save sponsor to Firebase Firestore.");
    } finally {
      setIsSavingToFirestore(false);
    }
  };
  const handleDelete = async (id, sponsorName) => {
    if (window.confirm('Are you sure you want to remove the sponsor poster for "'.concat(sponsorName, '" from Firebase Firestore?'))) {
      try {
        await deleteSponsor(id);
        showToast('Removed "'.concat(sponsorName, '" from Firebase Firestore.'));
      } catch (err) {
        showToast("Error deleting sponsor: ".concat((err == null ? void 0 : err.message) || "Failed"));
      }
    }
  };
  const handleToggleActive = async (sponsor) => {
    try {
      await updateSponsor(sponsor.id, { active: !sponsor.active });
      showToast("".concat(sponsor.name, " poster set to ").concat(!sponsor.active ? "Active" : "Hidden", " in Firebase."));
    } catch (err) {
      showToast("Error updating visibility: ".concat((err == null ? void 0 : err.message) || "Failed"));
    }
  };
  const handleMoveOrder = async (index, direction) => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= sponsors.length) return;
    const copy = [...sponsors];
    const temp = copy[index];
    copy[index] = copy[targetIndex];
    copy[targetIndex] = temp;
    try {
      for (let idx = 0; idx < copy.length; idx++) {
        await updateSponsor(copy[idx].id, { order: idx + 1 });
      }
      showToast("Updated slide display order in Firebase.");
    } catch (err) {
      showToast("Error saving order changes to Firebase.");
    }
  };
  const sortedSponsors = [...sponsors].sort((a, b) => (a.order || 0) - (b.order || 0));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl", children: [
    toastMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-200 text-xs font-sports font-bold uppercase tracking-wider flex items-center gap-2 animate-in fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: toastMessage })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xxs font-sports font-bold uppercase tracking-wider mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3 h-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Official Club Partners & Posters" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-2xl text-white uppercase tracking-wider", children: language === "am" ? "የስፖንሰሮች ባነሮችና ፖስተሮች ማስተዳደሪያ" : "Sponsor Carousel & Poster Management" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 mt-1", children: language === "am" ? "በመነሻ ገጽ ላይ የሚሽከረከሩትን የክለቡ ስፖንሰሮችና አጋሮች ፖስተሮች ከኮምፒውተርዎ ወይም ከስልክዎ ፋይል በመጫን በቀላሉ ያርትዑ።" : "Manage the large auto-sliding sponsor billboard shown on the club homepage. Upload posters directly from your local device." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              if (window.confirm("Restore initial official club sponsors (NetVibe, Halaba Union, Chapa, etc.)?")) {
                resetSponsors();
                showToast("Restored default official club sponsors.");
              }
            },
            className: "px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors cursor-pointer",
            title: "Restore default sponsors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Reset Defaults" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: openAddModal,
            className: "px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sports font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-red-950/40 transition-all hover:scale-102 cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "አዲስ ፖስተር ጫን" : "Add Sponsor Poster" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white font-sports font-bold tracking-wide uppercase", children: language === "am" ? "የፈርቤዝ ክላውድ ፋየርቤዝ ዳታቤዝ ተገናኝቷል" : "Firebase Cloud Firestore Linked" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }),
              "Live Cloud Sync Active"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-400 text-xxs", children: language === "am" ? "ሁሉም የስፖንሰር ፖስተሮች፣ ባነሮች እና መረጃዎች በቀጥታ በፈርቤዝ /sponsors ውስጥ ይቀመጣሉ።" : "All sponsor posters, tiers, descriptions, and uploaded images sync live with Cloud Firestore collection /sponsors." })
        ] })
      ] }),
      isSponsorsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-amber-400 text-xxs font-mono shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin text-amber-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Syncing Firestore..." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-neutral-400 text-xxs font-mono shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          sponsors.length,
          " Cloud Documents"
        ] })
      ] })
    ] }),
    sponsorsSyncError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-amber-400 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Offline fallback active: ",
        sponsorsSyncError
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: sortedSponsors.map((s, idx) => {
      const isNetVibe = s.id.includes("netvibe") || s.name.toLowerCase().includes("netvibe");
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl border p-4.5 flex flex-col justify-between transition-all ".concat(s.active ? "bg-neutral-950 border-neutral-800 hover:border-neutral-700" : "bg-neutral-950/50 border-neutral-900 opacity-60"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-16 rounded-xl bg-neutral-900 border border-neutral-800 p-1 flex items-center justify-center shrink-0 overflow-hidden relative", children: s.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: s.imageUrl,
                      alt: s.name,
                      className: "max-h-full max-w-full object-contain",
                      onError: (e) => {
                        e.target.src = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80";
                      }
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(NetVibeSvgEmblem, { sizePx: 32 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xxs font-mono text-neutral-500 font-bold", children: [
                        "#",
                        idx + 1
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs px-2 py-0.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-300 font-sports font-bold uppercase truncate max-w-[170px]", children: s.tier }),
                      isNetVibe && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-400 font-bold uppercase", children: "Developer" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sports font-bold text-base text-white mt-1 truncate", title: s.name, children: s.name }),
                    s.nameAm && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 block font-ethiopic truncate", children: s.nameAm })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => handleToggleActive(s),
                    className: "p-1.5 rounded-lg text-xxs font-bold uppercase flex items-center gap-1 transition-colors ".concat(s.active ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900" : "bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white"),
                    title: s.active ? "Click to hide from homepage" : "Click to display on homepage",
                    children: [
                      s.active ? /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.active ? "Active" : "Hidden" })
                    ]
                  }
                )
              ] }),
              s.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 line-clamp-2 leading-relaxed", children: s.description }),
              s.websiteUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: s.websiteUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-xxs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[240px]", children: s.websiteUrl }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-2.5 h-2.5" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 mt-3 border-t border-neutral-850 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-500 uppercase font-bold mr-1", children: "Order:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleMoveOrder(idx, "up"),
                    disabled: idx === 0,
                    className: "p-1 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none",
                    title: "Move up",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-3 h-3" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleMoveOrder(idx, "down"),
                    disabled: idx === sortedSponsors.length - 1,
                    className: "p-1 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none",
                    title: "Move down",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-3 h-3" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => openEditModal(s),
                    className: "px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-sports font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Edit" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleDelete(s.id, s.name),
                    className: "p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-300 hover:text-red-100 transition-colors cursor-pointer",
                    title: "Delete sponsor",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                  }
                )
              ] })
            ] })
          ]
        },
        s.id
      );
    }) }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-4 border-b border-neutral-800 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs font-sports font-bold uppercase tracking-wider text-amber-400", children: editingSponsorId ? "Edit Sponsor Poster" : "New Sponsor Poster" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-2xl text-white uppercase tracking-wider", children: editingSponsorId ? "Edit: ".concat(name) : "Upload Sponsor Poster" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setIsModalOpen(false),
            className: "p-2 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
          }
        )
      ] }),
      uploadError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-red-400 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: uploadError })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSave, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1", children: "Sponsor Name (English) *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                value: name,
                onChange: (e) => setName(e.target.value),
                placeholder: "e.g. NetVibe Digital Solutions",
                className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500 font-sports"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1", children: "Sponsor Name (Amharic)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: nameAm,
                onChange: (e) => setNameAm(e.target.value),
                placeholder: "ለምሳሌ፡ ኔትቫይብ ዲጂታል ሶሉሽንስ",
                className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500 font-ethiopic"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1", children: "Partnership Category / Tier *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                value: tier,
                onChange: (e) => setTier(e.target.value),
                placeholder: "e.g. Technology Partner & App Developer",
                className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1", children: "Category (Amharic)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: tierAm,
                onChange: (e) => setTierAm(e.target.value),
                placeholder: "ለምሳሌ፡ ኦፊሴላዊ የቴክኖሎጂ አጋር",
                className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500 font-ethiopic"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider", children: "Sponsor Poster Image * (Upload From File)" }),
            imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xxs font-bold uppercase font-sports text-emerald-400 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 text-emerald-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: imageUrl.startsWith("data:") ? "Local File Loaded" : "Image Linked" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  value: imageUrl.startsWith("data:") ? "Photo loaded from local device (ready to save)" : imageUrl,
                  onChange: (e) => {
                    setImageUrl(e.target.value);
                    setUploadError(null);
                  },
                  placeholder: "Paste image URL (https://...) or click Browse",
                  className: "w-full pl-9 pr-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                htmlFor: "sponsor-file-upload-input",
                className: "px-4 py-2.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white rounded-xl text-xs font-sports font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-all hover:scale-102 shrink-0 active:scale-95 shadow-md",
                title: "Select image from local device",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Upload From File" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "sponsor-file-upload-input",
                      type: "file",
                      accept: "image/*",
                      onChange: handleFileUpload,
                      className: "hidden"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              htmlFor: "sponsor-file-upload-input",
              onDragOver: (e) => e.preventDefault(),
              onDrop: handleFileDrop,
              className: "py-3 px-4 rounded-xl border-2 border-dashed border-neutral-800 hover:border-neutral-700 bg-neutral-950/60 hover:bg-neutral-950 text-neutral-400 text-xs flex items-center justify-between cursor-pointer transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Image$1, { className: "w-4 h-4 text-neutral-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isUploading ? "Optimizing and compressing poster image..." : "Drag & drop image file here, or click Browse to select PNG/JPEG" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 font-sports font-bold uppercase text-xs", children: "Choose Photo" })
              ]
            }
          ),
          imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-neutral-950 rounded-2xl border border-neutral-800 flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-16 rounded-xl bg-neutral-900 border border-neutral-700 p-1 flex items-center justify-center shrink-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: imageUrl,
                  alt: "Poster preview",
                  className: "max-h-full max-w-full object-contain"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xxs font-bold uppercase text-emerald-400 flex items-center gap-1 font-sports", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-emerald-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Poster Preview Ready" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-400 truncate block max-w-xs mt-0.5", children: imageUrl.startsWith("data:") ? "Image stored as high-res data URL" : imageUrl })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setImageUrl(""),
                className: "px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-red-950 border border-neutral-800 text-neutral-400 hover:text-red-400 text-xxs font-bold uppercase transition-colors shrink-0",
                children: "Clear"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1", children: "Website / Contact Link (Optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "url",
              value: websiteUrl,
              onChange: (e) => setWebsiteUrl(e.target.value),
              placeholder: "https://netvibesolutions.com",
              className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1", children: "Tagline / Description (English)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                rows: 2,
                value: description,
                onChange: (e) => setDescription(e.target.value),
                placeholder: "Ideas • Code • Impact — Official Technology Partner",
                className: "w-full px-3.5 py-2 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs focus:outline-none focus:border-red-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1", children: "Tagline / Description (Amharic)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                rows: 2,
                value: descriptionAm,
                onChange: (e) => setDescriptionAm(e.target.value),
                placeholder: "ሀሳብ • ኮድ • ተፅዕኖ — የክለቡ ኦፊሴላዊ የቴክኖሎጂ አጋር",
                className: "w-full px-3.5 py-2 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs focus:outline-none focus:border-red-500 font-ethiopic"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:border-neutral-700 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: active,
              onChange: (e) => setActive(e.target.checked),
              className: "w-4 h-4 text-emerald-600 rounded bg-neutral-900 border-neutral-700 focus:ring-emerald-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-bold text-white uppercase block text-xs", children: "Display on Homepage Billboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-400", children: "When active, this poster appears in the auto-slide carousel on the club homepage" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-neutral-800 flex items-center justify-end gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setIsModalOpen(false),
              className: "px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold uppercase tracking-wider font-sports transition-colors",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: isUploading || isSavingToFirestore,
              className: "px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-sports font-black text-sm uppercase tracking-wider shadow-lg shadow-red-950/50 flex items-center gap-2 transition-all hover:scale-102 active:scale-95 disabled:opacity-50",
              children: isSavingToFirestore ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Saving to Firestore..." })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: editingSponsorId ? "Save Changes" : "Publish Poster" })
              ] })
            }
          )
        ] })
      ] })
    ] }) })
  ] });
};
const AdminPage = () => {
  const {
    t,
    language,
    isAdminLoggedIn,
    adminUsername,
    adminUser,
    isAuthChecking,
    loginAdmin,
    logoutAdmin,
    setCurrentPage,
    memberships,
    updateMembershipStatus,
    deleteMembership,
    news,
    addNewsArticle,
    updateNewsArticle,
    deleteNewsArticle,
    matches,
    addMatch,
    updateMatch,
    deleteMatch,
    standings,
    updateStanding,
    resetStandings,
    recalculateStandingsFromMatches,
    players,
    staff,
    addPlayer,
    updatePlayer,
    deletePlayer,
    clubInfo,
    updateClubInfo,
    resetAllDataToDefault,
    shopItems,
    addShopItem,
    updateShopItem,
    deleteShopItem,
    resetShopItems,
    shopOrders,
    updateShopOrderStatus,
    donations,
    isAutoSyncEnabled,
    toggleAutoSync,
    autoSyncInterval,
    setAutoSyncInterval,
    secondsUntilNextSync,
    isSyncing,
    lastSyncTime,
    syncNow,
    simulateLiveMatchAction,
    advanceLeagueMatchday,
    liveNotifications,
    sponsors
  } = useClub();
  const [emailInput, setEmailInput] = reactExports.useState("");
  const [passwordInput, setPasswordInput] = reactExports.useState("");
  const [loginError, setLoginError] = reactExports.useState(null);
  const [isLoggingIn, setIsLoggingIn] = reactExports.useState(false);
  const [isLoggingOut, setIsLoggingOut] = reactExports.useState(false);
  const [adminTab, setAdminTab] = reactExports.useState("memberships");
  const [shopSubTab, setShopSubTab] = reactExports.useState("items");
  const [isShopModalOpen, setIsShopModalOpen] = reactExports.useState(false);
  const [editingShopItemId, setEditingShopItemId] = reactExports.useState(null);
  const [shopNameEn, setShopNameEn] = reactExports.useState("");
  const [shopNameAm, setShopNameAm] = reactExports.useState("");
  const [shopNameOm, setShopNameOm] = reactExports.useState("");
  const [shopDescEn, setShopDescEn] = reactExports.useState("");
  const [shopDescAm, setShopDescAm] = reactExports.useState("");
  const [shopDescOm, setShopDescOm] = reactExports.useState("");
  const [shopPrice, setShopPrice] = reactExports.useState(1800);
  const [shopImageUrl, setShopImageUrl] = reactExports.useState("");
  const [shopSizes, setShopSizes] = reactExports.useState(["S", "M", "L", "XL"]);
  const [shopCategory, setShopCategory] = reactExports.useState("JERSEY");
  const [shopInStock, setShopInStock] = reactExports.useState(true);
  const [shopFeatured, setShopFeatured] = reactExports.useState(false);
  const [shopUploadError, setShopUploadError] = reactExports.useState(null);
  const [isShopUploading, setIsShopUploading] = reactExports.useState(false);
  const [isSavingShopToFirestore, setIsSavingShopToFirestore] = reactExports.useState(false);
  const [deletingShopId, setDeletingShopId] = reactExports.useState(null);
  const [shopStatusToast, setShopStatusToast] = reactExports.useState(null);
  const [editingStandingTeam, setEditingStandingTeam] = reactExports.useState(null);
  const [standingFormData, setStandingFormData] = reactExports.useState({
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    points: 0
  });
  const openEditStanding = (team) => {
    setEditingStandingTeam(team);
    setStandingFormData({
      played: team.played,
      won: team.won,
      drawn: team.drawn,
      lost: team.lost,
      goalsFor: team.goalsFor,
      goalsAgainst: team.goalsAgainst,
      points: team.points
    });
  };
  const handleSaveStanding = async (e) => {
    e.preventDefault();
    if (!editingStandingTeam) return;
    await updateStanding(editingStandingTeam.teamId, {
      played: Math.max(0, Number(standingFormData.played)),
      won: Math.max(0, Number(standingFormData.won)),
      drawn: Math.max(0, Number(standingFormData.drawn)),
      lost: Math.max(0, Number(standingFormData.lost)),
      goalsFor: Math.max(0, Number(standingFormData.goalsFor)),
      goalsAgainst: Math.max(0, Number(standingFormData.goalsAgainst)),
      points: Math.max(0, Number(standingFormData.points))
    });
    setEditingStandingTeam(null);
  };
  const processImageFileToDataUrl = (file, maxDim = 1200) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        var _a;
        const img = new Image();
        img.onload = () => {
          var _a2;
          let { width, height } = img;
          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round(height * maxDim / width);
              width = maxDim;
            } else {
              width = Math.round(width * maxDim / height);
              height = maxDim;
            }
          }
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            resolve((_a2 = readerEvent.target) == null ? void 0 : _a2.result);
            return;
          }
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.88);
          resolve(compressedDataUrl);
        };
        img.onerror = () => {
          var _a2;
          return resolve((_a2 = readerEvent.target) == null ? void 0 : _a2.result);
        };
        img.src = (_a = readerEvent.target) == null ? void 0 : _a.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };
  const handleShopImageFileUpload = async (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (file) {
      if (file.size > 15 * 1024 * 1024) {
        setShopUploadError("File size exceeds 15MB limit. Please select a smaller photo file.");
        return;
      }
      setShopUploadError(null);
      setIsShopUploading(true);
      try {
        const dataUrl = await processImageFileToDataUrl(file);
        setShopImageUrl(dataUrl);
      } catch (e2) {
        setShopUploadError("Failed to read image file. Please try another image.");
      } finally {
        setIsShopUploading(false);
      }
    }
  };
  const handleShopImageDrop = async (e) => {
    var _a;
    e.preventDefault();
    const file = (_a = e.dataTransfer.files) == null ? void 0 : _a[0];
    if (file) {
      if (file.size > 15 * 1024 * 1024) {
        setShopUploadError("File size exceeds 15MB limit. Please select a smaller photo file.");
        return;
      }
      setShopUploadError(null);
      setIsShopUploading(true);
      try {
        const dataUrl = await processImageFileToDataUrl(file);
        setShopImageUrl(dataUrl);
      } catch (e2) {
        setShopUploadError("Failed to read image file. Please try another image.");
      } finally {
        setIsShopUploading(false);
      }
    }
  };
  const [memberSearch, setMemberSearch] = reactExports.useState("");
  const [memberStatusFilter, setMemberStatusFilter] = reactExports.useState("ALL");
  const [isNewsModalOpen, setIsNewsModalOpen] = reactExports.useState(false);
  const [editingArticleId, setEditingArticleId] = reactExports.useState(null);
  const [newsTitleEn, setNewsTitleEn] = reactExports.useState("");
  const [newsTitleAm, setNewsTitleAm] = reactExports.useState("");
  const [newsTitleOm, setNewsTitleOm] = reactExports.useState("");
  const [newsSummaryEn, setNewsSummaryEn] = reactExports.useState("");
  const [newsSummaryAm, setNewsSummaryAm] = reactExports.useState("");
  const [newsSummaryOm, setNewsSummaryOm] = reactExports.useState("");
  const [newsContentEn, setNewsContentEn] = reactExports.useState("");
  const [newsCategory, setNewsCategory] = reactExports.useState("CLUB_NEWS");
  const [newsImageUrl, setNewsImageUrl] = reactExports.useState("");
  const [imageSourceMode, setImageSourceMode] = reactExports.useState("url");
  const [newsUploadError, setNewsUploadError] = reactExports.useState(null);
  const [isConfirmResetOpen, setIsConfirmResetOpen] = reactExports.useState(false);
  const handleImageFileUpload = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setNewsUploadError("File size exceeds 5MB limit. Please select a smaller photo file.");
        return;
      }
      setNewsUploadError(null);
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        var _a2;
        if ((_a2 = loadEvent.target) == null ? void 0 : _a2.result) {
          setNewsImageUrl(loadEvent.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const [isMatchModalOpen, setIsMatchModalOpen] = reactExports.useState(false);
  const [editingMatchId, setEditingMatchId] = reactExports.useState(null);
  const [matchDate, setMatchDate] = reactExports.useState("");
  const [matchTime, setMatchTime] = reactExports.useState("15:00");
  const [matchVenue, setMatchVenue] = reactExports.useState("Halaba Stadium, Halaba Kulito");
  const [matchHomeTeam, setMatchHomeTeam] = reactExports.useState("HALABA City FC");
  const [matchAwayTeam, setMatchAwayTeam] = reactExports.useState("");
  const [matchComp, setMatchComp] = reactExports.useState("ETHIOPIAN_HIGHER_LEAGUE");
  const [matchStatus, setMatchStatus] = reactExports.useState("UPCOMING");
  const [homeScore, setHomeScore] = reactExports.useState(0);
  const [awayScore, setAwayScore] = reactExports.useState(0);
  const [newPlayerName, setNewPlayerName] = reactExports.useState("");
  const [newPlayerNumber, setNewPlayerNumber] = reactExports.useState(10);
  const [newPlayerPos, setNewPlayerPos] = reactExports.useState("Midfielder");
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError(null);
    if (!emailInput.trim() || !passwordInput) {
      setLoginError("Please enter both your administrator email and password.");
      return;
    }
    setIsLoggingIn(true);
    try {
      const res = await loginAdmin(emailInput.trim(), passwordInput);
      if (!res.success) {
        setLoginError(res.error || "Invalid email or password.");
      } else {
        setLoginError(null);
        setPasswordInput("");
      }
    } catch (err) {
      setLoginError((err == null ? void 0 : err.message) || "Authentication error. Please check your credentials.");
    } finally {
      setIsLoggingIn(false);
    }
  };
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logoutAdmin();
      setEmailInput("");
      setPasswordInput("");
      setLoginError(null);
    } finally {
      setIsLoggingOut(false);
    }
  };
  const handleExportCSV = () => {
    const headers = ["Reference", "FullName", "DOB", "Gender", "Phone", "Email", "CityRegion", "Tier", "Status", "RegisteredAt"];
    const rows = memberships.map((m) => [
      m.referenceNumber,
      '"'.concat(m.fullName, '"'),
      m.dateOfBirth,
      m.gender || "",
      m.phone,
      m.email || "",
      '"'.concat(m.cityOrRegion, '"'),
      m.membershipType,
      m.status,
      m.registeredAt
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "halaba_fc_memberships_".concat((/* @__PURE__ */ new Date()).toISOString().slice(0, 10), ".csv"));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleSaveArticle = async (e) => {
    e.preventDefault();
    if (!newsTitleEn.trim()) return;
    try {
      if (editingArticleId) {
        await updateNewsArticle(editingArticleId, {
          title: { en: newsTitleEn, am: newsTitleAm || newsTitleEn, om: newsTitleOm || newsTitleEn },
          summary: { en: newsSummaryEn, am: newsSummaryAm || newsSummaryEn, om: newsSummaryOm || newsSummaryEn },
          content: { en: newsContentEn, am: newsContentEn, om: newsContentEn },
          category: newsCategory,
          imageUrl: newsImageUrl || ClubImages.newsCoachInterview
        });
      } else {
        await addNewsArticle({
          title: { en: newsTitleEn, am: newsTitleAm || newsTitleEn, om: newsTitleOm || newsTitleEn },
          summary: { en: newsSummaryEn, am: newsSummaryAm || newsSummaryEn, om: newsSummaryOm || newsSummaryEn },
          content: { en: newsContentEn, am: newsContentEn, om: newsContentEn },
          category: newsCategory,
          date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
          author: "Club Administration",
          imageUrl: newsImageUrl || ClubImages.newsCoachInterview,
          readTime: "3 min read"
        });
      }
      setIsNewsModalOpen(false);
      setEditingArticleId(null);
      setNewsTitleEn("");
      setNewsTitleAm("");
      setNewsTitleOm("");
      setNewsSummaryEn("");
      setNewsSummaryAm("");
      setNewsSummaryOm("");
      setNewsContentEn("");
      setNewsImageUrl("");
    } catch (error) {
      console.error("Error saving article: ", error);
    }
  };
  const handleSaveMatch = (e) => {
    e.preventDefault();
    if (!matchAwayTeam.trim() || !matchDate) return;
    const isHome = matchHomeTeam.toLowerCase().includes("halaba");
    if (editingMatchId) {
      const matchUpdates = {
        date: matchDate,
        kickoffTime: matchTime,
        venue: matchVenue,
        status: matchStatus,
        homeTeam: {
          id: isHome ? "halaba" : "opponent",
          name: matchHomeTeam,
          isHalaba: isHome
        },
        awayTeam: {
          id: !isHome ? "halaba" : "opponent",
          name: matchAwayTeam,
          isHalaba: !isHome
        },
        competition: matchComp,
        competitionName: matchComp.replace(/_/g, " ")
      };
      if (matchStatus === "FINISHED" || matchStatus === "LIVE") {
        matchUpdates.score = { home: Number(homeScore), away: Number(awayScore) };
      }
      updateMatch(editingMatchId, matchUpdates);
    } else {
      addMatch({
        competition: matchComp,
        competitionName: matchComp.replace(/_/g, " "),
        date: matchDate,
        kickoffTime: matchTime,
        venue: matchVenue,
        homeTeam: {
          id: isHome ? "halaba" : "opponent",
          name: matchHomeTeam,
          isHalaba: isHome
        },
        awayTeam: {
          id: !isHome ? "halaba" : "opponent",
          name: matchAwayTeam,
          isHalaba: !isHome
        },
        status: matchStatus,
        score: matchStatus === "FINISHED" || matchStatus === "LIVE" ? { home: Number(homeScore), away: Number(awayScore) } : void 0,
        round: "Official League Match"
      });
    }
    setIsMatchModalOpen(false);
    setEditingMatchId(null);
  };
  const handleAddPlayer = (e) => {
    e.preventDefault();
    if (!newPlayerName.trim()) return;
    addPlayer({
      name: newPlayerName.trim(),
      number: Number(newPlayerNumber),
      position: newPlayerPos,
      nationality: "Ethiopian",
      birthYear: 2002,
      appearances: 0,
      goals: 0
    });
    setNewPlayerName("");
    setNewPlayerNumber(newPlayerNumber + 1);
  };
  const handleOpenAddShopItem = () => {
    setEditingShopItemId(null);
    setShopNameEn("");
    setShopNameAm("");
    setShopNameOm("");
    setShopDescEn("");
    setShopDescAm("");
    setShopDescOm("");
    setShopPrice(1800);
    setShopImageUrl("https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=800&q=80");
    setShopSizes(["S", "M", "L", "XL"]);
    setShopCategory("JERSEY");
    setShopInStock(true);
    setShopFeatured(false);
    setShopUploadError(null);
    setIsShopUploading(false);
    setIsShopModalOpen(true);
  };
  const handleOpenEditShopItem = (item) => {
    setEditingShopItemId(item.id);
    const nEn = typeof item.name === "object" ? item.name.en : item.name;
    const nAm = typeof item.name === "object" ? item.name.am : item.name;
    const nOm = typeof item.name === "object" ? item.name.om : item.name;
    const dEn = typeof item.description === "object" ? item.description.en : item.description;
    const dAm = typeof item.description === "object" ? item.description.am : item.description;
    const dOm = typeof item.description === "object" ? item.description.om : item.description;
    setShopNameEn(nEn);
    setShopNameAm(nAm);
    setShopNameOm(nOm);
    setShopDescEn(dEn);
    setShopDescAm(dAm);
    setShopDescOm(dOm);
    setShopPrice(item.price);
    setShopImageUrl(item.imageUrl);
    setShopSizes(item.availableSizes || ["M", "L"]);
    setShopCategory(item.category || "JERSEY");
    setShopInStock(item.inStock !== false);
    setShopFeatured(Boolean(item.featured));
    setShopUploadError(null);
    setIsShopUploading(false);
    setIsShopModalOpen(true);
  };
  const handleSaveShopItem = async (e) => {
    e.preventDefault();
    if (!shopNameEn.trim()) return;
    setIsSavingShopToFirestore(true);
    setShopUploadError(null);
    const payload = {
      name: {
        en: shopNameEn.trim(),
        am: shopNameAm.trim() || shopNameEn.trim(),
        om: shopNameOm.trim() || shopNameEn.trim()
      },
      description: {
        en: shopDescEn.trim(),
        am: shopDescAm.trim() || shopDescEn.trim(),
        om: shopDescOm.trim() || shopDescEn.trim()
      },
      price: Number(shopPrice) || 1e3,
      imageUrl: shopImageUrl.trim() || "https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=800&q=80",
      availableSizes: shopSizes.length > 0 ? shopSizes : ["S", "M", "L", "XL"],
      category: shopCategory,
      inStock: shopInStock,
      featured: shopFeatured
    };
    try {
      if (editingShopItemId) {
        await updateShopItem(editingShopItemId, payload);
        setShopStatusToast({
          message: 'Product "'.concat(payload.name.en, '" successfully updated in Firebase Firestore!'),
          type: "success"
        });
      } else {
        await addShopItem(payload);
        setShopStatusToast({
          message: '"'.concat(payload.name.en, '" published to Firebase Firestore and is live on the store!'),
          type: "success"
        });
      }
      setTimeout(() => setShopStatusToast(null), 4500);
      setIsShopModalOpen(false);
      setEditingShopItemId(null);
    } catch (err) {
      console.error("Firestore shop error:", err);
      setShopUploadError((err == null ? void 0 : err.message) || "Failed to persist product to Firebase Firestore.");
    } finally {
      setIsSavingShopToFirestore(false);
    }
  };
  const handleDeleteShopItem = async (id, name) => {
    if (!window.confirm('Are you sure you want to permanently delete "'.concat(name, '" from Firebase Firestore?'))) {
      return;
    }
    setDeletingShopId(id);
    try {
      await deleteShopItem(id);
      setShopStatusToast({
        message: 'Product "'.concat(name, '" was permanently removed from Firebase Firestore.'),
        type: "success"
      });
      setTimeout(() => setShopStatusToast(null), 4e3);
    } catch (err) {
      setShopStatusToast({
        message: (err == null ? void 0 : err.message) || "Failed to delete product from Firestore.",
        type: "error"
      });
    } finally {
      setDeletingShopId(null);
    }
  };
  const handleResetCatalog = async () => {
    if (!window.confirm("This will synchronize and restore all official Halaba jerseys and merchandise in Firebase Firestore. Continue?")) {
      return;
    }
    try {
      await resetShopItems();
      setShopStatusToast({
        message: "Official Halaba merchandise catalog restored and synced in Firebase Firestore.",
        type: "success"
      });
      setTimeout(() => setShopStatusToast(null), 4500);
    } catch (err) {
      setShopStatusToast({
        message: (err == null ? void 0 : err.message) || "Failed to restore default catalog.",
        type: "error"
      });
    }
  };
  const handleToggleShopSize = (size) => {
    if (shopSizes.includes(size)) {
      if (shopSizes.length > 1) {
        setShopSizes(shopSizes.filter((s) => s !== size));
      }
    } else {
      setShopSizes([...shopSizes, size]);
    }
  };
  if (isAuthChecking) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[60vh] flex flex-col items-center justify-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 72, showGlow: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-emerald-400 font-sports font-bold text-xs uppercase tracking-widest", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin text-emerald-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Verifying Firebase Authentication Session..." })
      ] })
    ] });
  }
  if (!isAdminLoggedIn) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md mx-auto px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 72, showGlow: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xxs font-bold uppercase tracking-wider mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ይፋዊ የአስተዳዳሪ ፖርታል" : "Official Administrator Portal" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider", children: language === "am" ? "የአስተዳዳሪ መግቢያ" : "Admin Sign In" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-400 text-xs", children: language === "am" ? "ለተፈቀደላቸው የሀላባ ከተማ እግር ኳስ ክለብ አመራሮች ብቻ የተፈቀደ።" : "Authorized HALABA City FC management and club IT personnel only." })
      ] }),
      loginError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-red-950/80 border border-red-800/80 text-red-200 text-xs flex items-start gap-2.5 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-red-400 shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: loginError })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, noValidate: true, className: "space-y-4 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5", children: language === "am" ? "የአስተዳዳሪ ኢሜይል *" : "Admin Email *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                value: emailInput,
                onChange: (e) => setEmailInput(e.target.value.trim()),
                placeholder: "admin@halabafc.et",
                required: true,
                autoComplete: "email",
                className: "w-full pl-10 pr-4 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500 placeholder-neutral-600 transition-colors"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 text-neutral-500 absolute left-3.5 top-3" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5", children: language === "am" ? "የይለፍ ቃል *" : "Password *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "password",
                value: passwordInput,
                onChange: (e) => setPasswordInput(e.target.value),
                placeholder: "••••••••",
                required: true,
                autoComplete: "current-password",
                className: "w-full pl-10 pr-4 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500 placeholder-neutral-600 transition-colors"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-neutral-500 absolute left-3.5 top-3" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: isLoggingIn,
            className: "w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider font-sports shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer",
            style: {
              backgroundColor: "#dc2626",
              backgroundImage: "linear-gradient(to right, #dc2626, #ef4444)",
              color: "#ffffff"
            },
            children: isLoggingIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "በፈርቤዝ በመግባት ላይ..." : "Signing In with Firebase..." })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ወደ ዳሽቦርድ ግባ" : "Sign In to Dashboard" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-neutral-800/80 space-y-2 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5 text-neutral-400 text-xxs font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "በፈርቤዝ የተጠበቀ • አስተዳዳሪ ብቻ" : "Firebase Auth Protected • Login-Only Workflow" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-500 text-xxs", children: language === "am" ? "የይለፍ ቃል ለመቀየር ወይም አዲስ መለያ ለማግኘት የክለቡን አስተዳደር ያነጋግሩ።" : "Self-service registration and password reset are strictly disabled. Contact club administration for access credentials." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setCurrentPage("home"),
            className: "text-neutral-400 hover:text-white text-xs underline underline-offset-4 pt-1 transition-colors cursor-pointer",
            children: language === "am" ? "ወደ ክለቡ ድረ-ገጽ ተመለስ" : "Return to Public Club Website"
          }
        )
      ] })
    ] }) });
  }
  const filteredMemberships = memberships.filter((m) => {
    if (memberStatusFilter !== "ALL" && m.status !== memberStatusFilter) return false;
    if (memberSearch.trim() !== "") {
      const q = memberSearch.toLowerCase();
      return m.fullName.toLowerCase().includes(q) || m.referenceNumber.toLowerCase().includes(q) || m.phone.includes(q);
    }
    return true;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 rounded-2xl border border-neutral-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 48 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xxs font-bold uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }),
              "Firebase Authenticated Session"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-sports font-semibold text-neutral-300", children: (adminUser == null ? void 0 : adminUser.email) || adminUsername })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-sports font-black text-2xl sm:text-4xl text-white uppercase tracking-wider", children: t.adminTitle })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setCurrentPage("home"),
            className: "px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-bold uppercase tracking-wider font-sports transition-colors cursor-pointer",
            children: language === "am" ? "የክለቡ ድረ-ገጽ" : "Club Website"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleLogout,
            disabled: isLoggingOut,
            className: "px-4 py-2 rounded-xl bg-red-950/80 hover:bg-red-900 border border-red-700/60 text-red-200 hover:text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-2 shadow-lg shadow-red-950/40 transition-all hover:scale-[1.02] disabled:opacity-50 cursor-pointer",
            title: language === "am" ? "ከአስተዳዳሪ ውጣ" : "Sign out of Firebase Admin",
            children: [
              isLoggingOut ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin text-red-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4 text-red-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ውጣ" : "Log Out" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "block text-white font-sports font-bold tracking-wide uppercase", children: language === "am" ? "የፈርቤዝ ማረጋገጫ እና ቋሚ የክላውድ ዳታቤዝ ነቅቷል" : "Firebase Authentication & Firestore Persistent Storage Active" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400", children: language === "am" ? "በሱቁ፣ በዜናዎች እና በጨዋታዎች ላይ የሚደረጉ ለውጦች በሙሉ በቀጥታ በፈርቤዝ ይቀመጣሉ።" : "All additions, updates, and removals of shop merchandise, news, and club schedules persist permanently in Firebase Cloud and synchronize in real-time." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-neutral-900 border border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 font-bold uppercase block", children: language === "am" ? "የተመዘገቡ አባላት" : "Registered Members" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-black text-3xl text-emerald-400 mt-1 block", children: memberships.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-500", children: language === "am" ? "የደጋፊዎች ምዝገባዎች" : "Live fan registrations" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-neutral-900 border border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 font-bold uppercase block", children: language === "am" ? "የዜና መጣጥፎች" : "News Articles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-black text-3xl text-white mt-1 block", children: news.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-500", children: language === "am" ? "የታተሙ ዜናዎች" : "Published stories" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-neutral-900 border border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 font-bold uppercase block", children: language === "am" ? "የተያዙ ጨዋታዎች" : "Matches Scheduled" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-black text-3xl text-amber-400 mt-1 block", children: matches.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-500", children: language === "am" ? "የተደረጉና የሚደረጉ" : "Fixtures & completed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-neutral-900 border border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 font-bold uppercase block", children: language === "am" ? "የተጫዋቾች ስብስብ" : "Squad Roster" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-black text-3xl text-red-400 mt-1 block", children: players.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-500", children: language === "am" ? "የዋናው ቡድን ተጫዋቾች" : "First team players" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 border-b border-neutral-800 pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setAdminTab("memberships"),
          className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all cursor-pointer ".concat(adminTab === "memberships" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              t.adminTabMembers,
              " (",
              memberships.length,
              ")"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setAdminTab("shop"),
          className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all cursor-pointer ".concat(adminTab === "shop" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4 text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              language === "am" ? "የማሊያ ሱቅና ልገሳ" : "Jersey Shop & Donations",
              " (",
              shopItems.length,
              ")"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setAdminTab("news"),
          className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ".concat(adminTab === "news" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              t.adminTabNews,
              " (",
              news.length,
              ")"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setAdminTab("fixtures"),
          className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ".concat(adminTab === "fixtures" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.adminTabFixtures })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setAdminTab("standings"),
          className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ".concat(adminTab === "standings" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.adminTabStandings })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setAdminTab("squad"),
          className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ".concat(adminTab === "squad" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.adminTabSquad })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setAdminTab("sponsors"),
          className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all cursor-pointer ".concat(adminTab === "sponsors" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              language === "am" ? "ስፖንሰሮችና ፖስተሮች" : "Sponsors & Posters",
              " (",
              sponsors.length,
              ")"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setAdminTab("sync"),
          className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ".concat(adminTab === "sync" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Auto-Update Engine" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setAdminTab("settings"),
          className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ".concat(adminTab === "settings" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.adminTabSettings })
          ]
        }
      )
    ] }),
    adminTab === "memberships" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-2xl text-white uppercase tracking-wider", children: "Official Membership Applications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 mt-1", children: "Verify supporter registrations, change statuses, and export database records." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleExportCSV,
            className: "px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-2 self-start sm:self-auto transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.exportCsv })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-72", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: memberSearch,
              onChange: (e) => setMemberSearch(e.target.value),
              placeholder: "Search by name, ref, phone...",
              className: "w-full pl-9 pr-3 py-2 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 w-full sm:w-auto", children: ["ALL", "APPROVED", "PENDING", "REJECTED"].map((st) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setMemberStatusFilter(st),
            className: "px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider font-sports transition-all ".concat(memberStatusFilter === st ? "bg-neutral-800 text-white border border-neutral-700" : "text-neutral-500 hover:text-neutral-300"),
            children: st
          },
          st
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs whitespace-nowrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-neutral-800 uppercase text-neutral-400 font-sports tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Reference" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Region" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Tier" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Payment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-neutral-800/60", children: filteredMemberships.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-neutral-800/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 font-mono font-bold text-amber-400", children: m.referenceNumber }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 font-semibold text-white", children: m.fullName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-neutral-300 font-mono", children: m.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-neutral-400", children: m.cityOrRegion }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded text-xxs font-bold uppercase bg-neutral-950 text-neutral-200 border border-neutral-800", children: m.membershipType }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 font-mono text-emerald-400 font-bold", children: m.amountPaid ? "".concat(m.amountPaid, " ETB") : m.membershipType === "PREMIUM" ? "1000 ETB" : m.membershipType === "STANDARD" ? "500 ETB" : "200 ETB" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "px-2 py-0.5 rounded text-xxs font-bold uppercase ".concat(m.status === "APPROVED" ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : m.status === "PENDING" ? "bg-amber-950 text-amber-400 border border-amber-800" : "bg-red-950 text-red-400 border border-red-800"),
              children: m.status
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-3 text-right space-x-1.5", children: [
            m.status !== "APPROVED" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => updateMembershipStatus(m.id, "APPROVED"),
                className: "px-2 py-1 rounded bg-emerald-950 hover:bg-emerald-900 text-emerald-400 border border-emerald-800 text-xxs font-bold uppercase",
                children: "Approve"
              }
            ),
            m.status !== "REJECTED" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => updateMembershipStatus(m.id, "REJECTED"),
                className: "px-2 py-1 rounded bg-red-950 hover:bg-red-900 text-red-400 border border-red-800 text-xxs font-bold uppercase",
                children: "Reject"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => deleteMembership(m.id),
                className: "p-1 rounded text-neutral-500 hover:text-red-400 transition-colors",
                title: "Delete application",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] }, m.id)) })
      ] }) })
    ] }),
    adminTab === "shop" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-950 border border-red-800/60 text-red-400 text-xxs font-bold uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-3 h-3" }),
              "Store & Fund Administration"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xxs font-bold uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Firestore Persistent Cloud Sync" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-2xl text-white uppercase tracking-wider", children: "Jersey Shop & Supporter Contributions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 mt-0.5", children: "All shop items, edits, and deletions persist directly in Firebase Firestore and synchronize in real-time for any site visitor." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 self-start sm:self-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleResetCatalog,
              className: "px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-sports font-bold uppercase tracking-wider transition-colors",
              title: "Restore and sync official default club products to Firebase Firestore",
              children: "Sync Official Catalog"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleOpenAddShopItem,
              className: "px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 shadow-lg shadow-red-950/50 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Add Product" })
              ]
            }
          )
        ] })
      ] }),
      shopStatusToast && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-3 rounded-xl border text-xs font-sports font-bold flex items-center gap-2.5 transition-all ".concat(shopStatusToast.type === "success" ? "bg-emerald-950/70 border-emerald-500/40 text-emerald-300" : "bg-red-950/70 border-red-500/40 text-red-300"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 shrink-0 text-emerald-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: shopStatusToast.message })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setShopSubTab("items"),
            className: "px-4 py-1.5 rounded-lg text-xs font-sports font-bold uppercase tracking-wider transition-all ".concat(shopSubTab === "items" ? "bg-neutral-800 text-white border border-neutral-700 shadow-sm" : "text-neutral-400 hover:text-white"),
            children: [
              "Merchandise Products (",
              shopItems.length,
              ")"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setShopSubTab("orders"),
            className: "px-4 py-1.5 rounded-lg text-xs font-sports font-bold uppercase tracking-wider transition-all ".concat(shopSubTab === "orders" ? "bg-neutral-800 text-white border border-neutral-700 shadow-sm" : "text-neutral-400 hover:text-white"),
            children: [
              "Customer Delivery Orders (",
              shopOrders.length,
              ")"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setShopSubTab("donations"),
            className: "px-4 py-1.5 rounded-lg text-xs font-sports font-bold uppercase tracking-wider transition-all ".concat(shopSubTab === "donations" ? "bg-neutral-800 text-white border border-neutral-700 shadow-sm" : "text-neutral-400 hover:text-white"),
            children: [
              "Supporter Donations (",
              donations.length,
              ")"
            ]
          }
        )
      ] }),
      shopSubTab === "items" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: shopItems.map((item) => {
        const name = typeof item.name === "object" ? item.name.en : item.name;
        const desc = typeof item.description === "object" ? item.description.en : item.description;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: item.imageUrl,
                    alt: name,
                    className: "w-20 h-20 object-cover rounded-xl bg-neutral-900 border border-neutral-800 shrink-0",
                    onError: (e) => {
                      e.target.src = "https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=800&q=80";
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs px-2 py-0.5 rounded bg-neutral-900 text-amber-400 font-sports font-bold uppercase", children: item.category || "JERSEY" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xxs px-2 py-0.5 rounded font-bold uppercase ".concat(item.inStock ? "bg-emerald-950 text-emerald-400 border border-emerald-800/60" : "bg-red-950 text-red-400 border border-red-800/60"),
                        children: item.inStock ? "In Stock" : "Out of Stock"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sports font-bold text-base text-white truncate mt-1", children: name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-sports font-black text-lg text-emerald-400 block mt-0.5", children: [
                    item.price.toLocaleString(),
                    " ETB"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xxs text-neutral-400 line-clamp-2", children: desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-neutral-800/80 flex items-center justify-between text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-500 uppercase font-bold", children: "Sizes:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-300 font-mono font-bold", children: item.availableSizes.join(", ") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleOpenEditShopItem(item),
                      className: "p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors",
                      title: "Edit Product",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3.5 h-3.5" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleDeleteShopItem(item.id, name),
                      disabled: deletingShopId === item.id,
                      className: "p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900/80 text-red-400 border border-red-800/60 transition-colors disabled:opacity-50",
                      title: "Delete Product from Firestore",
                      children: deletingShopId === item.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] })
              ] })
            ]
          },
          item.id
        );
      }) }) }),
      shopSubTab === "orders" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: shopOrders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 bg-neutral-950 rounded-2xl border border-neutral-800 p-6 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-10 h-10 text-neutral-600 mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sports font-bold text-lg text-white uppercase", children: "No Customer Orders Yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 max-w-sm mx-auto", children: "When supporters purchase jerseys through the shop and complete Chapa payment, their delivery orders appear here in real-time." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs whitespace-nowrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-neutral-800 uppercase text-neutral-400 font-sports tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Order Ref" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Customer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Product & Size" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Delivery Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-neutral-800/60", children: shopOrders.map((ord) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-neutral-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 font-mono font-bold text-amber-400", children: ord.orderNumber }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 font-semibold text-white", children: ord.fullName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 font-mono text-neutral-300", children: ord.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-white", children: ord.itemName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1.5 px-1.5 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-amber-400 font-sports font-bold uppercase text-xxs", children: [
              "Size ",
              ord.size
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-3 text-neutral-300 max-w-xs truncate", children: [
            ord.streetAddress,
            ", ",
            ord.city
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-3 font-sports font-black text-emerald-400", children: [
            ord.amount.toLocaleString(),
            " ETB"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "px-2 py-0.5 rounded text-xxs font-bold uppercase tracking-wider ".concat(ord.status === "DELIVERED" ? "bg-blue-950 text-blue-400 border border-blue-800" : ord.status === "PAID" ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : "bg-amber-950 text-amber-400 border border-amber-800"),
              children: ord.status
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-right", children: ord.status !== "DELIVERED" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => updateShopOrderStatus(ord.id, "DELIVERED"),
              className: "px-2.5 py-1 rounded bg-blue-900/60 hover:bg-blue-800 text-blue-200 text-xxs font-bold uppercase tracking-wider font-sports transition-colors",
              children: "Mark Delivered"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-500 font-semibold", children: "Complete" }) })
        ] }, ord.id)) })
      ] }) }) }),
      shopSubTab === "donations" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: donations.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 bg-neutral-950 rounded-2xl border border-neutral-800 p-6 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-10 h-10 text-neutral-600 mx-auto fill-neutral-800" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sports font-bold text-lg text-white uppercase", children: "No Donations Logged Yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 max-w-sm mx-auto", children: "When fans make contributions via the homepage Donate button, verified transactions will appear in this ledger." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs whitespace-nowrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-neutral-800 uppercase text-neutral-400 font-sports tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Receipt / Ref" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Donor Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Purpose" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Date" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-neutral-800/60", children: donations.map((don) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-neutral-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 font-mono font-bold text-amber-400", children: don.donationNumber }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 font-semibold text-white", children: don.fullName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 font-mono text-neutral-300", children: don.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-3 font-sports font-black text-emerald-400 text-sm", children: [
            don.amount.toLocaleString(),
            " ETB"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-emerald-300", children: don.purpose }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded text-xxs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800", children: don.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-neutral-400 text-xxs", children: new Date(don.createdAt).toLocaleDateString() })
        ] }, don.id)) })
      ] }) }) })
    ] }),
    adminTab === "news" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-4 border-b border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-2xl text-white uppercase tracking-wider", children: "News Articles & Press Releases" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 mt-1", children: "Publish new stories with multi-language headings and match reports." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setEditingArticleId(null);
              setNewsTitleEn("");
              setNewsTitleAm("");
              setNewsTitleOm("");
              setNewsSummaryEn("");
              setNewsContentEn("");
              setIsNewsModalOpen(true);
            },
            className: "px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Create Article" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: news.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: item.imageUrl,
                  alt: "",
                  className: "w-16 h-12 object-cover rounded-lg shrink-0 border border-neutral-800"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xxs font-bold uppercase text-emerald-400 block font-sports", children: [
                  item.category.replace("_", " "),
                  " • ",
                  item.date
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-white", children: item.title.en }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-500", children: item.title.am })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    setEditingArticleId(item.id);
                    setNewsTitleEn(item.title.en);
                    setNewsTitleAm(item.title.am);
                    setNewsTitleOm(item.title.om);
                    setNewsSummaryEn(item.summary.en);
                    setNewsContentEn(item.content.en);
                    setNewsCategory(item.category);
                    setNewsImageUrl(item.imageUrl);
                    setIsNewsModalOpen(true);
                  },
                  className: "p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300",
                  title: "Edit article",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => deleteNewsArticle(item.id),
                  className: "p-1.5 rounded-lg bg-neutral-800 hover:bg-red-950 text-neutral-400 hover:text-red-400",
                  title: "Delete article",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                }
              )
            ] })
          ]
        },
        item.id
      )) })
    ] }),
    adminTab === "fixtures" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-4 border-b border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-2xl text-white uppercase tracking-wider", children: "Fixtures & Match Results Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 mt-1", children: "Schedule new matches, update live scores, and enter final results." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setEditingMatchId(null);
              setMatchDate((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
              setMatchAwayTeam("");
              setIsMatchModalOpen(true);
            },
            className: "px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Add Fixture" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: matches.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-bold uppercase text-amber-400", children: m.competitionName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-neutral-500", children: [
                  "• ",
                  m.date
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-2 py-0.5 rounded text-xxs font-bold uppercase ".concat(m.status === "FINISHED" ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : m.status === "LIVE" ? "bg-red-950 text-red-400 border border-red-800" : "bg-neutral-800 text-neutral-300"),
                    children: m.status
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-sports font-bold text-lg text-white mt-1", children: [
                m.homeTeam.name,
                " ",
                m.score ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-400 font-mono", children: [
                  m.score.home,
                  " - ",
                  m.score.away
                ] }) : "vs",
                " ",
                m.awayTeam.name
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400", children: m.venue })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 self-end sm:self-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    setEditingMatchId(m.id);
                    setMatchDate(m.date);
                    setMatchTime(m.kickoffTime);
                    setMatchVenue(m.venue);
                    setMatchHomeTeam(m.homeTeam.name);
                    setMatchAwayTeam(m.awayTeam.name);
                    setMatchComp(m.competition);
                    setMatchStatus(m.status);
                    if (m.score) {
                      setHomeScore(m.score.home);
                      setAwayScore(m.score.away);
                    }
                    setIsMatchModalOpen(true);
                  },
                  className: "p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300",
                  title: "Edit match",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => deleteMatch(m.id),
                  className: "p-2 rounded-lg bg-neutral-800 hover:bg-red-950 text-neutral-400 hover:text-red-400",
                  title: "Delete match",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                }
              )
            ] })
          ]
        },
        m.id
      )) })
    ] }),
    adminTab === "standings" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-4 border-b border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-2xl text-white uppercase tracking-wider", children: "League Standings Table Editor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 mt-1", children: "Edit team points, wins, draws, and goals. Tables auto-sort immediately." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: recalculateStandingsFromMatches,
              className: "px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors cursor-pointer",
              title: "Automatically calculate points, goals, and positions from all finished match fixtures",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Auto-Calculate from Fixtures" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: resetStandings,
              className: "px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Reset Standings" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs whitespace-nowrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-neutral-800 uppercase text-neutral-400 font-sports tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Pos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3", children: "Team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-2 text-center", title: "Games Played - use buttons or type directly to change", children: "P (Played)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-2 text-center", children: "W" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-2 text-center", children: "D" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-2 text-center", children: "L" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-2 text-center", children: "GF" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-2 text-center", children: "GA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 text-center", children: "Pts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 text-right", children: "Quick Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-neutral-800/60", children: standings.map((st) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: st.isHalaba ? "bg-red-950/40 font-bold" : "hover:bg-neutral-800/40",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3", children: st.position }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-white font-sports text-sm", children: st.teamName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center justify-center gap-1 bg-neutral-950 px-1.5 py-1 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => updateStanding(st.teamId, { played: Math.max(0, st.played - 1) }),
                    className: "w-5 h-5 flex items-center justify-center rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer",
                    title: "Decrease Games Played",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3 h-3" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0,
                    max: 50,
                    value: st.played,
                    onChange: (e) => {
                      const val = parseInt(e.target.value, 10);
                      updateStanding(st.teamId, { played: isNaN(val) ? 0 : Math.max(0, val) });
                    },
                    className: "w-8 text-center bg-transparent font-mono font-bold text-white text-xs focus:outline-none focus:bg-neutral-900 rounded p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                    title: "Click to type games played directly"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => updateStanding(st.teamId, { played: st.played + 1 }),
                    className: "w-5 h-5 flex items-center justify-center rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer",
                    title: "Increase Games Played",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-center text-emerald-400 font-bold", children: st.won }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-center text-neutral-400", children: st.drawn }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-center text-red-400", children: st.lost }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-center text-neutral-400", children: st.goalsFor }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-center text-neutral-400", children: st.goalsAgainst }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-center font-sports font-black text-white text-base", children: st.points }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 justify-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => updateStanding(st.teamId, {
                      played: st.played + 1,
                      won: st.won + 1,
                      points: st.points + 3,
                      goalsFor: st.goalsFor + 1
                    }),
                    className: "px-2 py-1 rounded bg-emerald-950 hover:bg-emerald-900 text-emerald-400 border border-emerald-800 text-xxs font-bold transition-colors cursor-pointer",
                    title: "Add 1 Win (+3 Pts, +1 GF)",
                    children: "+ Win"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => updateStanding(st.teamId, {
                      played: st.played + 1,
                      drawn: st.drawn + 1,
                      points: st.points + 1
                    }),
                    className: "px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border border-neutral-700 text-xxs font-bold transition-colors cursor-pointer",
                    title: "Add 1 Draw (+1 Pt)",
                    children: "+ Draw"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => updateStanding(st.teamId, {
                      played: st.played + 1,
                      lost: st.lost + 1,
                      goalsAgainst: st.goalsAgainst + 1
                    }),
                    className: "px-2 py-1 rounded bg-red-950/90 hover:bg-red-900 text-red-300 border border-red-800 text-xxs font-bold transition-colors cursor-pointer",
                    title: "Add 1 Loss (0 Pts, +1 GA)",
                    children: "+ Lose"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => openEditStanding(st),
                    className: "p-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 transition-colors cursor-pointer ml-1",
                    title: "Edit all table stats for ".concat(st.teamName),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3.5 h-3.5" })
                  }
                )
              ] }) })
            ]
          },
          st.teamId
        )) })
      ] }) }),
      editingStandingTeam && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-700 rounded-2xl p-6 max-w-lg w-full shadow-2xl space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-neutral-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs uppercase tracking-wider text-red-400 font-sports font-bold", children: "Edit League Standing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-sports font-black text-white", children: editingStandingTeam.teamName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setEditingStandingTeam(null),
              className: "p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveStanding, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xxs font-bold text-neutral-400 uppercase mb-1", children: "Played (P)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: 0,
                  value: standingFormData.played,
                  onChange: (e) => setStandingFormData({ ...standingFormData, played: parseInt(e.target.value, 10) || 0 }),
                  className: "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white font-mono font-bold text-sm focus:border-red-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xxs font-bold text-emerald-400 uppercase mb-1", children: "Won (W)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: 0,
                  value: standingFormData.won,
                  onChange: (e) => setStandingFormData({ ...standingFormData, won: parseInt(e.target.value, 10) || 0 }),
                  className: "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-emerald-400 font-mono font-bold text-sm focus:border-red-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xxs font-bold text-neutral-400 uppercase mb-1", children: "Drawn (D)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: 0,
                  value: standingFormData.drawn,
                  onChange: (e) => setStandingFormData({ ...standingFormData, drawn: parseInt(e.target.value, 10) || 0 }),
                  className: "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white font-mono font-bold text-sm focus:border-red-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xxs font-bold text-red-400 uppercase mb-1", children: "Lost (L)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: 0,
                  value: standingFormData.lost,
                  onChange: (e) => setStandingFormData({ ...standingFormData, lost: parseInt(e.target.value, 10) || 0 }),
                  className: "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-red-400 font-mono font-bold text-sm focus:border-red-500 focus:outline-none"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xxs font-bold text-neutral-400 uppercase mb-1", children: "Goals For (GF)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: 0,
                  value: standingFormData.goalsFor,
                  onChange: (e) => setStandingFormData({ ...standingFormData, goalsFor: parseInt(e.target.value, 10) || 0 }),
                  className: "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white font-mono font-bold text-sm focus:border-red-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xxs font-bold text-neutral-400 uppercase mb-1", children: "Goals Against (GA)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: 0,
                  value: standingFormData.goalsAgainst,
                  onChange: (e) => setStandingFormData({ ...standingFormData, goalsAgainst: parseInt(e.target.value, 10) || 0 }),
                  className: "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white font-mono font-bold text-sm focus:border-red-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xxs font-bold text-amber-400 uppercase mb-1", children: "Points (Pts)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: 0,
                  value: standingFormData.points,
                  onChange: (e) => setStandingFormData({ ...standingFormData, points: parseInt(e.target.value, 10) || 0 }),
                  className: "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-amber-400 font-sports font-black text-base focus:border-red-500 focus:outline-none"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-neutral-800 text-xs text-neutral-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "Goal Diff:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold font-mono text-white", children: [
                standingFormData.goalsFor - standingFormData.goalsAgainst > 0 ? "+" : "",
                standingFormData.goalsFor - standingFormData.goalsAgainst
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setEditingStandingTeam(null),
                  className: "px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-sports font-bold uppercase transition-colors cursor-pointer text-xs",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  className: "px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-sports font-black uppercase transition-colors cursor-pointer text-xs shadow-md",
                  children: "Save Standing"
                }
              )
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    adminTab === "squad" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 border-b border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-2xl text-white uppercase tracking-wider", children: "Squad & Staff Roster" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 mt-1", children: "Add new signings and update player numbers and statistics." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleAddPlayer,
          className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-wrap items-center gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: newPlayerName,
                onChange: (e) => setNewPlayerName(e.target.value),
                placeholder: "Player Name (e.g. Dawit Fekadu)",
                className: "px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white focus:outline-none focus:border-red-500 w-48"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                value: newPlayerNumber,
                onChange: (e) => setNewPlayerNumber(Number(e.target.value)),
                placeholder: "Jersey #",
                className: "px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white focus:outline-none focus:border-red-500 w-20 text-center font-sports text-sm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: newPlayerPos,
                onChange: (e) => setNewPlayerPos(e.target.value),
                className: "px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white focus:outline-none",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Goalkeeper", children: "Goalkeeper" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Defender", children: "Defender" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Midfielder", children: "Midfielder" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Forward", children: "Forward" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                className: "px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase font-sports",
                children: "Add Player"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3", children: players.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-sports font-bold text-lg text-red-500", children: [
                "#",
                p.number,
                " "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-white text-sm", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xxs text-neutral-400 font-sports uppercase", children: p.position })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => deletePlayer(p.id),
                className: "p-1.5 text-neutral-500 hover:text-red-400",
                title: "Remove player",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
              }
            )
          ]
        },
        p.id
      )) })
    ] }),
    adminTab === "sync" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-bold text-xs uppercase tracking-wider text-emerald-400", children: "Federation Live Sync & Simulator" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-2xl text-white uppercase tracking-wider mt-1", children: "Live Matches & Standings Auto-Update Engine" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 mt-1", children: "Control the real-time background refresh loop, simulate matchday scores, and test automatic standings recalculation." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: syncNow,
            disabled: isSyncing,
            className: "px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all disabled:opacity-60",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 text-emerald-400 ".concat(isSyncing ? "animate-spin" : "") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSyncing ? "Syncing..." : "Sync Now" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 font-bold uppercase block", children: "Background Auto-Update" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-sports font-black text-2xl mt-1 block ".concat(isAutoSyncEnabled ? "text-emerald-400" : "text-neutral-500"),
                children: isAutoSyncEnabled ? "ENABLED" : "PAUSED"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: toggleAutoSync,
              className: "mt-3 py-1.5 px-3 rounded-lg text-xs font-bold uppercase font-sports flex items-center justify-center gap-1.5 transition-colors ".concat(isAutoSyncEnabled ? "bg-neutral-800 hover:bg-neutral-700 text-amber-400" : "bg-emerald-700 hover:bg-emerald-600 text-white"),
              children: [
                isAutoSyncEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAutoSyncEnabled ? "Pause Loop" : "Resume Loop" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 font-bold uppercase block", children: "Sync Frequency" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-sports font-black text-2xl text-white mt-1 block", children: [
              "Every ",
              autoSyncInterval,
              "s"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex gap-1.5", children: [15, 30, 60].map((sec) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setAutoSyncInterval(sec),
              className: "flex-1 py-1 rounded text-xxs font-bold uppercase font-mono ".concat(autoSyncInterval === sec ? "bg-red-600 text-white" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"),
              children: [
                sec,
                "s"
              ]
            },
            sec
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 font-bold uppercase block", children: "Next Refresh In" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-black text-3xl text-amber-400 mt-1 block", children: isAutoSyncEnabled ? "".concat(secondsUntilNextSync, "s") : "Paused" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-500", children: "Auto-ticks and refreshes client state" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 font-bold uppercase block", children: "Last Federation Sync" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-sm text-neutral-200 mt-2 block", children: lastSyncTime.toLocaleTimeString() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-emerald-400", children: "Connected to local reactive state" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-red-950/40 via-neutral-950 to-green-950/40 border border-neutral-800 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-sports font-bold text-lg text-white uppercase flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Instant Test Actions (Immediate Effect)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-300", children: "Click either button below to immediately trigger live match action or advance the entire league table to test automatic updates." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: simulateLiveMatchAction,
              className: "px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-sports font-bold text-sm uppercase tracking-wider shadow-lg flex items-center gap-2 active:scale-95 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-amber-200" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Simulate Live Match Action (Goal / Minute Advance)" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: advanceLeagueMatchday,
              className: "px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-sports font-bold text-sm uppercase tracking-wider shadow-lg flex items-center gap-2 active:scale-95 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4 text-amber-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sync Official League Standings (TheSportsDB)" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-sports font-bold text-base text-neutral-300 uppercase tracking-wider", children: [
          "Recent Live Events & Notifications (",
          liveNotifications.length,
          ")"
        ] }),
        liveNotifications.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 py-3 italic", children: 'No new live notifications yet. Click "Simulate Live Match Action" above to trigger a live goal!' }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: liveNotifications.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-neutral-500 font-bold", children: n.timestamp }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400 uppercase font-sports tracking-wide", children: n.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-300 hidden sm:inline", children: n.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 uppercase font-mono", children: n.type })
            ]
          },
          n.id
        )) })
      ] })
    ] }),
    adminTab === "sponsors" && /* @__PURE__ */ jsxRuntimeExports.jsx(SponsorManager, {}),
    adminTab === "settings" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-2xl text-white uppercase tracking-wider", children: "Club Configuration & Production Database Guide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 mt-1", children: "Configuration details, official contacts, and cloud persistence deployment guide." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-sports font-bold text-lg text-white uppercase flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "w-5 h-5 text-emerald-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Production Database Status" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-neutral-300 leading-relaxed", children: "The club portal is currently configured with high-performance persistent local storage for rapid prototype demonstration, allowing club staff to test all features (membership registrations, match schedules, league standings, news publications)." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-neutral-900 text-xs text-neutral-300 space-y-2 border border-neutral-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400 block font-sports text-sm uppercase", children: "To connect a production Cloud Firestore or Cloud SQL database:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-decimal list-inside space-y-1 text-neutral-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Run Firebase or Cloud SQL provisioning through AI Studio's integration manager." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Configure Firestore rules: restrict membership queries to role 'admin', and allow public reads for news, fixtures, and standings." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Deploy live rules with ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-red-400", children: "deploy_firebase" }),
              "."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400", children: "Reset all club data, matches, news, and registrations back to defaults." }),
        isConfirmResetOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-300 font-bold", children: "Confirm Reset?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                resetAllDataToDefault();
                setIsConfirmResetOpen(false);
              },
              className: "px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider font-sports transition-colors",
              children: "Yes, Reset All"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setIsConfirmResetOpen(false),
              className: "px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs transition-colors",
              children: "Cancel"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setIsConfirmResetOpen(true),
            className: "px-4 py-2 rounded-xl bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Reset Everything" })
            ]
          }
        )
      ] })
    ] }),
    isNewsModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-700 w-full max-w-2xl rounded-2xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sports font-bold text-xl text-white uppercase", children: editingArticleId ? "Edit Article" : "Create News Article" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsNewsModalOpen(false),
            className: "text-neutral-400 hover:text-white",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveArticle, className: "space-y-4 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Title (English) *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              required: true,
              value: newsTitleEn,
              onChange: (e) => setNewsTitleEn(e.target.value),
              placeholder: "Headline in English...",
              className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Title (Amharic - አማርኛ)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: newsTitleAm,
                onChange: (e) => setNewsTitleAm(e.target.value),
                placeholder: "ርዕስ በአማርኛ...",
                className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Title (Afaan Oromo)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: newsTitleOm,
                onChange: (e) => setNewsTitleOm(e.target.value),
                placeholder: "Mata duree Afaan Oromootiin...",
                className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Category *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: newsCategory,
                  onChange: (e) => setNewsCategory(e.target.value),
                  className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CLUB_NEWS", children: "Club News" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MATCH_REPORTS", children: "Match Reports" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TRANSFERS", children: "Transfers" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "INTERVIEWS", children: "Interviews" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ACADEMY", children: "Youth Academy" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "COMMUNITY", children: "Community" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Featured Image (Link URL or Device Upload)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        value: newsImageUrl.startsWith("data:") ? "Photo loaded from local device" : newsImageUrl,
                        onChange: (e) => {
                          setNewsImageUrl(e.target.value);
                        },
                        placeholder: "Paste image link URL (https://...)",
                        className: "w-full pl-8 pr-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      htmlFor: "news-image-unified-file-input",
                      className: "px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white rounded-lg border border-neutral-700 text-xs font-sports font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-colors shrink-0",
                      title: "Select image from local device",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-3.5 h-3.5 text-red-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Browse Device" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "news-image-unified-file-input",
                            type: "file",
                            accept: "image/*",
                            onChange: handleImageFileUpload,
                            className: "hidden"
                          }
                        )
                      ]
                    }
                  ),
                  newsImageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setNewsImageUrl(""),
                      className: "p-2 rounded-lg bg-neutral-800 hover:bg-red-950 text-neutral-400 hover:text-red-400 transition-colors shrink-0",
                      title: "Clear image",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    htmlFor: "news-image-unified-file-input",
                    onDragOver: (e) => e.preventDefault(),
                    onDrop: (e) => {
                      var _a;
                      e.preventDefault();
                      const file = (_a = e.dataTransfer.files) == null ? void 0 : _a[0];
                      if (file) {
                        if (file.size > 5 * 1024 * 1024) {
                          setNewsUploadError("File size exceeds 5MB limit. Please select a smaller photo file.");
                          return;
                        }
                        setNewsUploadError(null);
                        const reader = new FileReader();
                        reader.onload = (loadEv) => {
                          var _a2;
                          if ((_a2 = loadEv.target) == null ? void 0 : _a2.result) {
                            setNewsImageUrl(loadEv.target.result);
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    },
                    className: "py-1.5 px-3 rounded-lg border border-dashed border-neutral-800 hover:border-neutral-700 bg-neutral-950/70 hover:bg-neutral-950 text-neutral-400 text-xxs flex items-center justify-between cursor-pointer transition-colors",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Image$1, { className: "w-3.5 h-3.5 text-neutral-500" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Or drag & drop photo here from your device" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 font-bold uppercase font-sports", children: "Choose File" })
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          newsImageUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 p-2.5 bg-neutral-950 rounded-xl border border-neutral-800 flex items-center justify-between gap-3 animate-in fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: newsImageUrl,
                  alt: "Preview",
                  className: "w-14 h-11 object-cover rounded-lg border border-neutral-700 shrink-0",
                  onError: (e) => {
                    e.target.src = "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80";
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xxs font-bold uppercase text-emerald-400 flex items-center gap-1 font-sports", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 text-emerald-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Image Attached" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-400 truncate block max-w-xs sm:max-w-md mt-0.5", children: newsImageUrl.startsWith("data:") ? "Photo uploaded from device (ready to publish)" : newsImageUrl })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setNewsImageUrl(""),
                className: "px-2.5 py-1 rounded bg-neutral-900 hover:bg-red-950 border border-neutral-800 text-neutral-400 hover:text-red-400 text-xxs font-bold uppercase transition-colors shrink-0",
                children: "Remove"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Summary *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              rows: 2,
              required: true,
              value: newsSummaryEn,
              onChange: (e) => setNewsSummaryEn(e.target.value),
              placeholder: "Brief summary sentence...",
              className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Full Article Text *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              rows: 5,
              required: true,
              value: newsContentEn,
              onChange: (e) => setNewsContentEn(e.target.value),
              placeholder: "Write the full report or announcement...",
              className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sans"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setIsNewsModalOpen(false),
              className: "px-4 py-2 rounded-lg bg-neutral-800 text-white",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold uppercase font-sports text-sm",
              children: "Save & Publish"
            }
          )
        ] })
      ] })
    ] }) }),
    isMatchModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-700 w-full max-w-xl rounded-2xl p-6 shadow-2xl space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sports font-bold text-xl text-white uppercase", children: editingMatchId ? "Update Match Details & Score" : "Schedule New Fixture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsMatchModalOpen(false),
            className: "text-neutral-400 hover:text-white",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveMatch, className: "space-y-4 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Home Team *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                value: matchHomeTeam,
                onChange: (e) => setMatchHomeTeam(e.target.value),
                className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sports"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Away Team *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                value: matchAwayTeam,
                onChange: (e) => setMatchAwayTeam(e.target.value),
                placeholder: "Opponent Name",
                className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sports"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Date *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "date",
                required: true,
                value: matchDate,
                onChange: (e) => setMatchDate(e.target.value),
                className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Kickoff Time *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: matchTime,
                onChange: (e) => setMatchTime(e.target.value),
                placeholder: "15:00",
                className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Venue *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              required: true,
              value: matchVenue,
              onChange: (e) => setMatchVenue(e.target.value),
              className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: matchStatus,
                onChange: (e) => setMatchStatus(e.target.value),
                className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "UPCOMING", children: "Upcoming" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "LIVE", children: "Live" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "FINISHED", children: "Finished (FT)" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Home Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                min: "0",
                value: homeScore,
                onChange: (e) => setHomeScore(Number(e.target.value)),
                className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sports text-center"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase mb-1", children: "Away Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                min: "0",
                value: awayScore,
                onChange: (e) => setAwayScore(Number(e.target.value)),
                className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sports text-center"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setIsMatchModalOpen(false),
              className: "px-4 py-2 rounded-lg bg-neutral-800 text-white",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold uppercase font-sports text-sm",
              children: "Save Fixture"
            }
          )
        ] })
      ] })
    ] }) }),
    isShopModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-700 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-4 border-b border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sports font-black text-2xl text-white uppercase tracking-wider", children: editingShopItemId ? "Edit Shop Merchandise" : "Add New Jersey / Product" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400", children: "Product appears instantly in the official store with Chapa checkout." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setIsShopModalOpen(false),
            className: "p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveShopItem, className: "space-y-4 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase tracking-wider mb-1.5", children: "Product / Jersey Name (English) *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              required: true,
              value: shopNameEn,
              onChange: (e) => setShopNameEn(e.target.value),
              placeholder: "e.g. Official 2026/27 Home Match Jersey",
              className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500 font-medium"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase tracking-wider mb-1.5", children: "Product Name (Amharic - አማርኛ)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: shopNameAm,
                onChange: (e) => setShopNameAm(e.target.value),
                placeholder: "ለምሳሌ፡ ይፋዊ የ2026/27 የሜዳ ማሊያ",
                className: "w-full px-3.5 py-2 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase tracking-wider mb-1.5", children: "Product Name (Afaan Oromo)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: shopNameOm,
                onChange: (e) => setShopNameOm(e.target.value),
                placeholder: "fakkeenyaaf: Jeersii Seeraa 2026/27",
                className: "w-full px-3.5 py-2 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase tracking-wider mb-1.5", children: "Price in Ethiopian Birr (ETB) *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  required: true,
                  min: "1",
                  step: "10",
                  value: shopPrice,
                  onChange: (e) => setShopPrice(e.target.value),
                  placeholder: "1800",
                  className: "w-full pl-3.5 pr-14 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-base font-sports font-bold focus:outline-none focus:border-emerald-500"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-emerald-400 font-sports", children: "ETB" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase tracking-wider mb-1.5", children: "Category *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: shopCategory,
                onChange: (e) => setShopCategory(e.target.value),
                className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "JERSEY", children: "Match Jersey (Home / Away / Third)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "KIT", children: "Kits, Training & Jackets" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ACCESSORY", children: "Supporter Accessories & Scarves" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-bold text-neutral-300 uppercase tracking-wider", children: "Available Sizes * (Click to toggle)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xxs text-neutral-400", children: [
              "Selected: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400", children: shopSizes.join(", ") || "None" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 p-2.5 bg-neutral-950 rounded-xl border border-neutral-800", children: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "One Size"].map((size) => {
            const isSelected = shopSizes.includes(size);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => handleToggleShopSize(size),
                className: "px-3 py-1.5 rounded-lg text-xs font-sports font-bold uppercase transition-all ".concat(isSelected ? "bg-red-600 text-white shadow-md shadow-red-900/40 ring-1 ring-red-400" : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"),
                children: size
              },
              size
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase tracking-wider", children: "Product Image (Upload Local File or Image Link) *" }),
            shopImageUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xxs font-bold uppercase font-sports text-emerald-400 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 text-emerald-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: shopImageUrl.startsWith("data:") ? "Local Photo Ready" : "Web Image Linked" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  value: shopImageUrl.startsWith("data:") ? "Photo loaded from local device (ready to save)" : shopImageUrl,
                  onChange: (e) => {
                    setShopImageUrl(e.target.value);
                    setShopUploadError(null);
                  },
                  placeholder: "Paste image link URL (https://...) or choose local file",
                  className: "w-full pl-9 pr-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                htmlFor: "shop-image-file-input",
                className: "px-3.5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 hover:text-white rounded-xl border border-neutral-700 text-xs font-sports font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-all hover:scale-[1.02] shrink-0 active:scale-95 shadow-md",
                title: "Select image from local device",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4 text-red-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Upload Local File" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "shop-image-file-input",
                      type: "file",
                      accept: "image/*",
                      onChange: handleShopImageFileUpload,
                      className: "hidden"
                    }
                  )
                ]
              }
            ),
            shopImageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setShopImageUrl("");
                  setShopUploadError(null);
                },
                className: "p-2.5 rounded-xl bg-neutral-800 hover:bg-red-950 text-neutral-400 hover:text-red-400 transition-colors shrink-0 border border-neutral-700",
                title: "Clear product image",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              htmlFor: "shop-image-file-input",
              onDragOver: (e) => e.preventDefault(),
              onDrop: handleShopImageDrop,
              className: "py-2.5 px-4 rounded-xl border border-dashed border-neutral-800 hover:border-red-600/60 bg-neutral-950/70 hover:bg-neutral-950 text-neutral-400 text-xs flex items-center justify-between cursor-pointer transition-all group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Image$1, { className: "w-4 h-4 text-neutral-500 group-hover:text-red-400 transition-colors" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs sm:text-xs", children: isShopUploading ? "Optimizing and loading local photo..." : "Drag & drop local jersey or merchandise photo here" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-lg bg-neutral-900 group-hover:bg-red-600 text-neutral-300 group-hover:text-white font-sports font-bold uppercase text-xxs transition-colors", children: isShopUploading ? "Processing..." : "Browse Computer" })
              ]
            }
          ),
          shopUploadError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-red-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: shopUploadError })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-400 block mb-1 font-semibold uppercase", children: "Or Quick Select Official Club Kits:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setShopImageUrl(ClubImages.homeJersey);
                    setShopUploadError(null);
                  },
                  className: "px-2.5 py-1 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-red-400 text-xxs font-bold uppercase",
                  children: "Official Home Kit"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setShopImageUrl(ClubImages.awayJersey);
                    setShopUploadError(null);
                  },
                  className: "px-2.5 py-1 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-emerald-400 text-xxs font-bold uppercase",
                  children: "Official Away Kit"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setShopImageUrl("https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=800&q=80");
                    setShopUploadError(null);
                  },
                  className: "px-2.5 py-1 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-amber-400 text-xxs font-bold uppercase",
                  children: "Onyx Third Kit"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setShopImageUrl("https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80");
                    setShopUploadError(null);
                  },
                  className: "px-2.5 py-1 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 text-xxs font-bold uppercase",
                  children: "Supporter Scarf"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setShopImageUrl("https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80");
                    setShopUploadError(null);
                  },
                  className: "px-2.5 py-1 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-blue-400 text-xxs font-bold uppercase",
                  children: "Anthem Jacket"
                }
              )
            ] })
          ] }),
          shopImageUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 p-3 bg-neutral-950 rounded-2xl border border-neutral-800 flex items-center justify-between gap-3 animate-in fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: shopImageUrl,
                  alt: "Product preview",
                  className: "w-14 h-14 object-cover rounded-xl border border-neutral-700 shrink-0 bg-neutral-900",
                  onError: (e) => {
                    e.target.src = "https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=800&q=80";
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xxs font-bold uppercase text-emerald-400 flex items-center gap-1 font-sports", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: shopImageUrl.startsWith("data:") ? "Local Photo Loaded & Ready" : "Image Loaded for Storefront" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-400 truncate block max-w-xs sm:max-w-md mt-0.5 font-mono", children: shopImageUrl.startsWith("data:") ? "Uploaded from device (processed for store)" : shopImageUrl })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setShopImageUrl("");
                  setShopUploadError(null);
                },
                className: "px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-red-950 border border-neutral-800 text-neutral-400 hover:text-red-400 text-xxs font-bold uppercase transition-colors shrink-0",
                children: "Remove"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase tracking-wider mb-1.5", children: "Description (English) *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              rows: 2,
              required: true,
              value: shopDescEn,
              onChange: (e) => setShopDescEn(e.target.value),
              placeholder: "Official breathable match jersey with embroidered crest...",
              className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 font-sans"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-neutral-300 uppercase tracking-wider mb-1.5", children: "Description (Amharic - አማርኛ)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              rows: 2,
              value: shopDescAm,
              onChange: (e) => setShopDescAm(e.target.value),
              placeholder: "የማሊያው መግለጫ በአማርኛ...",
              className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 font-sans"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:border-neutral-700 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: shopInStock,
                onChange: (e) => setShopInStock(e.target.checked),
                className: "w-4 h-4 text-emerald-600 rounded bg-neutral-900 border-neutral-700 focus:ring-emerald-500"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-bold text-white uppercase block text-xs", children: "Available In Stock" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-400", children: "Customers can click Buy Now" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:border-neutral-700 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: shopFeatured,
                onChange: (e) => setShopFeatured(e.target.checked),
                className: "w-4 h-4 text-red-600 rounded bg-neutral-900 border-neutral-700 focus:ring-red-500"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-bold text-white uppercase block text-xs", children: "Feature on Homepage" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-400", children: "Show in top 3 store showcase" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-neutral-800 flex items-center justify-end gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setIsShopModalOpen(false),
              className: "px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold uppercase tracking-wider font-sports transition-colors",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: isSavingShopToFirestore,
              className: "px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-emerald-600 hover:from-red-500 hover:to-emerald-500 text-white font-sports font-black text-sm uppercase tracking-wider shadow-lg shadow-red-950/50 flex items-center gap-2 transition-all hover:scale-[1.01] disabled:opacity-50",
              children: isSavingShopToFirestore ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Saving to Firestore..." })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: editingShopItemId ? "Save Changes" : "Publish Product" })
              ] })
            }
          )
        ] })
      ] })
    ] }) })
  ] });
};
export {
  AdminPage
};

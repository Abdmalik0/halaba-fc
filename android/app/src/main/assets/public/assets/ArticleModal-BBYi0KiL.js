import { r as reactExports, j as jsxRuntimeExports, al as Tag, m as Share2, X, C as Calendar, ak as User, g as Clock } from "./vendor-react-BqvxpxOH.js";
import { u as useClub, e as getLocalizedCategory } from "./index-DaWmYZcG.js";
import "./vendor-capacitor-CxZwZfQO.js";
import "./vendor-firebase-BFy01gyE.js";
const ArticleModal = ({ article, onClose }) => {
  const { language, t } = useClub();
  if (!article) return null;
  const [copied, setCopied] = reactExports.useState(false);
  const title = article.title[language] || article.title.en;
  const content = article.content[language] || article.content.en;
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: title,
        url: window.location.href
      }).catch(() => {
      });
    } else {
      navigator.clipboard.writeText(window.location.href).catch(() => {
      });
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-neutral-900 border border-neutral-700 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]",
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-3.5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-emerald-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-emerald-400", children: getLocalizedCategory(article.category, language) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleShare,
                className: "p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors flex items-center gap-1 text-xs",
                title: "Share article",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" }),
                  copied && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 text-xs", children: t.copied })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                className: "p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors",
                "aria-label": "Close",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 overflow-y-auto space-y-6", children: [
          article.imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl overflow-hidden aspect-video max-h-72 w-full border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: article.imageUrl,
                alt: title,
                onError: (e) => {
                  e.currentTarget.src = "/assets/images/halaba_match_action_1792217992379.webp";
                },
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-4 text-xs text-neutral-400 border-b border-neutral-800 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-neutral-500" }),
                article.date
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5 text-neutral-500" }),
                t.author,
                ": ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-neutral-300", children: language === "am" ? "የክለቡ አስተዳደር" : article.author })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-neutral-500" }),
                article.readTime
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-neutral-200 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-normal", children: content })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-500", children: t.mediaCommsFooter }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-semibold transition-colors",
              children: t.backToNews
            }
          )
        ] })
      ]
    }
  ) });
};
export {
  ArticleModal
};

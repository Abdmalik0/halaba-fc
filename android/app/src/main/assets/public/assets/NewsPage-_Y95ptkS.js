import { r as reactExports, j as jsxRuntimeExports, N as Newspaper, B as Search, s as ChevronRight } from "./vendor-react-BqvxpxOH.js";
import { u as useClub, C as ClubImages, e as getLocalizedCategory } from "./index-DaWmYZcG.js";
import "./vendor-capacitor-CxZwZfQO.js";
import "./vendor-firebase-BFy01gyE.js";
const NewsPage = ({ onOpenArticleModal }) => {
  const { t, language, news } = useClub();
  const [selectedCategory, setSelectedCategory] = reactExports.useState("ALL");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const categories = [
    { id: "ALL", label: t.catAll },
    { id: "CLUB_NEWS", label: t.catClubNews },
    { id: "MATCH_REPORTS", label: t.catMatchReports },
    { id: "TRANSFERS", label: t.catTransfers },
    { id: "INTERVIEWS", label: t.catInterviews },
    { id: "ACADEMY", label: t.catAcademy },
    { id: "COMMUNITY", label: t.catCommunity }
  ];
  const filteredNews = news.filter((art) => {
    if (selectedCategory !== "ALL" && art.category !== selectedCategory) return false;
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const title = (art.title[language] || art.title.en).toLowerCase();
      const summary = (art.summary[language] || art.summary.en).toLowerCase();
      return title.includes(q) || summary.includes(q);
    }
    return true;
  });
  const featuredArticle = news.find((n) => n.isFeatured) || news[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.mediaCenterTag })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-sports font-black text-3xl sm:text-5xl text-white uppercase tracking-wider", children: t.newsTitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-400 text-sm mt-1 max-w-xl", children: t.newsSubtitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-72", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              placeholder: t.searchNewsPlaceholder,
              className: "w-full pl-10 pr-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-200 placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-6 border-t border-neutral-800 flex flex-wrap gap-2", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setSelectedCategory(cat.id),
          className: "px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider font-sports transition-all ".concat(selectedCategory === cat.id ? "bg-red-600 text-white shadow-md" : "bg-neutral-950 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"),
          children: cat.label
        },
        cat.id
      )) })
    ] }),
    selectedCategory === "ALL" && searchQuery.trim() === "" && featuredArticle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        onClick: () => onOpenArticleModal(featuredArticle.id),
        className: "group cursor-pointer relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-red-600/60 shadow-2xl transition-all duration-300",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 relative aspect-video lg:aspect-auto min-h-[300px] sm:min-h-[380px] overflow-hidden bg-neutral-950", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: featuredArticle.imageUrl || ClubImages.matchAction,
                alt: "Featured Story",
                loading: "eager",
                onError: (e) => {
                  e.currentTarget.src = ClubImages.matchAction;
                },
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent lg:hidden" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-red-600 text-white font-sports", children: [
                t.featuredStory,
                " • ",
                getLocalizedCategory(featuredArticle.category, language)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-neutral-400 block font-medium", children: [
                featuredArticle.date,
                " • ",
                featuredArticle.readTime
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold text-white group-hover:text-red-400 transition-colors leading-tight", children: featuredArticle.title[language] || featuredArticle.title.en }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 text-sm sm:text-base leading-relaxed line-clamp-3", children: featuredArticle.summary[language] || featuredArticle.summary.en })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-neutral-800/80 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-neutral-500 font-medium", children: [
                t.author,
                " ",
                featuredArticle.author
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold uppercase font-sports tracking-wider text-red-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.readArticle }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-bold text-xl uppercase tracking-wider text-neutral-300 mb-6", children: selectedCategory === "ALL" ? t.allStories : getLocalizedCategory(selectedCategory, language) }),
      filteredNews.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-16 bg-neutral-900/40 rounded-2xl border border-neutral-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-400 text-base", children: t.noArticlesFound }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredNews.map((article) => {
        const title = article.title[language] || article.title.en;
        const summary = article.summary[language] || article.summary.en;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => onOpenArticleModal(article.id),
            className: "group cursor-pointer rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-600/50 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video overflow-hidden bg-neutral-950", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: article.imageUrl || ClubImages.matchAction,
                      alt: title,
                      loading: "lazy",
                      onError: (e) => {
                        e.currentTarget.src = ClubImages.matchAction;
                      },
                      className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold uppercase bg-black/75 text-emerald-400 backdrop-blur-md", children: getLocalizedCategory(article.category, language) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-neutral-500 font-medium block", children: [
                    article.date,
                    " • ",
                    article.readTime
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-white group-hover:text-red-400 transition-colors line-clamp-2", children: title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed", children: summary })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 pt-0 flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-800/80 mt-4 pt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: article.author }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-red-400 flex items-center gap-1 uppercase tracking-wider font-sports group-hover:translate-x-1 transition-transform", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.readArticle }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                ] })
              ] })
            ]
          },
          article.id
        );
      }) })
    ] })
  ] });
};
export {
  NewsPage
};

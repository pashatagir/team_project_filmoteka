var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequire1bec;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,o){n[e]=o},e.parcelRequire1bec=t);var r=t("krGWQ");var s=t("9XIKo"),i=t("1awFj"),a=(r=t("krGWQ"),t("coT6k")),l=t("f4Y7b"),d=t("7NS3K"),c=t("2nhTy");var u=t("hR8LQ"),f=t("bTcpz");f=t("bTcpz");t("c1QDM"),t("3yZwQ");var p=t("28AT6"),w=t("bMZn5"),m=t("1wH5c");m=t("1wH5c"),w=t("bMZn5");t("3dqd8"),function(){const e=new(0,f.Modal)(".navigation__open--btn",".modal__log-in--close-btn",".overlay__log-in",".modal__log-in");e.openBtn.addEventListener("click",e.openModal.bind(e))}(),(0,p.homeHeaderLinkBntLogic)(),(0,m.onFirstLoadTheme)(),(0,m.getChengeThemeByClick)(),(0,w.authHandler)(),(0,s.sliderRevenueFilms)(),async function(){const e=await l.default.getPopularFilms();try{(0,d.renderFilmCard)(e),c.pagination.reset(e.total_results)}catch(e){console.log(e)}}(),""===l.default.query||r.refs.searchForm.getNewFilms("submit",a.onSearchFormSubmit),function(){const e=new(0,f.Modal)(".films",".film-modal__close-btn",".film-modal__overlay",".film-modal");e.openBtn.addEventListener("click",e.openFilmCardModal.bind(e))}(),(0,i.scrolToTop)(),r.refs.buttonShowPassword.addEventListener("click",(function(){"password"===r.refs.inputPassword.getAttribute("type")?(r.refs.inputPassword.removeAttribute("type"),r.refs.inputPassword.setAttribute("type","text"),r.refs.iconForShowPassword.classList.add("visually-hidden"),r.refs.iconForUnShowPassword.classList.remove("visually-hidden")):(r.refs.inputPassword.removeAttribute("type"),r.refs.inputPassword.setAttribute("type","password"),r.refs.iconForShowPassword.classList.remove("visually-hidden"),r.refs.iconForUnShowPassword.classList.add("visually-hidden"))})),(0,u.onTeamModal)();
//# sourceMappingURL=index.2b391082.js.map
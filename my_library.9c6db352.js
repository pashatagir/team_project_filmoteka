var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=e.parcelRequire1bec;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var i=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,i.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,o){t[e]=o},e.parcelRequire1bec=i);var r=i("9XIKo"),s=i("1awFj"),n=i("hR8LQ"),l=i("28AT6"),a=i("iQIUW"),c=i("krGWQ"),d=i("31u3U");i("f4Y7b");var f=i("7NS3K");const u=new(0,d.MyLibrary);function m(){try{u.getFromQueue()||(c.refs.emptyTitle.classList.remove("is-hidden"),c.refs.emptyImg.classList.remove("is-hidden"),a.Notify.info("Your film list is empty"))}catch(e){console.log(e.message)}}function g(){try{u.getFromWatched();queueMovie?async function(){const e=await getFilmFromLocalStorage(y);console.log(e),console.log(y);try{(0,f.renderFilmCard)(e),pagination.reset(e.total_results)}catch(e){console.log(e)}}():(c.refs.emptyTitle.classList.remove("is-hidden"),c.refs.emptyImg.classList.remove("is-hidden"),Notiflix.Notify.info("Your film list is empty"))}catch(e){console.log(e.message)}}let y=u.getFromWatched();var p=i("iytAl");i("c1QDM"),i("3yZwQ");var v=i("1wH5c");(0,l.libraryHeaderLinkBntLogic)(),localStorage.auth="yes",(0,v.onFirstLoadThemeLibrary)(),setInterval(p.giveLocalStorageToFirebaseStorage,1e4),(0,r.sliderRevenueFilms)(),c.refs.btnWatched.addEventListener("click",m),c.refs.btnQueue.addEventListener("click",g),(0,s.scrolToTop)(),(0,n.onTeamModal)();
//# sourceMappingURL=my_library.9c6db352.js.map

function e(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const t=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");let d=null;r.disabled="true",t.addEventListener("click",(function(){document.body.style.backgroundColor=e(),d=setInterval((()=>{document.body.style.backgroundColor=e()}),1e3),r.removeAttribute("disabled"),t.disabled="true"})),r.addEventListener("click",(function(){clearInterval(d),t.removeAttribute("disabled"),r.disabled="true"}));
//# sourceMappingURL=01-color-switcher.63a6d8fd.js.map
!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=null;n.disabled="true",e.addEventListener("click",(function(){document.body.style.backgroundColor=t(),o=setInterval((function(){document.body.style.backgroundColor=t()}),1e3),n.removeAttribute("disabled"),e.disabled="true"})),n.addEventListener("click",(function(){clearInterval(o),e.removeAttribute("disabled"),n.disabled="true"}))}();
//# sourceMappingURL=01-color-switcher.72f0afdc.js.map

(()=>{"use strict";function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,l=function(){};return{s:l,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){i=!0,c=e},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw c}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r=document.querySelector(".modal-callback"),o=document.querySelector(".modal-overlay"),l=document.querySelector(".modal-close"),c=document.querySelectorAll(".callback-btn"),a=document.querySelector(".button-services");c.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),v()}))}));var i,u,s,f,d,y=function(){r.style.display="none",o.style.display="none"},v=function(){r.style.display="block",o.style.display="block"};a.addEventListener("click",v),l.addEventListener("click",y),o.addEventListener("click",y),function(){var e,t=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,l=function(){};return{s:l,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){i=!0,c=e},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw c}}}}(document.querySelectorAll('a[href^="#"]'));try{var r=function(){var t=e.value;t.addEventListener("click",(function(e){e.preventDefault();var n=t.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(t.s();!(e=t.n()).done;)r()}catch(e){t.e(e)}finally{t.f()}}(),function(){var e=document.querySelector(".up");e.style.display="none",window.onscroll=function(){t()};var t=function(){document.body.scrollTop>60||document.documentElement.scrollTop>60?e.style.display="block":e.style.display="none"};e.addEventListener("click",(function(e){e.preventDefault(),document.body.scrollTop=0,document.documentElement.scrollTop=0}))}(),(d=document.querySelectorAll(".title")).forEach((function(e){e.addEventListener("click",(function(){this.parentElement.classList.contains("active")||(d.forEach((function(e){e.parentElement.classList.remove("active"),e.nextElementSibling.style.display="none"})),this.parentElement.classList.add("active"),this.nextElementSibling.style.display="block")}))})),function(){var t=document.getElementsByTagName("form"),n=document.createElement("div");n.textContent="",n.style.cssText="font-size:2rem; color:black";var r,o=e(t);try{var l=function(){var t=r.value;t.addEventListener("submit",(function(r){r.preventDefault(),t.appendChild(n),n.textContent=" Загрузка...";var o,l={},c=e(new FormData(t).entries());try{for(c.s();!(o=c.n()).done;){var a=o.value;l[a]=a[1]}}catch(e){c.e(e)}finally{c.f()}(function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(l).then((function(e){if(200!==e.status)throw new Error("status network is not 200");n.textContent=" Спасибо!Вам скоро перезвонят!"})).catch((function(e){n.textContent="Произошла ошибка...",console.log(e)}))}))};for(o.s();!(r=o.n()).done;)l()}catch(e){o.e(e)}finally{o.f()}}(),f=document.querySelectorAll(".tel"),document.querySelectorAll(".name").forEach((function(e){e.addEventListener("input",(function(t){t.preventDefault(),e.value=e.value.replace(/[a-z]/gi,"")}))})),f.forEach((function(e){e.addEventListener("input",(function(t){t.preventDefault(),e.value=e.value.replace(/[^0-9\-+]/g,"")}))})),i=document.querySelectorAll(".item"),document.querySelector(".top-slider"),document.querySelectorAll(".big"),u=0,s=function(){i[u].style.display="none",++u>=i.length&&(u=0),i[u].style.display="block"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(s,e)}(3e3)})();
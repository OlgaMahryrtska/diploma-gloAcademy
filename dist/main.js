(()=>{"use strict";const e=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),t=document.querySelector(".modal-callback"),l=document.querySelector(".modal-overlay"),n=document.querySelector(".modal-close"),o=document.querySelectorAll(".callback-btn"),c=document.querySelector(".button-services");o.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),s()}))}));const r=()=>{t.style.display="none",l.style.display="none"},s=()=>{t.style.display="block",l.style.display="block"};c.addEventListener("click",s),n.addEventListener("click",r),l.addEventListener("click",r),(()=>{const e=document.querySelectorAll('a[href^="#"]');for(let t of e)t.addEventListener("click",(e=>{e.preventDefault();const l=t.getAttribute("href");document.querySelector(l).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".up");e.style.display="none",window.onscroll=function(){t()};const t=()=>{document.body.scrollTop>60||document.documentElement.scrollTop>60?e.style.display="block":e.style.display="none"};e.addEventListener("click",(e=>{e.preventDefault(),document.body.scrollTop=0,document.documentElement.scrollTop=0}))})(),(()=>{const e=document.querySelectorAll(".title");e.forEach((t=>{t.addEventListener("click",(function(){this.parentElement.classList.contains("active")||(e.forEach((e=>{e.parentElement.classList.remove("active"),e.nextElementSibling.style.display="none"})),this.parentElement.classList.add("active"),this.nextElementSibling.style.display="block")}))}))})(),(()=>{const t=document.getElementsByTagName("form"),l=document.createElement("div");l.textContent="",l.style.cssText="font-size:2rem; color:black";for(let n of t)n.addEventListener("submit",(t=>{t.preventDefault(),n.appendChild(l),l.textContent=" Загрузка...";const o=new FormData(n);let c={};for(let e of o.entries())c[e]=e[1];e(c).then((e=>{if(200!==e.status)throw new Error("status network is not 200");l.textContent=" Спасибо!Вам скоро перезвонят!"})).catch((e=>{l.textContent="Произошла ошибка...",console.log(e)}))}))})(),(()=>{const e=document.querySelectorAll(".tel");document.querySelectorAll(".name").forEach((e=>{e.addEventListener("input",(t=>{t.preventDefault(),e.value=e.value.replace(/[a-z]/gi,"")}))})),e.forEach((e=>{e.addEventListener("input",(t=>{t.preventDefault(),e.value=e.value.replace(/[^0-9\-+]/g,"")}))}))})(),(()=>{const e=document.querySelectorAll(".item");document.querySelector(".top-slider"),document.querySelectorAll(".big");let t,l=0;const n=()=>{e[l].style.display="none",l++,l>=e.length&&(l=0),e[l].style.display="block"};((e=3e3)=>{t=setInterval(n,e)})(3e3)})()})();
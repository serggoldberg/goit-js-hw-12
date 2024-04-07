import{a as b,S,i as u}from"./assets/vendor-06b1bbdf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();async function f(t,r){const a="https://pixabay.com/api/",s={key:"43274302-b3b24986af50d43a0f99334ad",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r},e=`${a}?${s}`;return(await b.get(e,{params:s})).data}const E=document.querySelector(".gallery");function w(t){const{largeImageURL:r,webformatURL:a,tags:s,likes:e,views:i,comments:n,downloads:L}=t;return`<li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img
      lodind="lazy" 
      class="gallery-image" 
      src="${a}" 
      alt="${s}" 
      />
  </a>
  <div class="descrip-gallery">
    <ul class="descrip-img">
      <li class="descrip-item">Likes</li>
      <li class="descrip-item">${e}</li>
    </ul>
    <ul class="descrip-img">
      <li class="descrip-item">Views</li>
      <li class="descrip-item">${i}</li>
    </ul>
    <ul class="descrip-img">
      <li class="descrip-item">Comments</li>
      <li class="descrip-item">${n}</li>
    </ul>
    <ul class="descrip-img">
      <li class="descrip-item">Downloads</li>
      <li class="descrip-item">${L}</li>
    </ul>
  </div>
</li>`}const q=new S(".gallery a",{captionsData:"tags",captionsDelay:250});function v(t){return t.map(w).join("")}function g(t){const r=v(t);E.insertAdjacentHTML("beforeend",r),q.refresh(),console.log(r)}const o={formEl:document.querySelector(".form-search"),inputEl:document.querySelector(".input-text"),gallery:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),loaderendEl:document.querySelector(".loaderend"),btnLoadMore:document.querySelector(".load-btn-submit")};let c,l=1,d=0;const M=15;o.formEl.addEventListener("submit",$);o.btnLoadMore.addEventListener("click",P);async function $(t){if(t.preventDefault(),c=t.target.elements.input.value.trim(),o.gallery.innerHTML="",l=1,!c){u.error({title:"Error",message:"❌ Please enter a search query!",position:"topRight"});return}try{p();const r=await f(c,l);if(d=Math.ceil(r.totalHits/M),r.hits.length===0){u.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(r.hits)}catch{console.log(err)}h(),y(),t.target.reset()}async function P(){l+=1,p();try{const t=await f(c,l);g(t.hits)}catch{console.log(err)}z(),y(),h()}function x(){o.btnLoadMore.classList.remove("hidden")}function O(){o.btnLoadMore.classList.add("hidden")}function p(){o.loaderEl.classList.remove("hidden")}function h(){o.loaderEl.classList.add("hidden")}function y(){l>=d?(m(),O()):(m(),x())}function R(){o.loaderendEl.classList.remove("hidden")}function T(){o.loaderendEl.classList.add("hidden")}function m(){l>=d?R():T()}function z(){const t=o.gallery.firstChild.getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map

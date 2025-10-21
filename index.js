import{a as u,S as d,i}from"./assets/vendor-D8hBcPQM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",f="52812196-5a943dca1ddd7edd2406579c3";function m(r){return u.get(p,{params:{key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){const o=document.querySelector(".gallery"),n=r.map(s=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s.largeImageURL}">
          <img src="${s.webformatURL}" alt="${s.tags}" />
          <div class="info">
            <p><span class="info-title">Likes:</span> ${s.likes}</p>
            <p><span class="info-title">Views:</span> ${s.views}</p>
            <p><span class="info-title">Comments:</span> ${s.comments}</p>
            <p><span class="info-title">Downloads:</span> ${s.downloads}</p>
          </div>
        </a>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",n),y.refresh()}function h(){const r=document.querySelector(".gallery");r.innerHTML=""}function L(){document.querySelector(".loader").classList.add("visible")}function l(){document.querySelector(".loader").classList.remove("visible")}const c=document.querySelector(".form"),S=c.querySelector('input[name="search-text"]');c.addEventListener("submit",r=>{r.preventDefault();const o=S.value.trim();if(o===""){i.error({title:"Error",message:"Please enter a search term!",position:"topRight"});return}h(),L(),m(o).then(n=>{if(l(),n.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(n.hits)}).catch(n=>{l(),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(n)})});
//# sourceMappingURL=index.js.map

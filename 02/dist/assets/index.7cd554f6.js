(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();class n extends HTMLElement{constructor(){super(),this.profileFollowerEndpoint="./data/followers.json",this.profileArtworksEndpoint="./data/artworks.json"}connectedCallback(){const e=document.createElement("template");e.innerHTML=`
      <overlay-blur-bg
        url="https://i.pinimg.com/236x/41/fe/83/41fe838cc6782162633f1ea271678b57.jpg">
      </overlay-blur-bg>

      <div class="stack-2 padding-8 flex (xs)flex-wrap (sm)flex-no-wrap (md)flex-no-wrap flex-center">

        <div class="(group) relative margin-l-4 margin-r-8 flex-shrink-0 filter saturate-6 brightness-3">

          <profile-avatar
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZpTPYPUv5GldBF-k0KvNcw4bthklHE6AsnVQrQDP&s">
          </profile-avatar>

          <profile-cover
            url="https://image.api.playstation.com/vulcan/ap/rnd/202106/2214/8qVSk5xrtDJ2eJ2sd67KcpPW.jpg"
            followerbg="start-transparent stop-shade-amber-1">
          </profile-cover>

          <profile-followers
            endpoint="${this.profileFollowerEndpoint}">
          </profile-followers>

        </div>

        <profile-artworks
          endpoint="${this.profileArtworksEndpoint}">
        </profile-artworks>

      </div>
    `,this.appendChild(e.content.cloneNode(!0))}}customElements.define("main-app",n);class a extends HTMLElement{constructor(){super(),this.visibility="hidden",this.url="#",this.title="Image"}static get observedAtrributes(){return["url","title","visibility"]}attributeChangedCallback(e,t,r){t!==r&&(this[e]=r)}connectedCallback(){const e=document.createElement("template");e.innerHTML=`
      <div class="${this.visibility} stack-5 absolute -top-10 -bottom-10 -left-10 -right-10 filter blur-10">

        <img
          class="height-screen width-full object-fit object-center"
          src="${this.url}"
          alt="${this.title}"
        />

      </div>
    `,this.appendChild(e.content.cloneNode(!0))}}customElements.define("overlay-blur-bg",a);class c extends HTMLElement{constructor(){super(),this.url="https://thumbs.dreamstime.com/b/hexagon-gaming-logo-colorful-vector-design-hexagon-game-gaming-logo-design-168547122.jpg",this.name="John Doe"}static get observedAttributes(){return["url","name"]}attributeChangedCallback(e,t,r){t!==r&&(this[e]=r)}connectedCallback(){const e=document.createElement("template");e.innerHTML=`
      <div class="stack-3 absolute top-0 left-0 width-full">
        <img
          class="-margin-t-6 -margin-l-6 (group-hover)-margin-t-10 (group-hover-margin-l-4 height-16 width-16 object-cover object-enter shadow curve-border-full"
          src="${this.url}"
          alt="${this.name}"
        />
      </div>
    `,this.appendChild(e.content.cloneNode(!0))}}customElements.define("profile-avatar",c);class d extends HTMLElement{constructor(){super(),this.url="#",this.title="",this.followerbg="start-transparent stop-shade-charcoal-5"}static get observedAttributes(){return["url","title","followerbg"]}attributeChangedCallback(e,t,r){t!==r&&(this[e]=r)}connectedCallback(){const e=document.createElement("template");e.innerHTML=`
      <div class="stack-2 relative curve-border-lg transform (group-hover)scale-125 transition duration-500 linear">

        <div class="stack-2 invisible (group-hover)visible absolute width-56 height-104 bg-gradient ${this.followerbg} start-30 stop-80 angle-90 curve-border-lg"></div>

        <img
          class="stack-1 width-56 height-104 object-cover object-center shadow (group-hover)shadow-dreamy curve-border-lg cursor-pointer overflow-hidden transition duration-200 linear"
          src="${this.url}"
          alt="${this.title}"
        />

      </div>
    `,this.appendChild(e.content.cloneNode(!0))}}customElements.define("profile-cover",d);class u extends HTMLElement{constructor(){super(),this.followers=[],this.endpoint="./data/followers.json"}static get observedAttributes(){return["enpoint"]}attributeChangedCallback(e,t,r){t!==r&&(this[e]=r)}connectedCallback(){const e=document.createElement("template");e.innerHTML=`
      <div class="stack-3 absolute -top-8 -right-2 flex-column flex-gap-2 flex-wrap justify-start items-start invisible (group-hover)visible transition duration-800 ease-in-out">

        <data-followers></data-followers>

      </div>
    `,this.appendChild(e.content.cloneNode("true")),this.getData()}getData(){const e=this.endpoint;fetch(e).then(t=>{t.json().then(r=>{delete this.error,this.followers=r,console.log(r),this.update()})}).catch(t=>{this.error=t,console.log(t),this.update()})}update(){this.followers.forEach(e=>{let t=document.createElement("div");t.innerHTML=`
        <img
          class="inline-block height-8 width-8 object-cover object-center shadow curve-border-full"
          src="${e.url}"
          alt="${e.name}"
        />
      `,this.querySelector("data-followers").appendChild(t)})}}customElements.define("profile-followers",u);class h extends HTMLElement{constructor(){super(),this.artworks=[],this.endpoint="./data/artworks.json"}static get observedAttributes(){return["enpoint"]}attributeChangedCallback(e,t,r){t!==r&&(this[e]=r)}connectedCallback(){const e=document.createElement("template");e.innerHTML=`
      <data-artworks
        class="margin-t-2 height-112 flex flex-wrap justify-start items-center filter saturate-6 brightness-3">
      </data-artworks>
    `,this.appendChild(e.content.cloneNode("true")),this.getData()}getData(){const e=this.endpoint;fetch(e).then(t=>{t.json().then(r=>{delete this.error,this.artworks=r,console.log(r),this.update()})}).catch(t=>{this.error=t,console.log(t),this.update()})}update(){this.artworks.forEach(e=>{let t=document.createElement("div");t.innerHTML=`
        <img
          class="(hover)stack-5 -margin-t-4 margin-b-8 margin-r-4 height-56 width-16 object-cover object-center bg-tint-onyx-1 shadow curve-border-lg transform -skew-y-24 (hover)scale-125 transition duration-200 linear transform skew-y-24 overflow-hidden cursor-pointer"
          src="${e.url}"
          alt="${e.title}"
        />
      `,this.querySelector("data-artworks").appendChild(t)})}}customElements.define("profile-artworks",h);

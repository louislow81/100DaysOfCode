class MainApp extends HTMLElement {
  constructor() {
    super();

    this.profileFollowerEndpoint = "./data/followers.json";
    this.profileArtworksEndpoint = "./data/artworks.json";
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
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
    `;
    this.appendChild(template.content.cloneNode("true"));
  }
}
customElements.define("main-app", MainApp);

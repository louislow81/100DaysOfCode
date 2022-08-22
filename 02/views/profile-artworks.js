class ProfileArtworks extends HTMLElement {
  constructor() {
    super();

    this.artworks = [];
    this.endpoint = "./data/artworks.json";
  }

  static get observedAttributes() {
    return ["enpoint"];
  }

  attributeChangedCallback(props, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[props] = newValue;
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <data-artworks
        class="margin-t-2 height-112 flex flex-wrap justify-start items-center filter saturate-6 brightness-3">
      </data-artworks>
    `;
    this.appendChild(template.content.cloneNode("true"));
    this.getData();
  }

  getData() {
    const url = this.endpoint;
    fetch(url)
      .then((res) => {
        res.json().then((data) => {
          delete this.error;
          this.artworks = data;
          console.log(data);
          this.update();
        });
      })
      .catch((error) => {
        this.error = error;
        console.log(error);
        this.update();
      });
  }

  update() {
    this.artworks.forEach((item) => {
      let artworks = document.createElement("div");
      artworks.innerHTML = `
        <img
          class="(hover)stack-5 -margin-t-4 margin-b-8 margin-r-4 height-56 width-16 object-cover object-center bg-tint-onyx-1 shadow curve-border-lg transform -skew-y-24 (hover)scale-125 transition duration-200 linear transform skew-y-24 overflow-hidden cursor-pointer"
          src="${item.url}"
          alt="${item.title}"
        />
      `;
      this.querySelector("data-artworks").appendChild(artworks);
    });
  }
}
customElements.define("profile-artworks", ProfileArtworks);

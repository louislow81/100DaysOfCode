class CardBackgroundImage extends HTMLElement {
  constructor() {
    super();

    this.url = "#";
    this.title = "No Title";
  }

  static get observedAttributes() {
    return ["url", "title"];
  }

  attributeChangedCallback(props, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[props] = newValue;
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="stack-1 (expand)height-64 (expand)width-full shadow-lg">
        <img
          class="object-cover object-center filter saturate-6 brightness-3"
          src="${this.url}"
          alt="${this.title}"
        />
      </div>
    `;
    this.appendChild(template.content.cloneNode(true));
  }
}
customElements.define("card-bg-image", CardBackgroundImage);

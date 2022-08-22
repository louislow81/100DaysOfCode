class CardGameLogo extends HTMLElement {
  constructor() {
    super();

    this.url = "#";
    this.title = "No Image";
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
      <div class="stack-5 absolute -top-4 left-8">
        <div class="(expand)width-32 (expand)height-32 bg-black shadow-md-tint-onyx-1 curve-border-lg overflow-hidden">
          <img
            class="object-cover object-center filter saturate-6 brightness-2 bg-tint-onyx-4"
            src="${this.url}"
            alt="${this.title}"
          />
        </div>
      </div>
    `;
    this.appendChild(template.content.cloneNode("true"));
  }
}
customElements.define("card-game-logo", CardGameLogo);

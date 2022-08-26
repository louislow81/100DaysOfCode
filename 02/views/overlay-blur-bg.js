class OverlayBlurBg extends HTMLElement {
  constructor() {
    super();

    this.visibility = "hidden";
    this.url = "#";
    this.title = "Image";
  }

  static get observedAtrributes() {
    return ["url", "title", "visibility"];
  }

  attributeChangedCallback(props, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[props] = newValue;
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="${this.visibility} stack-5 absolute -top-10 -bottom-10 -left-10 -right-10 filter blur-10">

        <img
          class="height-screen width-full object-fit object-center"
          src="${this.url}"
          alt="${this.title}"
        />

      </div>
    `;
    this.appendChild(template.content.cloneNode(true));
  }
}
customElements.define("overlay-blur-bg", OverlayBlurBg);

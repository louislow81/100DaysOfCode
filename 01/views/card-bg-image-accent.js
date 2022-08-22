class CardBackgroundImageAccent extends HTMLElement {
  constructor() {
    super();

    this.gradient = "bg-gradient start-transparent stop-shade-charcoal-1 start-40 stop-80 angle-180";
  }

  static get observedAttributes() {
    return ["gradient"];
  }

  attributeChangedCallback(props, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[props] = newValue;
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="stack-2 absolute top-6 left-0 height-64 width-full ${this.gradient} transform -skew-y-12"></div>
    `;
    this.appendChild(template.content.cloneNode("true"));
  }
}
customElements.define("card-bg-image-accent", CardBackgroundImageAccent);

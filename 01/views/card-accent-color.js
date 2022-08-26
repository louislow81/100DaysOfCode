class CardAccentColor extends HTMLElement {
  constructor() {
    super();

    this.gradient = "bg-gradient-preset-1";
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
      <div class="stack-3 absolute bottom-10 left-0 height-56 width-full ${this.gradient} filter saturate-4 transform skew-y-12 shadow-lg curve-border-lg"></div>
    `;
    this.appendChild(template.content.cloneNode(true));
  }
}
customElements.define("card-accent-color", CardAccentColor);

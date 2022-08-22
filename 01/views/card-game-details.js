class CardGameDetails extends HTMLElement {
  constructor() {
    super();

    this.title = "No Title";
    this.name = "No Game Name";
    this.date = "No Date";
  }

  static get observedAttributes() {
    return ["title", "name", "date"];
  }

  attributeChangedCallback(props, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[props] = newValue;
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="stack-4 absolute -bottom-4 left-0 height-56 width-full bg-gradient-preset-72 transform -skew-y-12 shadow-lg curve-border-lg">
        <div class="stack-5 absolute top-10 right-10 width-56 transform skew-y-12 text-xl-2 text-shade-charcoal-5 depth-tight-2">
          ${this.title}
        </div>
        <div class="padding-b-24 height-64 padding-6 transform skew-y-12 text-sm text-shade-charcoal-5 flex justify-between items-end width-full curve-border-lg select-none">
          <div>
            ${this.name}
          </div>
          <div class="padding-x-4 padding-y-1 bg-white shadow curve-border-full">
            ${this.date}
          </div>
        </div>
      </div>
    `;
    this.appendChild(template.content.cloneNode("true"));
  }
}
customElements.define("card-game-details", CardGameDetails);

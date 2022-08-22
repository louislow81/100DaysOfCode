class ProfileCover extends HTMLElement {
  constructor() {
    super();

    this.url = "#";
    this.title = "";
    this.followerbg = "start-transparent stop-shade-charcoal-5";
  }

  static get observedAttributes() {
    return ["url", "title", "followerbg"];
  }

  attributeChangedCallback(props, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[props] = newValue;
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="stack-2 relative curve-border-lg transform (group-hover)scale-125 transition duration-500 linear">

        <div class="stack-2 invisible (group-hover)visible absolute width-56 height-104 bg-gradient ${this.followerbg} start-30 stop-80 angle-90 curve-border-lg"></div>

        <img
          class="stack-1 width-56 height-104 object-cover object-center shadow (group-hover)shadow-dreamy curve-border-lg cursor-pointer overflow-hidden transition duration-200 linear"
          src="${this.url}"
          alt="${this.title}"
        />

      </div>
    `;
    this.appendChild(template.content.cloneNode("true"));
  }
}
customElements.define("profile-cover", ProfileCover);

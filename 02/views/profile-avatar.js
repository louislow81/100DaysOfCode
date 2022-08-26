class ProfileAvatar extends HTMLElement {
  constructor() {
    super();

    this.url = "https://thumbs.dreamstime.com/b/hexagon-gaming-logo-colorful-vector-design-hexagon-game-gaming-logo-design-168547122.jpg";
    this.name = "John Doe";
  }

  static get observedAttributes() {
    return ["url", "name"];
  }

  attributeChangedCallback(props, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[props] = newValue;
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="stack-3 absolute top-0 left-0 width-full">
        <img
          class="-margin-t-6 -margin-l-6 (group-hover)-margin-t-10 (group-hover-margin-l-4 height-16 width-16 object-cover object-enter shadow curve-border-full"
          src="${this.url}"
          alt="${this.name}"
        />
      </div>
    `;
    this.appendChild(template.content.cloneNode(true));
  }
}
customElements.define("profile-avatar", ProfileAvatar);

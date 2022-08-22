class ProfileFollowers extends HTMLElement {
  constructor() {
    super();

    this.followers = [];
    this.endpoint = "./data/followers.json";
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
      <div class="stack-3 absolute -top-8 -right-2 flex-column flex-gap-2 flex-wrap justify-start items-start invisible (group-hover)visible transition duration-800 ease-in-out">

        <data-followers></data-followers>

      </div>
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
          this.followers = data;
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
    this.followers.forEach((item) => {
      let followers = document.createElement("div");
      followers.innerHTML = `
        <img
          class="inline-block height-8 width-8 object-cover object-center shadow curve-border-full"
          src="${item.url}"
          alt="${item.name}"
        />
      `;
      this.querySelector("data-followers").appendChild(followers);
    });
  }
}
customElements.define("profile-followers", ProfileFollowers);

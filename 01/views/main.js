import "weavvcss";

class MainApp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="relative max-width-md bg-shade-charcoal-5 curve-border-lg overflow-hidden">

        <card-bg-image-accent
          gradient="bg-gradient start-transparent stop-shade-charcoal-1 start-40 stop-80 angle-180">
        </card-bg-image-accent>

        <card-bg-image
          url="https://game8z.com/wp-content/uploads/2022/08/Riot-must-be-held-accountable.png"
          title="League of Legends">
        </card-bg-image>

        <div class="relative margin-b-2 height-56">

          <card-game-logo
            url="https://sm.ign.com/ign_ap/screenshot/default/league-client-update-header-1_x1e5.jpg"
            title="League of Legends">
          </card-game-logo>

          <card-accent-color
            gradient="bg-gradient-preset-73">
          </card-accent-color>

          <card-game-details
            title="Astronomy Binoculars A Great Alternative"
            name="League of Legends Official"
            date="02.04.2022">
          </card-game-details>

        </div>
      </div>
    `;
    this.appendChild(template.content.cloneNode(true));
  }
}
customElements.define("main-app", MainApp);

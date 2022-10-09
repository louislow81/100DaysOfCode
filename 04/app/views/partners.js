import { craft } from "knott";

const logos = [
  { url: "https://images.contentstack.io/v3/assets/blte410e3b15535c144/blt6844a48367529f99/61fae2b713bbb628521ff83b/logo-xbox-sx.svg" },
  { url: "https://images.contentstack.io/v3/assets/blte410e3b15535c144/bltcded693feec00c6e/61fae2cabd7acb345ace6a37/logo-xboxone.svg" },
  { url: "https://images.contentstack.io/v3/assets/blte410e3b15535c144/blt1d838f482e42f821/61fae2d42c429d35c030fa10/logo-ps.svg" },
  { url: "https://images.contentstack.io/v3/assets/blte410e3b15535c144/blt108a80d525ca6c35/61fae2ede0b919284700d499/logo-steam.svg" },
  { url: "https://images.contentstack.io/v3/assets/blte410e3b15535c144/bltd5df3f514a4099e9/61fae2f6e0b919284700d49d/logo-stadia.svg" },
  { url: "https://images.contentstack.io/v3/assets/blte410e3b15535c144/blt14df21430d70adee/63094132c350df140f268978/logo-epic-26px.svg" },
];

const partnerLogos = () => craft("partner-logos", {
  props: { class: "padding-6 flex flex-gap-8 flex-wrap flex-center morph fade-in duration-500 delay-2 select-none" },
  actions: [
    ["addWindow", "load", ()=> {
      logos.forEach((item) => {
        const l = document.createElement("div");
        l.innerHTML = `
          <img 
            class="height-6 width-full filter drop-shadow-md" 
            src="${item.url}"
            alt=""
            loading="lazy" 
          />
        `;
        document
          .querySelector("partner-logos")
          .appendChild(l);
      });
    }],
  ]
});
 
export { partnerLogos };

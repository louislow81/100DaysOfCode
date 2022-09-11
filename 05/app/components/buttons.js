import { craft } from "knott";

const gettingStarted = (url) => 
  craft("getting-started-container", {
    props: {
      id: "setButtonHover",
      class: `paddingTop-80`,
    },
    html: `
      <a 
        class="marginTop-40 paddingLeft-40 paddingRight-40 paddingTop-15 paddingBottom-15 fontSize-20 textColor-rgba(100,100,100,100) bgColor-white borderRadius-10 textDecoration-none" 
        href=${url} 
        target="_blank" 
        title=""
      >
        Getting Started
      </a>
    `,
    hover: [["setButtonHover"]],
  });

export { gettingStarted };

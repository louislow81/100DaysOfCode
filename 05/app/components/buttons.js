import { craft } from "knott";

const gettingStarted = (url) => 
  craft("getting-started-container", {
    props: { id: "setButtonHover", class: `pt:80` },
    html: `
      <a 
        class="mt:40 pl:40 pr:40 pt:15 pb:15 textSize:20 textColor:rgba(100,100,100,100) bgColor:white curveRadius:10 textDeco:none" 
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

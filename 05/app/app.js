import { craft, mount, render, cache, design } from "knott";

import { contentSection } from "./components/sections";
import { gettingStarted } from "./components/buttons";
import { smallFooter } from "./components/footers";

const cssReset = `p:0 m:0 listStyle:none textSize:16 fontFamily:montserrat`;
const flexCenter = `display:flex justifyContent:center alignItems:center`;

const rootNode = () =>
  craft("body", {
    props: { id: "root", class: `${cssReset} ${flexCenter} flexDirection:column vWidth:100% bgColor:rgba(59,71,76,1)` },
    expand: [
      craft("main-container", {
        props: { class: `${flexCenter} flexDirection:column pt:80 pb:80 textColor:white`        },
        html: `
          <img 
            class="h:180 w:auto filter:invert(1) filter:saturate(0) filter:brightness(300%) select:none" 
            src="https://raw.githubusercontent.com/louislow81/knott.js/e832386075591d7ad4e42b7703e46836d2ca5988/knott-logo.svg" 
            alt="Knott.js" 
          />
        `,
        // components
        expand: [ 
          gettingStarted(),
          contentSection(
            "Writing",
            "Virtual",
            "DOM",
            "Library",
            "0,255,243,1",
            "Create object-based node-style web component",
            "Or, conventional HTML style.",
            "It's freedom!"
          ),
          contentSection(
            "Styling",
            "Zero",
            "CSS",
            "Payloads",
            "255,80,137,1",
            "A functional Low-Level DOM CSS Utilities.",
            "Fine-tuning an utility with",
            "infinite settings."
          ),
          smallFooter(),
        ],
      }),
    ],
  });

mount("root", render(rootNode())); // mount `main` node

window.onload = () => design(true); // enable virtual CSS, Read Artis Docs (https://artisjs.netlify.com).
cache(true); // enable service worker to cache assets for offline access.


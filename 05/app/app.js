import { craft, mount, render, pwa, style } from "knott";

import { contentSection } from "./components/sections";
import { gettingStarted } from "./components/buttons";
import { smallFooter } from "./components/footers";

const cssReset = `padding-0 margin-0 listStyle-none fontSize-16 font-Montserrat`;
const flexCenter = `display-flex justifyContent-center alignItems-center`;

const rootNode = () =>
  craft("body", {
    props: {
      id: "root",
      class: `${cssReset} ${flexCenter} flexDirection-column xWidth-100% bgColor-rgba(59,71,76,1)`,
    },
    expand: [
      craft("main-container", {
        props: {
          class: `${flexCenter} flexDirection-column paddingTop-80 paddingBottom-80 textColor-white`,
        },
        html: `
          <img class="height-180 width-auto filter-invert(1) filter-saturate(0) filter-brightness(300%) userSelect-none" src="https://raw.githubusercontent.com/louislow81/knott.js/e832386075591d7ad4e42b7703e46836d2ca5988/knott-logo.svg" alt="Knott.js" />
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

style(true); // enable low-level DOM Styling without CSS and no CSS payload.
pwa(true); // enable service worker to cache assets for offline access.


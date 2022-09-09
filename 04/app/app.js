import { craft, mount, render, pwa } from "knott";

import "weavvcss";

import { skewPanel } from "./views/panels";
import { logoHeader, stickyHeader } from "./views/headers";
import { partnerLogos } from "./views/partners";
import { copyrightFooter } from "./views/footers";


const rootNode = () => 
  craft("body", {
    props: {
      id: "root",
      class: "relative height-screen width-full font-default flex flex-column flex-center bg-shade-onyx-4 bg-cover bg-center bg-no-repeat bg-blend-overlay overflow-hidden",
      style: "background-image:url(https://images3.alphacoders.com/841/thumb-1920-841918.jpg);",
    },
    expand: [
      // components
      stickyHeader(),
      logoHeader(),
      //...
      craft("panel-container", {
        props: {
          class: "block flex flex-gap-6 flex-wrap flex-center",
        },
        expand: [
          // components
          skewPanel("1", "https://wallpaper.dog/large/20523448.jpg", "https://i.pravatar.cc/100?1"),
          skewPanel("2", "https://p4.wallpaperbetter.com/wallpaper/144/557/262/bungie-activision-destiny-forsaken-destiny-2-hd-wallpaper-preview.jpg", "https://i.pravatar.cc/100?2"),
          skewPanel("3", "https://cutewallpaper.org/21/destiny-wallpaper-warlock/Warlock-Stormcaller-Destiny-4K-Wallpapers-Top-Free-Warlock-.jpg", "https://i.pravatar.cc/100?3"),
          //...
        ],
      }),
      // components
      partnerLogos(),
      copyrightFooter(),
      //...
    ],
  });

mount("root", render(rootNode())); // mount `main` node

pwa(true); // enable service worker to cache assets for offline access.

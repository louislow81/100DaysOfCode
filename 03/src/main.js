import { craft, render, diff, mount } from "knott";

import { card } from "./components/cards";
import { alert } from "./components/notifications";

const vRootNode = 
  craft("body", {
    props: {
      id: "app",
      class: "relative font-default height-screen flex flex-center bg-gradient-preset-1 antialiased",
    },
    expand: [
      // component
      alert("Build with Knott.js"),
      craft("div", {
        props: {
          class:
            "flex flex-wrap flex-gap-4 flex-center (expand)height-auto (expand)width-64 (expand)shadow-lg (expand)curve-border-lg",
        },
        expand: [
          // component
          card("https://images.pexels.com/photos/1545510/pexels-photo-1545510.jpeg?auto=compress&cs=tinysrgb&w=800"),
        ],
      }),
      
    ],
  });

mount(render(vRootNode), "app");


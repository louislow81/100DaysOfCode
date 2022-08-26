import { craft, mount, unmount, render } from "knott";

import "weavvcss";

const slotA = craft("div", {
  props: {
    id: "idSlotA",
    class: "padding-x-4 padding-y-1 bg-tint-charcoal-5 shadow curve-border-lg",
  },
  text: "Slot A",
  actions: [
    [ "add", "click", () => { mount(render(slotB), "idSlotB") } ],
  ],
});

const slotB = craft("div", {
  props: {
    id: "idSlotB",
    class: "padding-x-4 padding-y-1 bg-tint-amber-1 shadow curve-border-lg",
  },
  text: "Slot B",
  expand: [
    craft("data-loop", {
      props : {
        class: "inline-block flex flex-column padding-y-2",
      }
    }),
  ],
  actions: [
    [ "add", "click", () => { update() } ],
  ],
});


const update = () => {
  fetch("https://louislow81.github.io/assets/data/knowledge.json")
    .then((res) => { res.json()
    .then((data) => {
      data.length = 4;
      const parsed = data;
      parsed.forEach((item) => {
        const t = document.createElement("template");
        t.innerHTML = `${item.title}`;
        document.querySelector("data-loop").appendChild(t.content.cloneNode('true'));
      });
    })
  });
};

const vRootNode = craft("body", {
  props: {
    id: "app",
    class:
      "height-screen text-md antialiased flex flex-column flex-center bg-gradient-preset-1",
  },
  text: "Body Text",
  expand: [
    craft("div", {
      props: {
        class: "flex flex-column flex-center text-xl-4 font-semibold",
      },
      text: "Body Child Text!",
      actions: [
        [ "add", "click", () => { unmount("idSlotA") } ],
        [ "add", "click", () => { mount(render(slotB),"idInsertHere") } ],
      ],
      expand: [
        craft("div", {
          props: {
            id: "idInsertHere",
          },
        }),
        craft("div", {
          props: {
            id: "idSlotA",
            class: "padding-x-4 padding-y-1 bg-tint-charcoal-5 shadow curve-border-lg",
          },
          text: "Slot A",
        }),
      ],
    }),
  ],
});

mount(render(vRootNode), "app");

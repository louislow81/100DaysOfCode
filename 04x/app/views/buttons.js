import { craft } from "knott";

const buttonA = craft(
  "button", {
    props: {
      id: "buttonA",
      class: "padding-x-6 padding-y-2 text-white (hover)text-underline bg-tint-charcoal-1 (hover)bg-tint-charcoal-5 curve-border-lg shadow",
    },
    text: "Click Me!",
    toggle: "modalA",
  },
);

const closeButton = craft(
  "button", {
    text: "Close Button",
    toggle: "modalA",
  },
);

export {
  buttonA,
  closeButton,
};

import { craft } from "knott";

// component
const notification = 
  // props
  (textMessage) => 
  // element
  craft("div", { 
    props: {
      class: "absolute top-2 width-full flex flex-center",
    },
    expand: [
      craft("div", {
        props: {
          class: "padding-x-6 padding-y-2 text-white text-sm font-semibold bg-shade-charcoal-1 (hover)bg-opacity-75 shadow",
        },
        expand: [
          craft("a", {
            props: {
              class: "text-underline",
              href: "https://github.com/louislow81/knott.js",
              target: "_blank",
              title: "Knott.js",
            },
            text: textMessage,
          }),
        ],
      }),
    ],
  });
  
// export component
export const alert = notification;

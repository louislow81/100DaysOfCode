import { craft } from "knott";

import { followers } from "./avatars.js";

// component
const cardOne = 
  // props
  (imageURL) => 
  // element
  craft("div", {
    props: {
      class: "relative flex flex-center bg-white",
    },
    expand: [
      craft("div", {
        props: {
          class: "stack-1",
        },
        expand: [
          craft("img", {
            props: {
              class: "height-88 width-72 object-cover object-center curve-border-lg filter saturate-4 brightness-2",
              src: imageURL,
              alt: "Pexels Photo"
            },
          }),
        ],
      }),
      // component
      followers("https://i.pravatar.cc/200?"),
    ],
  });

// export component
export const card = cardOne;

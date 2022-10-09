import { craft } from "knott";

import { avatars } from "./avatars.js";

// component
const cardOne =
  // props
  (
    imageURL,
    imageQuality = "200" // default
  ) =>
  // element
  craft("div", {
    props: { class: "relative flex flex-center bg-white" },
    expand: [
      craft("div", {
        props: { id: "idCardImage", class: "stack-1" },
        expand: [
          craft("img", {
            props: { class: "height-88 width-72 object-cover object-center curve-border-lg bg-white filter saturate-4 brightness-2",
              src: imageURL + "?auto=compress&cs=tinysrgb&w=" + imageQuality, loading: "lazy", alt: "Pexels Photo" },
          }),
        ],
      }),
      // component
      avatars,
    ],
  });

// export component
export const card = cardOne;



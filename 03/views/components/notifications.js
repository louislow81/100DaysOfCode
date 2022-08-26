import { craft, mount, unmount, render } from "knott";

const buttonGithub =
  craft("div", {
    text: "Thanks for visiting Knott.js",
    actions: [
      [ "add", "click", ()=>{ unmount("removeCard"); } ],
    ],
  });

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
              id: "githubPage",
              class: "text-underline",
              href: "#",
              target: "_self",
              title: "Knott.js",
            },
            text: textMessage,
            actions: [
              [ "add", "click", ()=>{ mount(render(buttonGithub), "githubPage"); } ],
            ],
          }),
        ],
      }),
    ],
  });

// export component
export const alert = notification;

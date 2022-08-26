import { craft, mount, unmount, render } from "knott";

const buttonGithub =
  craft("div", {
    props: {
      class: "text-center cursor-pointer",
    },
    text: "Thanks for visiting Knott.js",
    actions: [
      [ "add", "click", ()=>{ unmount("idAvatars"); } ],
      [ "add", "click", ()=>{ unmount("idCardImage"); } ],
    ],
    expand: [
      craft("div", {
        props: {
          class: "margin-t-2 text-xs",
        },
        text: "Click me again to remove images below...",
      }),
    ],
  });

// component
const notification =
  // props
  (textMessage) =>
  // element
  craft("div", {
    props: {
      class: "absolute top-2 width-full flex flex-column flex-center",
    },
    expand: [
      craft("div", {
        props: {
          class: "padding-x-6 padding-y-2 text-white text-sm font-semibold bg-shade-charcoal-1 (hover)bg-opacity-75 shadow curve-border",
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
      craft("div", {
        props: {
          class: "margin-t-4 text-xs text-white text-offset-shadow offset-x-1 offset-y-1 offset-blur-2 offset-tint-onyx-1",
        },
        text: "Web Component for the basic web"
      }),
    ],
  });

// export component
export const alert = notification;

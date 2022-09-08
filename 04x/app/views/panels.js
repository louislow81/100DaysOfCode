import { craft } from "knott";

const skewPanel = (number, image1, image2) => 
  craft("div", {
    props: {
      class: "(group) relative padding-8 height-72 width-40 transform -skew-x-12 curve-border-lg shadow-lg-shade-charcoal-1 border-8 border-transparent (hover)border-tint-onyx-5 overflow-hidden cursor-pointer select-none",
    },
    expand: [
      craft("div", {
        props: {
          class: "absolute top-0 -left-6 height-88 width-56",
        },
        expand: [
          craft("img", {
            props: {
              class: "stack-1 inline-block height-88 width-56 bg-shade-charcoal-2 transform skew-x-12 (group-hover)scale-125 object-cover object-center transition duration-200 ease-in-out filter saturate-6 brightness-2 overflow-hidden",
              src: image1,
              alt: "",
              loading: "lazy",
            },
          }),
        ],
      }),
      craft("overlay-content-bg", {
        html: `<div class="stack-2 absolute top-0 -left-4 height-88 width-32 (group-hover)bg-shade-amber-1 (group-hover)opacity-75 transition duration-200 ease-in-out (group-hover)shadow-lg"></div>`,
        expand: [
          craft("user-avatars", {
            props: {
              class: "stack-4 absolute bottom-2 left-2",
            },
            html: `
              <img 
                class="transform skew-x-12 height-10 width-10 bg-shade-charcoal-5 object-cover object-center curve-border-full shadow-dreamy filter saturate-4 brightness-2" 
                src=${image2}
                alt=""
                loading="lazy" 
              />
              `,
          }),
          craft("game-controller-icon", {
            props: {
              class: "stack-4 absolute bottom-2 right-2",
            },
            html: `
              <img 
                class="stack-3 transform skew-x-12 height-8 width-auto object-fit object-center filter drop-shadow-md invert-1" 
                src="https://cdn-icons-png.flaticon.com/512/13/13973.png" alt="" 
              />
            `,
          }),
          craft("billboard-overlay", {
            html: `
              <div class="stack-3 invisible (group-hover)visible inline-block absolute">
                <div class="transform height-24 width-24 -margin-l-2 padding-t-2 flex flex-center bg-tint-onyx-5 bg-opacity-50 curve-border filter brightness-4">
                  <div class="transform skew-x-12 text-xl-6 font-roboto font-semibold text-white text-offset-shadow offset-x-0 offset-y-0 offset-blur-6 offset-tint-onyx-5">
                    ${number}
                  </div>
                </div>
              </div>
            `,
          }),
          craft("avatar-bg-overlay", {
            props: {
              class: "stack-3 block absolute bottom-2 left-2 transform skew-x-12 height-8 width-8 bg-white curve-border-full (group-hover)margin-l-3 (group-hover)margin-b-2 morph fade-in duration-500",
            },
          }),
        ],
      }),
    ],
  });

export { skewPanel };


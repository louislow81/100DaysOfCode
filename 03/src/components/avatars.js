import { craft } from "knott";

// component
const avatars =
  // props
  (imageURL) => 
  // element
  craft("div", {
    props: {
      class: "stack-2 absolute -right-12 flex flex-column flex-center (expand)margin-b-2 (expand)height-10 (expand)width-10 (expand)shadow (expand)curve-border-full",
    },
    expand: [
      craft("img", {
        props: {
          class: "inline-block object-cover object-center",
          src: imageURL + "1",
          alt: "",
        }
      }),
      craft("img", {
        props: {
          class: "inline-block object-cover object-center",
          src: imageURL + "2",
          alt: "",
        }
      }),
      craft("img", {
        props: {
          class: "inline-block object-cover object-center",
          src: imageURL + "3",
          alt: "",
        }
      }),
      craft("img", {
        props: {
          class: "inline-block object-cover object-center",
          src: imageURL + "4",
          alt: "",
        }
      }),
      craft("img", {
        props: {
          class: "inline-block object-cover object-center",
          src: imageURL + "5",
          alt: "",
        }
      }),
      craft("img", {
        props: {
          class: "inline-block object-cover object-center",
          src: imageURL + "6",
          alt: "",
        }
      }),
      craft("img", {
        props: {
          class: "inline-block object-cover object-center",
          src: imageURL + "7",
          alt: "",
        }
      }),
    ],
  });
  
// export component
export const followers = avatars;



import { craft } from "knott";

const logoHeader = () => 
  craft("img", {
    props: { class: "inline-block padding-y-8 height-40 width-auto object-cover object-center filter invert-1 filter brightness-2 drop-shadow-md select-none", src: "https://www.freepnglogos.com/uploads/destiny-logo-png/best-photos-bungie-destiny-logo-transparent-20.png", alt: "", loading: "lazy" },
  });
  
const stickyHeader = () =>
  craft("top-sticky-header", {
    props: { class: "absolute top-0 flex flex-center shadow-lg morph slide-in-down duration-300 delay-5" },
    html: `
      <div class="flex flex-center (expand)height-6 (expand)width-32 (expand)bg-shade-amber-1 bg-opacity-75">
        <div class="margin-l-2 transform skew-x-12"></div>
        <div class="-margin-l-2 transform -skew-x-12"></div>
      </div>
      <div class="absolute flex flex-center">
        <div class="text-xs text-shade-onyx-1 text-offset-shadow offset-x-1 offset-y-1 offset-blur-2 offset-shade-amber-4">
          Crafted with
          <a class="text-underline" href="https://github.com/louislow81/knott.js" target="_blank" title="">Knott JS</a>
          &
          <a class="text-underline" href="https://weavvcss.netlify.app" target="_blank" title="">WEAVV CSS</a>
        </div>
      </div>
    `,
  });

export { logoHeader, stickyHeader };

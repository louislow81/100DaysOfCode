import { craft } from "knott";

const copyrightFooter = () =>
  craft("footer", {
    html: `
      <div class="padding-b-8 text-xs text-tint-onyx-3 font-roboto text-center text-offset-shadow offset-x-1 offset-y-1 offset-blur-2">
        &copy; Bungie, Inc. All rights reserved.
      </div>
    `,
  });
  
  export { copyrightFooter };

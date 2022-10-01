import { craft } from "knott";

const smallFooter = () =>
  craft(`main-footer`, {
    html: `
      <div class="pt:60 textSize:18 opacity:0.5">
        &copy; Louis Low
      </div>
    `,
  });
  
export { smallFooter };

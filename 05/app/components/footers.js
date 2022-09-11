import { craft } from "knott";

const smallFooter = () =>
  craft(`main-footer`, {
    html: `
      <div class="paddingTop-60 fontSize-18 opacity-0.5">
        &copy; Louis Low
      </div>
    `,
  });
  
export { smallFooter };

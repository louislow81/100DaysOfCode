import { craft } from "knott";

const flexCenter = `display-flex justifyContent-center alignItems-center`;

const contentSection = (
  headerTitle,
  heroTextOne,
  heroTextTwo,
  heroTextThree,
  accentColor,
  descOne,
  descTwo,
  highlightDesc,
) =>
  craft(`section-container`, {
    html: `
      <div class="${flexCenter} flexDirection-column paddingTop-60 paddingBottom-60 fontWeight-100">
        <div class="textAlign-left paddingBottom-20 fontSize-40 fontWeight-bold xWidth-100%">
          ${headerTitle}
        </div>
        <div class="fontSize-100 lineHeight-50 ${flexCenter} flexDirection-column">
          <div>
            ${heroTextOne}
            <span class="fontWeight-bold opacity-0.5">
              ${heroTextTwo}
            </span>
          </div>
          <div class="textTransform-uppercase textColor-rgb(${accentColor})">
            ${heroTextThree}
          </div>
        </div>
      </div>
      <div class="xWidth-100% textAlign-center">
        <div class="paddingBottom-10 font-Raleway fontSize-20 fontWeight-300">
          ${descOne}
        </div>
        <div class="font-Raleway fontSize-20 fontWeight-300">
          ${descTwo}
          <span class="fontWeight-bold textDecoration-underline">
            ${highlightDesc}
          </span>
        </div>
      </div>
    `,
  });

export { contentSection };

import { craft } from "knott";

const flexCenter = `display:flex justifyContent:center alignItems:center`;

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
      <div class="${flexCenter} flexDirection:column pt:60 pb:60 fontWeight:100">
        <div class="textAlign:left pb:20 textSize:40 fontWeight:bold vWidth:100%">
          ${headerTitle}
        </div>
        <div class="textSize:100 lineHeight:50 ${flexCenter} flexDirection:column">
          <div>
            ${heroTextOne}
            <span class="fontWeight:bold opacity:0.5">
              ${heroTextTwo}
            </span>
          </div>
          <div class="textTransform:uppercase textColor:rgb(${accentColor})">
            ${heroTextThree}
          </div>
        </div>
      </div>
      <div class="vWidth:100% textAlign:center">
        <div class="pb:10 fontFamily:raleway textSize:20 fontWeight:300">
          ${descOne}
        </div>
        <div class="fontFamily:raleway textSize:20 fontWeight:300">
          ${descTwo}
          <span class="fontWeight:bold textDeco:underline">
            ${highlightDesc}
          </span>
        </div>
      </div>
    `,
  });

export { contentSection };

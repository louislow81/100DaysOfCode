import { craft } from "knott";

const avatar = craft(
  "data-loop-avatars", {
    props: { id: "idAvatars", class: "stack-2 absolute -right-12 flex flex-column flex-center (expand)margin-b-2 (expand)height-10 (expand)width-10 (expand)shadow (expand)curve-border-full" },
  });


fetch("./dist/data.json", { 
  mode: "cors", 
  credentials: "same-origin",
}).then((res) => { res.json()
  .then((data) => {
    data.length = 7;
    const parsed = data;
    parsed.forEach((item) => {
      const t = document.createElement("template");
      t.innerHTML = `
        <img 
          class="object-cover object-center bg-gradient-preset-${item.preset} filter saturate-2 brightness-2" 
          src="${item.url}+${item.id}"
          loading="lazy"
          alt="${item.id}"
        />
      `;
      document.querySelector("data-loop-avatars").appendChild(t.content.cloneNode('true'));
    });
  })
});

// export component
export const avatars = avatar;




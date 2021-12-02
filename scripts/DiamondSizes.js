import { getSizes, setSize } from "./database.js";

document.addEventListener("change", (event) => {
  if (event.target.name === "size") {
    setSize(parseInt(event.target.value));
  }
});

const sizes = getSizes();

document.addEventListener("change", (event) => {
  if (event.target.name === "size") {
  }
});

export const DiamondSizes = () => {
  let html = "<ul>";

  // Use .map() for converting objects to <li> elements
  const listItems = sizes.map((size) => {
    return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`;
  });

  html += listItems.join("");
  html += "</ul>";

  return html;
};

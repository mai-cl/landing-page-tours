import iconFonts from "./fonts/icon-font.css";
import styles from "./sass/main.scss";

let navigation = document.querySelector(".navigation");
let checkbox = document.getElementById("navi-toggle");
navigation.addEventListener("click", (e) => {
  if (!e.target.matches(".navigation__link")) return;
  checkbox.checked = false;
});

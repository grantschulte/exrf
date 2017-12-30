import "../styles/manifest.scss";

import Menu from "./components/menu.js";

function init() {
  const menuEl = document.querySelector(".js-menu");
  new Menu(menuEl);
}

init();

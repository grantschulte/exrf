import "../styles/manifest.scss";

import Styleguide from "./app";

// Initialize Application

window.onload = () => {
  Styleguide
    .menu("js-menu")
    .selectBoxes("js-slct")
    .posterCards("js-poster-card");
};

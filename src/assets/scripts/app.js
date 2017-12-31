import Menu from "./components/menu";
import SelectBox from "./components/select-box";

const Styleguide = {
  menu(className) {
    const menuEl = document.querySelector(`.${className}`);
    new Menu(menuEl);
    return this;
  },

  selectBoxes(className) {
    const selects = document.getElementsByClassName(className);

    for (let s of selects) {
      new SelectBox(s);
    }

    return this;
  }
};

export default Styleguide;

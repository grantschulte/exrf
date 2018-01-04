import Menu from "./components/menu";
import SelectBox from "./components/select-box";
import MovieCard from "./components/movie-card";

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
  },

  movieCards(className) {
    const cards = document.getElementsByClassName(className);

    for (let card of cards) {
      new MovieCard(card);
    }

    return this;
  }
};

export default Styleguide;

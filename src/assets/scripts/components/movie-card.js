import shave from "shave";

class MovieCard {
  constructor(el) {
    Object.assign(this, {
      $el: el
    });

    this.truncateDescription();
  }

  truncateDescription() {
    let $desc = this.$el.querySelector(".movie-card__desc");

    if ($desc) {
      let style = window.getComputedStyle($desc);
      let maxHeight = parseInt(style.getPropertyValue("max-height"), 10);
      shave(".movie-card__desc", maxHeight);
    }
  }
}

export default MovieCard;

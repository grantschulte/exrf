import shave from "shave";

class PosterCard {
  constructor(el) {
    Object.assign(this, {
      $el: el
    });

    this.truncateDescription();
  }

  truncateDescription() {
    let $desc = this.$el.querySelector(".poster-card__desc");
    
    if ($desc) {
      let style = window.getComputedStyle($desc);
      let maxHeight = parseInt(style.getPropertyValue("max-height"), 10);
      shave(".poster-card__desc", maxHeight);
    }
  }
}

export default PosterCard;

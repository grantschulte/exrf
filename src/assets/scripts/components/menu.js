import { widths as queryWidths } from "../utils/media-queries";

class Menu {
  constructor(el) {
    Object.assign(this, {
      $el: el,
      isOpen: false
    });

    this.$trigger = document.querySelector(".js-menuTrigger");
    this.$closeEl = document.querySelector(".js-menuClose");

    this.$trigger.addEventListener("click", (e) => {
      this.toggle(e);
    });

    this.$closeEl.addEventListener("click", (e) => {
      this.toggle(e);
    });

    const mql = window.matchMedia(`(min-width: ${queryWidths.md}px)`);

    mql.addListener((e) => {
      if (e.matches) {
        this.close();
      }
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  close() {
    this.$el.classList.remove("open");
    this.isOpen = false;
    document.body.classList.remove("menuOpen");
  }

  open() {
    this.$el.classList.add("open");
    this.isOpen = true;
    document.body.classList.add("menuOpen");
  }
}

export default Menu;

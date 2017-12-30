import { widths as queryWidths } from "../utils/media-queries";

class Menu {
  constructor(el) {
    Object.assign(this, {
      $el: el,
      isOpen: false,
      bodyClass: "menu-open",
      menuClass: "open"
    });

    this.$trigger = document.querySelector(".js-menu-trigger");
    this.$closeEl = document.querySelector(".js-menu-close");

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
    this.$el.classList.remove(this.menuClass);
    this.isOpen = false;
    document.body.classList.remove(this.bodyClass);
  }

  open() {
    this.$el.classList.add(this.menuClass);
    this.isOpen = true;
    document.body.classList.add(this.bodyClass);
  }
}

export default Menu;

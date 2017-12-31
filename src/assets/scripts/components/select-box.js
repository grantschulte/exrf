class SelectBox {
  constructor(el) {
    Object.assign(this, {
      $el: el,
      isOpen: false
    });

    this.$form = this.$el.parentElement;
    this.$select = this.$el.querySelector("select");
    this.$valueLabel = this.$el.querySelector(".slct__value-label");

    if (this.$select) {
      this.makeOptionsMenu();
      this.$valueLabel.innerHTML = this.selected.innerHTML;

      this.$el.addEventListener("click", () => {
        this.toggle();
      });

      // Close menu if click occurs outside of element.

      document.addEventListener("click", (e) => {
        if (e.target.id !== this.$el.id
          && e.target.parentElement.id !== this.$el.id) {
          this.close();
        }
      });
    }
  }

  makeOptionsMenu() {
    const list = document.createElement("ul");
    list.classList.add("slct__options");

    list.addEventListener("click", (e) => {
      this.setSelected(e.target);
    });

    for (let opt of this.$select.options) {
      const item = document.createElement("li");

      // Set to active if the value matches
      // the query parameter.

      item.classList.toggle("active", opt.value === this.selectedId);
      item.innerHTML = opt.innerHTML;
      item.id = opt.index;
      list.appendChild(item);
    }

    this.$el.appendChild(list);
  }

  get selectedId() {
    const url = new URL(window.location);
    const params = new URLSearchParams(url.search);
    return params.get("genre") || this.$select.options[0].value;
  }

  get selected() {
    let opts = [...this.$select.options];
    let selected = opts.find(o => {
      return o.value === this.selectedId;
    });
    return selected || this.$select.options[0];
  }

  setSelected(target) {
    this.$select.selectedIndex = target.id;
    this.submit();
  }

  submit() {
    if (this.$form) {
      this.$form.submit();
    }
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.$el.classList.add("open");
    this.isOpen = true;
  }

  close() {
    this.$el.classList.remove("open");
    this.isOpen = false;
  }
}

export default SelectBox;

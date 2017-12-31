class SelectBox {
  constructor(el) {
    Object.assign(this, {
      $el: el
    });

    console.log("Select Box", this.$el);
  }
}

export default SelectBox;

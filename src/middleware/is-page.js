const pages = require("../config/pages");

module.exports = () => {
  return (req, res, next) => {
    const found = pages.find(p => p.slug === req.params.page);

    if (!found) {
      res
        .status(404)
        .render("404", { title: "Not Found" });

      return;
    }

    req.page = found;

    res.locals.isActive = (page) => {
      return page.slug === found.slug
        ? " active"
        : "";
    };

    res.locals.currentPage = found;

    next();
  };
};

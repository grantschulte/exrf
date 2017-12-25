const pages = require("../config/pages");
const app = require("../app");

module.exports = () => {
  return (req, res, next) => {
    const found = pages.find(p => p.slug === req.params.page);

    if (!found) {
      res.locals.currentPage = {
        name: "Not Found"
      };

      res
        .status(404)
        .render("404");

      return;
    }

    req.page = found;
    res.locals.currentPage = found;
    res.locals.isActive = (page) => {
      return page.slug === found.slug
        ? " active"
        : "";
    };

    next();
  };
};

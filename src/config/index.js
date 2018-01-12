const path = require("path");

const rootDir = process.cwd();

const dirs = {
  root: rootDir,
  public: path.join(rootDir, "public"),
  src: {
    root:     path.join(rootDir, "src"),
    views:    path.join(rootDir, "src", "views"),
    assets:   path.join(rootDir, "src", "assets")
  }
};

module.exports = {
  dirs
};

const path = require("path");

const port = process.env.NODE_ENV === "test"
  ? 8081
  : process.env.PORT || 8080;

const rootDir = process.cwd();

const dirs = {
  root: rootDir,
  client: {
    root: path.join(rootDir, "client"),
    build: path.join(rootDir, "client", "build"),
    src: path.join(rootDir, "client", "src"),
    public: path.join(rootDir, "client", "public")
  },
  server: {
    root: path.join(rootDir, "server")
  }
};

function mongoURI(env = process.env.NODE_ENV) {
  switch (env) {
    case "test":
      return `mongodb://localhost/exrf-test`;
      break;

    case "production":
      return process.env.MONGODB_URI;
      break;

    default:
      return `mongodb://localhost/exrf-dev`;
  }
}

module.exports = {
  dirs,
  port,
  mongoURI
};

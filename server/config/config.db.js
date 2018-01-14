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
  mongoURI
};

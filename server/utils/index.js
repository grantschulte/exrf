const isDev = process.env.NODE_ENV !== "production";
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  isDev,
  isProd
};

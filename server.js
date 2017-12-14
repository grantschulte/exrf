const app = require("./src/app");

app.listen(app.get("port"), () => {
  console.log("================================");
  console.log(`Listening on ${app.get("port")}`);
  console.log("================================");
});

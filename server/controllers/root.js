function root(req, res) {
  res.send({
    status: 200,
    message: "Welcome to the API"
  });
}

module.exports = root;

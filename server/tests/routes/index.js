process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../../server");
const { port } = require("../../config");

const rootUrl = `http://localhost:${port}`;
const expect = chai.expect;

chai.use(chaiHttp);

describe("GET: API root", function() {
  it("should return success and a message.", function(done) {
    chai
      .request(server)
      .get("/api")
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property("message");
        expect(res.body.message).to.equal("Welcome to the API");
        done();
      });
  });
});

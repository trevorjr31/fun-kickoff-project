const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app.js");

chai.should();
chai.use(chaiHttp);

describe("Logout Test", () => {
  describe("GET /logout", () => {
    it("Should successfully receive log out response", (done) => {
      chai
        .request(app.server)
        .get(`/auth/logout`)
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.eql("You have successfully logged out");
          done();
        });
    });
  });
});

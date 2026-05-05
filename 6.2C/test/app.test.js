const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const { add } = require("../calculator");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Calculation Function Tests", () => {
  it("should add two valid numbers", () => {
    expect(add(5, 3)).to.equal(8);
  });

  it("should handle edge case with zero", () => {
    expect(add(0, 7)).to.equal(7);
  });

  it("should throw error for invalid input", () => {
    expect(() => add("5", 3)).to.throw("Inputs must be numbers");
  });
});

describe("REST API Endpoint Tests", () => {
  it("should return result for valid API request", (done) => {
    chai.request(app)
      .get("/api/add?a=4&b=6")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.equal(10);
        done();
      });
  });

  it("should return error for invalid API request", (done) => {
    chai.request(app)
      .get("/api/add?a=abc&b=6")
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal("Invalid numbers");
        done();
      });
  });
});
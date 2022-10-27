const { expect } = require("chai");
const { check } = require("../utils");
const { user } = require("./userprofile.js");
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
chai.use(deepEqualInAnyOrder);
describe("TEST", () => {
  describe("Check AddTemplate Logic for Summary", () => {
    it("check to see if the test is running case 1", () => {
      const result = check("", 1);
      expect(result).to.equal("run here 1");
    });
  });

  it("check to see if the test is running case 2", () => {
    const result = check(null, 1);
    expect(result).to.equal("no run");
  });
  it("check to see if the test is running case 3", () => {
    const result = check(1, null);
    expect(result).to.equal("run here 3");
  });

  it("check to see if the test is running case 4", () => {
    const result = check(1, 1);
    expect(result).to.equal("run here 2");
  });

  describe("Set User Profiles", () => {
    it("check to see if user profile is set correctly", () => {
      const result = user(
        [
          { id: 1, text: "hi" },
          { id: 2, text: "2 here" },
        ],
        0
      );
      // const result = user(1, 0);
      expect(result).to.equal(null);
    });
    it("check to see if user profile is set correctly, case 2", () => {
      const result = user(
        [
          { id: 1, text: "hi" },
          { id: 2, text: "2 here" },
        ],
        1
      );
      expect(result).to.eql([
        { id: 1, text: "hi" },
        { id: 2, text: "2 here" },
      ]);
    });
    it("check to see if user profile is set correctly, case 3", () => {
      const result = user(
        [
          { id: 1, text: "hi" },
          { id: 2, text: "2 here" },
        ],
        2
      );
      expect(result).to.eql([
        { id: 1, text: "hi" },
        { id: 2, text: "2 here" },
      ]);
    });
  });
});

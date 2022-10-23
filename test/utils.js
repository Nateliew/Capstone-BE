const { expect } = require("chai");
const { check, handleChange } = require("../utils");

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
});

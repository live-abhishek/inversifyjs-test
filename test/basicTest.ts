import "mocha";
import { expect } from "chai";
import { Person } from "../src/index";

describe("Testing basic", () => {
  it("should create an object", function() {
    const person = new Person("masterchief");
    expect(person.name).to.be.equal("masterchief");
  });
});

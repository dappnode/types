import { expect } from "chai";
import { isEnsDomain } from "../src/utils/index.js";

describe("isEnsDomain", function () {
  it("should return true for a valid ENS domain", async () => {
    const validEnsDomains = [
      "example.eth",
      "subdomain.example.eth",
      "sub-domain.example.eth",
      "beacon-chain.prysm.dnp.dappnode.eth",
    ];

    for (const domain of validEnsDomains) {
      expect(isEnsDomain(domain)).to.be.true;
    }
  });

  it("should return false for an invalid ENS domain", async () => {
    const invalidEnsDomains = [
      "example.com",
      "subdomain.example.com",
      "sub-domain.example.com",
      "dnp.dappnode.com",
      "example",
      "",
      "example/.dnp.eth",
      "..dappnode.eth",
    ];

    for (const domain of invalidEnsDomains) {
      expect(isEnsDomain(domain)).to.be.false;
    }
  });
});

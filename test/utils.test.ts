import { expect } from "chai";
import { getImageTag } from "../src/utils/index.js";

describe("Utils > getImageTag", function () {
  it("should throw an error if version is not provided", () => {
    expect(() =>
      getImageTag({
        dnpName: "test",
        serviceName: "test",
        version: "",
      })
    ).to.throw("Version is required");
  });

  it("should throw an error if DAppNode package name is not provided", () => {
    expect(() =>
      getImageTag({
        dnpName: "",
        serviceName: "test",
        version: "1.0.0",
      })
    ).to.throw("DAppNode package name is required");
  });

  it("should throw an error if service name is not provided", () => {
    expect(() =>
      getImageTag({
        dnpName: "test",
        serviceName: "",
        version: "1.0.0",
      })
    ).to.throw("Service name is required");
  });

  it("should return the correct image tag for serviceName different than dnpName", () => {
    const result = getImageTag({
      dnpName: "test",
      serviceName: "service",
      version: "1.0.0",
    });
    expect(result).to.equal("service.test:1.0.0");
  });

  it("should return the correct image tag when serviceName equals dnpName for multi-service", () => {
    const result = getImageTag({
      dnpName: "test",
      serviceName: "test",
      version: "1.0.0",
    });
    expect(result).to.equal("test:1.0.0");
  });
});

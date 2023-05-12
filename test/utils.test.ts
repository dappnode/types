import { expect } from "chai";
import { getImageTag } from "../src/utils/index.js";

describe("Utils > getImageTag", function () {
  it("should return the correct tag for mono-service", function () {
    const result = getImageTag({
      dnpName: "myDnp",
      serviceName: "myService",
      version: "1.0.0",
      isMonoService: true,
    });
    expect(result).to.equal("myDnp:1.0.0");
  });

  it("should return the correct tag when service name is not provided", function () {
    const result = getImageTag({
      dnpName: "myDnp",
      serviceName: "",
      version: "1.0.0",
      isMonoService: false,
    });
    expect(result).to.equal("myDnp:1.0.0");
  });

  it("should return the correct tag when service name equals dnp name", function () {
    const result = getImageTag({
      dnpName: "myDnp",
      serviceName: "myDnp",
      version: "1.0.0",
      isMonoService: false,
    });
    expect(result).to.equal("myDnp:1.0.0");
  });

  it("should return the correct tag when service name is different from dnp name", function () {
    const result = getImageTag({
      dnpName: "myDnp",
      serviceName: "myService",
      version: "1.0.0",
      isMonoService: false,
    });
    expect(result).to.equal("myService.myDnp:1.0.0");
  });
});

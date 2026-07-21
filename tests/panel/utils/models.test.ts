import { describe, expect, it } from "vitest";
import { parseGatewayPrefix } from "../../../src/panel/utils/models";

describe("parseGatewayPrefix", () => {
  it("returns empty prefix and full id for bare model ids", () => {
    expect(parseGatewayPrefix("gpt-5.4-nano")).toEqual({
      prefix: "",
      nativeModelId: "gpt-5.4-nano",
    });
  });

  it("splits on the first slash", () => {
    expect(parseGatewayPrefix("openai/gpt-5.4")).toEqual({
      prefix: "openai",
      nativeModelId: "gpt-5.4",
    });
  });

  it("returns prefix without trailing slash", () => {
    expect(
      parseGatewayPrefix("google-ai-studio/gemini-3.5-flash"),
    ).toEqual({
      prefix: "google-ai-studio",
      nativeModelId: "gemini-3.5-flash",
    });
  });

  it("treats leading slash as no prefix", () => {
    expect(parseGatewayPrefix("/weird")).toEqual({
      prefix: "",
      nativeModelId: "/weird",
    });
  });

  it("only splits on the first slash", () => {
    expect(parseGatewayPrefix("openai/my/custom-id")).toEqual({
      prefix: "openai",
      nativeModelId: "my/custom-id",
    });
  });

  it("returns empty prefix for empty string", () => {
    expect(parseGatewayPrefix("")).toEqual({
      prefix: "",
      nativeModelId: "",
    });
  });
});

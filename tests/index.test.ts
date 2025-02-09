import { describe, it, expect } from "vitest";
import * as index from "../src/index.js";

describe("index.ts", () => {
  it("should export the default logger instance", () => {
    expect(index).toHaveProperty("default");
  });

  it("should ensure default export is an instance of LogMojiFy", () => {
    expect(index.default).toBeDefined();
  });
});

import { describe, it, expect, vi, beforeEach } from "vitest";
import { overrideConsole } from "../../src/core/consoleOverride.js";

describe("overrideConsole", () => {
  let originalLogSpy;
  let originalWarnSpy;
  let originalErrorSpy;
  let originalDebugSpy;

  beforeEach(() => {
    vi.restoreAllMocks();

    originalLogSpy = vi.spyOn(console, "log");
    originalWarnSpy = vi.spyOn(console, "warn");
    originalErrorSpy = vi.spyOn(console, "error");
    originalDebugSpy = vi.spyOn(console, "debug");

    overrideConsole();
  });

  it("should override console methods and call the original methods with formatted output", () => {
    console.log("test log");
    console.warn("test warn");
    console.error("test error");
    console.debug("test debug");

    expect(originalLogSpy).toHaveBeenCalled();
    expect(originalWarnSpy).toHaveBeenCalled();
    expect(originalErrorSpy).toHaveBeenCalled();
    expect(originalDebugSpy).toHaveBeenCalled();
  });

  it("should correctly format log messages", () => {
    console.log("test log");
    const logCall = originalLogSpy.mock.calls[0][0];
    expect(logCall).toMatch(/test log/);
  });

  it("should maintain original console functions as functions", () => {
    expect(typeof console.log).toBe("function");
  });
});

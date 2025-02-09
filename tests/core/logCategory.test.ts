import { describe, it, expect } from "vitest";
import { detectLogCategory } from "../../src/core/logCategory.js";

describe("detectLogCategory", () => {
  it("should return 'error' for messages containing 'error'", () => {
    expect(detectLogCategory("An error occurred")).toBe("error");
  });

  it("should return 'warn' for messages containing 'deprecated'", () => {
    expect(detectLogCategory("This feature is deprecated")).toBe("warn");
  });

  it("should return 'security' for messages containing 'unauthorized'", () => {
    expect(detectLogCategory("Unauthorized access detected")).toBe("security");
  });

  it("should return 'success' for messages containing 'completed'", () => {
    expect(detectLogCategory("Task completed successfully")).toBe("success");
  });

  it("should return 'debug' for messages containing 'trace'", () => {
    expect(detectLogCategory("This is a trace log")).toBe("debug");
  });

  it("should return 'network' for messages containing 'fetch'", () => {
    expect(detectLogCategory("Fetching data from API")).toBe("network");
  });

  it("should return 'db' for messages containing 'sql'", () => {
    expect(detectLogCategory("Executing SQL query")).toBe("db");
  });

  it("should return 'critical' for messages containing 'restart required'", () => {
    expect(detectLogCategory("System restart required")).toBe("critical");
  });

  it("should return 'analytics' for messages containing 'tracking'", () => {
    expect(detectLogCategory("User tracking enabled")).toBe("analytics");
  });

  it("should return 'event' for messages containing 'scheduled'", () => {
    expect(detectLogCategory("Scheduled task execution started")).toBe("event");
  });

  it("should return 'system' for messages containing 'boot'", () => {
    expect(detectLogCategory("System boot in progress")).toBe("system");
  });

  it("should default to 'info' for unknown messages", () => {
    expect(detectLogCategory("Hello, world!")).toBe("info");
  });

  it("should return customType if provided", () => {
    expect(detectLogCategory("This is an error", "debug")).toBe("debug");
  });

  it("should return 'info' for empty message", () => {
    expect(detectLogCategory("")).toBe("info");
  });

  it("should return 'info' for undefined message", () => {
    expect(detectLogCategory(undefined)).toBe("info");
  });

  it("should return 'info' for null message", () => {
    expect(detectLogCategory(null)).toBe("info");
  });

  it("should correctly categorize an array of messages", () => {
    expect(
      detectLogCategory(["System error occurred", "Unauthorized access"])
    ).toBe("error");
  });

  it("should return 'info' for an empty array", () => {
    expect(detectLogCategory([])).toBe("info");
  });

  it("should not falsely categorize partial word matches", () => {
    expect(detectLogCategory("This is a performative act")).toBe("info");
  });
});

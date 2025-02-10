import { describe, it, expect } from "vitest";
import { formatLog } from "../../src/core/logFormatter.js";
import { LogType } from "../../src/types/logTypes.js";

describe("formatLog", () => {
  it("should format a log with emoji and color", () => {
    const result = formatLog("info", ["Hello, world!"]);
    expect(result).toContain("🟠 Hello, world!");
  });

  it("should format an object as JSON", () => {
    const result = formatLog("info", [{ message: "Test" }]);
    expect(result).toContain(`{
  "message": "Test"
}`);
  });

  it("should format a log message with an emoji", () => {
    expect(formatLog("info", ["Test message"])).toMatch(/Test message/);
  });

  it("should handle objects in logs", () => {
    expect(formatLog("info", [{ key: "value" }])).toMatch(/"key": "value"/);
  });

  it("should handle unknown log types gracefully", () => {
    const result = formatLog("unknown_type" as LogType, ["Test message"]);
    expect(result).toContain("Test message");
    expect(result).not.toContain("💡");
  });
});

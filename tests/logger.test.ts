import { describe, it, expect, vi, beforeEach } from "vitest";
import { LogMojiFy } from "../src/logger.js";
import { defaultEmojis } from "../src/constants/emojis.js";
import { LogType } from "../src/types/logTypes.js";
import { overrideConsole } from "../src/core/consoleOverride.js";

vi.mock("../src/core/consoleOverride.js", () => ({
  overrideConsole: vi.fn(),
}));

describe("LogMojiFy", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with default emojis", () => {
    const logger = new LogMojiFy();
    expect(logger).toHaveProperty("emojis");
    expect(logger["emojis"]).toEqual(defaultEmojis);
  });

  it("should call overrideConsole in constructor", () => {
    new LogMojiFy();
    expect(overrideConsole).toHaveBeenCalled();
  });

  it("should allow setting custom emojis", () => {
    const logger = new LogMojiFy();
    const customEmojis: Partial<Record<LogType, string>> = {
      error: "🔥",
      warn: "⚠️",
    };

    logger.setCustomEmojis(customEmojis);

    expect(logger["emojis"].error).toBe("🔥");
    expect(logger["emojis"].warn).toBe("⚠️");
    expect(logger["emojis"].info).toBe(defaultEmojis.info);
  });

  it("should not remove existing emojis when setting custom ones", () => {
    const logger = new LogMojiFy();
    const customEmojis: Partial<Record<LogType, string>> = { debug: "🐛" };
    logger.setCustomEmojis(customEmojis);

    expect(logger["emojis"].debug).toBe("🐛");
    expect(logger["emojis"].error).toBe(defaultEmojis.error);
  });

  it("should override multiple emojis correctly", () => {
    const logger = new LogMojiFy();
    const customEmojis: Partial<Record<LogType, string>> = {
      warn: "⚠️",
      success: "✅",
      critical: "🚨",
    };
    logger.setCustomEmojis(customEmojis);

    expect(logger["emojis"].warn).toBe("⚠️");
    expect(logger["emojis"].success).toBe("✅");
    expect(logger["emojis"].critical).toBe("🚨");
  });

  it("should handle empty custom emoji objects gracefully", () => {
    const logger = new LogMojiFy();
    const beforeChange = { ...logger["emojis"] };
    logger.setCustomEmojis({});

    expect(logger["emojis"]).toEqual(beforeChange);
  });

  it("should merge custom emojis on multiple calls", () => {
    const logger = new LogMojiFy();
    // First update: override error emoji.
    logger.setCustomEmojis({ error: "🔥" });
    expect(logger["emojis"].error).toBe("🔥");

    // Second update: override warn emoji.
    logger.setCustomEmojis({ warn: "⚠️" });
    expect(logger["emojis"].error).toBe("🔥"); // previous change remains
    expect(logger["emojis"].warn).toBe("⚠️");
  });

  it("should not share custom emoji settings between instances", () => {
    const logger1 = new LogMojiFy();
    logger1.setCustomEmojis({ error: "🔥" });

    const logger2 = new LogMojiFy();
    expect(logger2["emojis"].error).toBe(defaultEmojis.error);
  });

  it("should create an independent copy of defaultEmojis", () => {
    const logger = new LogMojiFy();
    expect(logger["emojis"]).not.toBe(defaultEmojis);

    const originalErrorEmoji = defaultEmojis.error;
    // @ts-ignore – force a change for testing purposes.
    defaultEmojis.error = "modified";
    expect(logger["emojis"].error).toBe(originalErrorEmoji);
    defaultEmojis.error = originalErrorEmoji;
  });

  it("should allow setting an emoji to an empty string", () => {
    const logger = new LogMojiFy();
    logger.setCustomEmojis({ error: "" });
    expect(logger["emojis"].error).toBe("");
  });

  it("should call overrideConsole for every new instance", () => {
    new LogMojiFy();
    new LogMojiFy();
    expect(overrideConsole).toHaveBeenCalledTimes(2);
  });

  it("should not be affected by external modifications to the custom emoji object", () => {
    const logger = new LogMojiFy();
    const customEmojis = { warn: "⚠️" };
    logger.setCustomEmojis(customEmojis);

    customEmojis.warn = "changed";
    expect(logger["emojis"].warn).toBe("⚠️");
  });
});

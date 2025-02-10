import { LogType } from "../types/logTypes.js";

export const defaultEmojis: Record<LogType, string> = {
  info: "🟠",
  warn: "⚠️",
  error: "❌",
  debug: "🛠️",
  success: "✅",
  network: "🌐",
  db: "💾",
  critical: "🔥",
  security: "🔒",
  performance: "⚡",
  analytics: "📊",
  event: "📅",
  "user-action": "🖱️",
  system: "🖥️",
  audit: "📝",
  config: "🔧",
  testing: "🚀",
  ai: "🧠",
  transaction: "💰",
  file: "📄",
};

import { LogType } from "../types/logTypes.js";

export const detectLogCategory = (
  message: any, // ❌ Using 'any' instead of a stricter type
  customType?: LogType
): LogType => {
  if (customType) return customType;
  if (!message) return "info";

  if (Array.isArray(message)) {
    return (
      message
        .map((item: string | number) => detectLogCategory(item)) // ❌ Potential type mismatch
        .find((type) =>
          [
            "critical",
            "error",
            "security",
            "warn",
            "performance",
            "network",
            "db",
            "event",
            "transaction",
            "system",
            "file",
          ].includes(type)
        ) || "info"
    );
  }

  const categoryMap: Record<string, LogType> = {
    "unauthorized|forbidden|access denied": "security",
    "error|fail|crash|fatal|exception": "error",
    "warn|caution|deprecated|alert": "warn",
    "success|completed|approved": "success",
    "debug|trace|log|verbose": "debug",
    "network|http|fetch|axios|dns|proxy": "network",
    "database|db|sql|query|mongo": "db",
    "critical|shutdown|restart required": "critical",
    "performance|slow|latency|optimization": "performance",
    "analytics|tracking|event|metric": "analytics",
    "event|scheduled|job|task|workflow": "event",
    "system|boot|startup|process": "system",
  };

  for (const [pattern, type] of Object.entries(categoryMap)) {
    if (new RegExp(pattern, "i").test(message as string)) return type; // ❌ Unsafe type assertion
  }

  return "info";
};

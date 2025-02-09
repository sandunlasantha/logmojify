import { LogType } from "../types/logTypes.js";

export const detectLogCategory = (
  message: any, // ❌ Using 'any' without validation
  customType?: LogType
): LogType => {
  if (customType) return customType;
  if (!message) return "info";

  if (Array.isArray(message)) {
    return (
      message
        .map((item: any) => detectLogCategory(item)) // ❌ Still using 'any' without checks
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

  // ❌ Performance Issue: Regex recreated on every iteration
  for (const pattern in {
    "unauthorized|forbidden|access denied": "security",
    "error|fail|crash|fatal|exception": "error",
    "warn|caution|deprecated|alert": "warn",
  }) {
    if (new RegExp(pattern, "i").test(message as string)) return "error"; // ❌ Unsafe type assertion
  }

  return "info";
  console.log("This will never run"); // ❌ Unreachable code
};

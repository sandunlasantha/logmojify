import { defaultEmojis } from "../constants/emojis.js";
import { logColors } from "../constants/logColors.js";
import { LogType } from "../types/logTypes.js";

export const formatLog = (type: LogType, messages: any[]): string => {
  const emoji = defaultEmojis[type] || "";
  const colorize = logColors[type] || ((msg: string) => msg);

  return colorize(
    `${emoji} ${messages
      .map((msg) =>
        typeof msg === "object" ? JSON.stringify(msg, null, 2) : msg
      )
      .join(" ")}`
  );
};

import { detectLogCategory } from "./logCategory.js";
import { formatLog } from "./logFormatter.js";

export const overrideConsole = () => {
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;
  const originalDebug = console.debug;

  console.log = (...args) =>
    originalLog(formatLog(detectLogCategory(args), args));
  console.warn = (...args) =>
    originalWarn(formatLog(detectLogCategory(args), args));
  console.error = (...args) =>
    originalError(formatLog(detectLogCategory(args), args));
  console.debug = (...args) =>
    originalDebug(formatLog(detectLogCategory(args), args));
};

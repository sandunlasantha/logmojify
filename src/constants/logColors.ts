import chalk from "chalk";
import { LogType } from "../types/logTypes.js";

export const logColors: Record<LogType, (text: string) => string> = {
  // Main logs: with a background color
  info: chalk.bgHex("#FFA500").black,
  warn: chalk.bgYellow.black,
  error: chalk.bgRed.white.bold,
  debug: chalk.bgMagenta.black,
  success: chalk.bgGreen.black,

  // Other logs: colored text only (no background)
  network: chalk.cyan,
  db: chalk.gray,
  critical: chalk.red.bold,
  security: chalk.blueBright,
  performance: chalk.yellow,
  analytics: chalk.cyan,
  event: chalk.greenBright,
  "user-action": chalk.magenta,
  system: chalk.blueBright,
  audit: chalk.white,
  config: chalk.gray,
  testing: chalk.blue,
  ai: chalk.green,
  transaction: chalk.green,
  file: chalk.yellowBright,
};

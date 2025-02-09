import chalk from "chalk";
import { LogType } from "../types/logTypes.js";

export const logColors: Record<LogType, (text: string) => string> = {
  info: chalk.blue,
  warn: chalk.yellow,
  error: chalk.red.bold,
  debug: chalk.magenta,
  success: chalk.green,
  network: chalk.cyan,
  db: chalk.gray,
  critical: chalk.bgRed.white.bold,
  security: chalk.bgBlueBright.black,
  performance: chalk.bgYellow.black,
  analytics: chalk.bgCyan.black,
  event: chalk.bgGreenBright.black,
  "user-action": chalk.bgMagenta.white,
  system: chalk.blueBright,
  audit: chalk.bgWhite.black,
  config: chalk.bgGray.white,
  testing: chalk.bgBlue.white,
  ai: chalk.bgBlackBright.green,
  transaction: chalk.bgGreen.white,
  file: chalk.bgYellowBright.black,
};

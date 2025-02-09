import { defaultEmojis } from "./constants/emojis.js";
import { overrideConsole } from "./core/consoleOverride.js";
import { LogType } from "./types/logTypes.js";

export class LogMojiFy {
  private emojis: Record<LogType, string> = { ...defaultEmojis };

  constructor() {
    overrideConsole();
  }

  public setCustomEmojis(customEmojis: Partial<Record<LogType, string>>) {
    this.emojis = { ...this.emojis, ...customEmojis };
  }
}
console.log('AI Review Test');
console.log('AI Review Test');

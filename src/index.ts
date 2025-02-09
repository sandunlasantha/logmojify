import { LogMojiFy } from "./logger.js";

const logger = new LogMojiFy();
(globalThis as any).logmojify = logger;

export default logger;

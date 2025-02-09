import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: ["dist", "logmojify/dist/**", "vitest.config.ts"],
    },
  },
});

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      include: ["tests/**/*.test.ts"],
      exclude: ["dist", "logmojify/dist/**", "vitest.config.ts"],
    },
  },
});

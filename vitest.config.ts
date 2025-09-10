/// <reference types="vitest" />
import { defineConfig, type ViteUserConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["*.spec.ts"],
    testTimeout: 100000,
  }
} as ViteUserConfig);

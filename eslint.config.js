/* eslint-disable import/no-extraneous-dependencies */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tpluscode from "@tpluscode/eslint-config/js.js";
import openwc from "@open-wc/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";
import { includeIgnoreFile } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const compat = new FlatCompat({
  baseDirectory: path.dirname(__filename),
});

export default defineConfig([
  globalIgnores(["**/*.d.ts", "eslint.config.js"]),
  includeIgnoreFile(
    fileURLToPath(new URL(".gitignore", import.meta.url)),
    "Imported .gitignore patterns"
  ),
  ...tpluscode,
  openwc,

  // Browser-specific override for the app package
  {
    files: ["packages/app/**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      // Enable browser globals like `window`, `localStorage`, `CustomEvent`, etc.
      globals: globals.browser,
    },
    rules: {
      // Disable Node built-ins rule in browser code
      "n/no-unsupported-features/node-builtins": "off",
    },
  },
  {
    rules: {
      "import-x/no-unresolved": ["error", { ignore: ["\\?raw$"] }],
    },
  },
  {
    extends: compat.extends("eslint-config-prettier"),

    rules: {
      "class-methods-use-this": "warn",
    },
  },
]);

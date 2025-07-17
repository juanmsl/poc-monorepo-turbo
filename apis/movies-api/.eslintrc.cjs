/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@studio/eslint-config/library.js", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

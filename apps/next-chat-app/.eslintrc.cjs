const defaultConfig = require("@crutchcorn/config/eslint-preset");

module.exports = {
  root: true,
  ...defaultConfig,
  extends: [...defaultConfig.extends, "next/core-web-vitals"],
};

module.exports = {
  extends: [
    "plugin:jest/recommended",
    "@react-native",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier"],
  rules: {
    "no-extra-boolean-cast": "off",
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-type": "off",
  },
};

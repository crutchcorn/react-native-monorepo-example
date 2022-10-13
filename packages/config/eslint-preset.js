module.exports = {
  extends: [
    "@react-native-community",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier"],
  rules: {
    "no-extra-boolean-cast": "off",
  },
};

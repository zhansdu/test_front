/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  plugins: [
    "vue"
  ],
  rules: {
    "key-spacing": ["error", { "mode": "strict" }],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "indent": ["error", 2],
    "no-multi-spaces": ["error"],
    "object-curly-spacing": ["error", "always"],

    "vue/require-v-for-key": "off",
    "vue/no-v-html": "off",
    "vue/prop-name-casing": "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
    "no-tabs": 0,
    "vue/attribute-hyphenation": 0
  }
};

module.exports = {
  root: true,
  env: {
    node: false,
    browser: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser:  '@typescript-eslint/parser',
    ecmaVersion: 2022,
    sourceType: "module",
    project: ["./tsconfig.json"],
    extraFileExtensions: [".vue"]
  },
  plugins: ["eslint-plugin-prettier", "import", "vue"],
  extends: [
    "@vue/eslint-config-typescript",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "plugin:vue/vue3-essential",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
    "no-duplicate-imports": "off",
    "no-irregular-whitespace": "off",
    "no-undef": "off",
    "no-useless-escape": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-async-promise-executor": "error",
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": "warn",
    "import/no-default-export": "warn",
    "import/order": [
      "warn",
      {
        pathGroups: [
          {
            pattern: "*.{png,jpg,jpeg,gif,svg,webp}",
            patternOptions: { matchBase: true },
            group: "index",
            position: "after"
          }
        ],
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "ignore"
      }
    ],
    "vue/multi-word-component-names": "off",
    eqeqeq: "error"

  }
};

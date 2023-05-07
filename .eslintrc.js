module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "prettier",
    "airbnb",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    quotes: [2, "double", { avoidEscape: true }],
    "react/self-closing-comp": [
      "error",
      {
        component: false,
        html: false,
      },
    ],
    "linebreak-style": 0,
    "react/prop-types": "off",
    "react/jsx-no-bind": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "object-curly-newline": "off",
    "no-underscore-dangle": "off",
    "prefer-promise-reject-errors": "off",
    "class-methods-use-this": "off",
    "no-undef": "off",
    "no-unused-expressions": "off",
    "react/no-array-index-key": "off",
    "arrow-body-style": "off",
    "comma-dangle": "off",
    "operator-linebreak": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react/destructuring-assignment": "off",
    "no-console": "off",
    "no-shadow": "off",
    "eol-last": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "space-before-blocks": "off",
    "import/prefer-default-export": "off",
    "function-paren-newline": "off",
    "implicit-arrow-linebreak": "off",
    "consistent-return": "off",
    "camelcase": "off",
    "quote-props": "off",
    "react/no-unknown-property": "off",
    "no-useless-escape": "off",
    "max-len": "off",
    "no-new": "off",
    "react/jsx-boolean-value": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-closing-tag-location": "off",
    "import/no-duplicates": "off"
  },
};

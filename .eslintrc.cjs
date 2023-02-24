module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    "linebreak-style": "off",
    "no-debugger": "off",
    'camelcase': 'off',
    "no-plusplus": 'off',
    '@typescript-eslint/camelcase': 'off',
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
    "import/extensions": ["error", "ignorePackages", {
      "js": "never",
      "jsx": "never",
      "ts": "never",
      "tsx": "never",
      "mjs": "never"
    }],
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": "off",
    "react/require-default-props": "off",
    "react/no-array-index-key": "off",
    "jsx-a11y/no-static-element-interactions": "off"
  },
}
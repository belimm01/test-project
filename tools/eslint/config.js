const importOrder = require('./rule-options/import.order');
const vue = require('./rule-options/vue');

module.exports = {
  extends: [
    'plugin:vue/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'import',
  ],
  rules: Object.assign(vue, {
    'no-console': "off",
    'no-undef': 2,
    'no-unreachable': 2,
    'no-unused-vars': 2,
    'semi': [2, 'always'],
    'no-debugger': 2,
    'import/default': 2,
    'import/extensions': [2, {
      'js': 'never',
      'vue': 'always',
      'json': 'always',
      'scss': 'always',
    }],
    'indent': ['error', 2],
    'import/group-exports': 2,
    'import/no-self-import': 2,
    'import/no-cycle': [2, { maxDepth: 1 }],
    'import/named': 2,
    'import/newline-after-import': 2,
    'import/no-default-export': 2,
    'import/export': 2,
    'import/exports-last': 2,
    'import/order': [2, importOrder],
    'block-spacing': [2, 'always'],
    'arrow-spacing': [2, { before: true, after: true }],
    'keyword-spacing': 2,
    'spaced-comment': 2,
    'no-multi-spaces': 2,
    'array-bracket-spacing': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'quotes': [2, "single", { avoidEscape: true, allowTemplateLiterals: true }],
    'comma-dangle': [2, "only-multiline"],
    'arrow-parens': [2, "always"],
  }),
};

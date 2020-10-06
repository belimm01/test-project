module.exports = {
  'vue/require-v-for-key': 1,
  'vue/attributes-order': 2,
  'vue/require-prop-types': 2,
  'vue/no-confusing-v-for-v-if': 2,
  'vue/no-v-html': 1,
  'vue/multiline-html-element-content-newline': 0,
  'vue/singleline-html-element-content-newline': 0,
  'vue/html-indent': ['error', 2, {
    'attribute': 2,
    'closeBracket': 0,
    'alignAttributesVertically': true,
    'ignores': []
  }],
  'vue/html-closing-bracket-newline': ['error', {
    'singleline': 'never',
    'multiline': 'never'
  }],
  'vue/max-attributes-per-line': [2, {
    'singleline': 1,
  }]
};

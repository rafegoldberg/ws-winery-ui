module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/prettier'
  ],
  rules: {
    'no-console': 1,
    'no-debugger': 'off',
    'vue/html-quotes': [
      'error',
      'double'
    ],
    'vue/attribute-hyphenation': [
      'error',
      'always'
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
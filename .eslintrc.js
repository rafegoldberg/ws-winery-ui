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
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-end-tags': 'error',
    'vue/html-indent': [
      'error',
      2
    ],
    'vue/html-self-closing': 'error',
    'vue/html-quotes': [
      'error',
      'double'
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
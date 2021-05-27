module.exports = {
  env: {
    node: true,
    es6: true
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': [1, 'never'],
    'eol-last': [1, 'always'],
    'no-console': ['error', { 'allow': ['warn', 'error', 'info'] }],
    'prefer-destructuring': ['error', { 'object': true, 'array': false }]
  }
}

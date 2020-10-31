module.exports = {
  "extends": [
    "prettier",
    "prettier/react",
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'eol-last': ['error', 'always'],
    'indent': ['error', 2, {SwitchCase: 1, MemberExpression: 1}],
    'max-len': ['error', {code: 100, ignorePattern: '^import'}],
  }
}

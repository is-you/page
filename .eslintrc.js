module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'rules': {
    'no-mixed-spaces-and-tabs': 0,
    'space-before-function-paren': 0,
    'skipBlankLines': 0,
    'linebreak-style': 0,
    'camelcase': 'off',
    'max-len': ['error', {'code': 120}],
    'indent': [0, 'tab'],
    'no-tabs': 0,
  },
};

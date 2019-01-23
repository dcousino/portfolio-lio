module.exports = {
  extends: ['airbnb', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'linebreak-style': 0,
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
};

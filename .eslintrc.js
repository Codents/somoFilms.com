module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['prettier', 'plugin:vue/recommended', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': 0,
    'vue/html-closing-bracket-newline': 0,
    'no-shadow': 0,
    'arrow-parens': 0,
    'object-shorthand': 0,
    'func-names': 0,
    'import/prefer-default-export': 0,
    'object-curly-newline': 0,
    'import/no-extraneous-dependencies': 0,
    'no-restricted-globals': 0,
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['currState', 'RAParam', 'scope']
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};

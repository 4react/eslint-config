module.exports = {
  extends: [
    'airbnb-base'
  ],
  rules: {
    'brace-style': 'off',
    'camelcase': 'off',
    'class-methods-use-this': ['off'],
    'func-call-spacing': 'off',
    'indent': ['off'],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-empty-function': 'off',
    'no-empty-interface': 'off',
    'no-extra-parens': 'off',
    'no-underscore-dangle': ['error', {
      'allow': ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
      'allowAfterThis': false,
      'allowAfterSuper': false,
      'enforceInMethodNames': true
    }],
    'quotes': 'off',
    'require-await': 'off',
    'semi': ['warn', 'never'],
  }
}

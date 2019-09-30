module.exports = {
  rules: {
    'semi': ['warn', 'never'],
    'indent': ['warn', 2],
    'no-underscore-dangle': ['error', {
      'allow': ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
      'allowAfterThis': false,
      'allowAfterSuper': false,
      'enforceInMethodNames': true
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'class-methods-use-this': ['off']
  }
}

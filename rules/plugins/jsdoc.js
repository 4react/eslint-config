/* global module */

module.exports = {
  plugins: [
    'jsdoc'
  ],
  rules: {
    'jsdoc/check-alignment': 'warn',
    'jsdoc/check-examples': ['error', {
      'captionRequired': true,
      'paddedIndent': 2
    }],
    'jsdoc/check-indentation': 'off',
    'jsdoc/check-param-names': 'warn',
    'jsdoc/check-syntax': 'warn',
    'jsdoc/check-tag-names': ['warn', {
      'definedTags': ['test']
    }],
    'jsdoc/check-types': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/match-description': 'off',
    'jsdoc/newline-after-description': ['warn', 'always'],
    'jsdoc/no-types': 'off',
    'jsdoc/no-undefined-types': 'warn',
    'jsdoc/require-description': 'warn',
    'jsdoc/require-description-complete-sentence': 'warn',
    'jsdoc/require-example': 'off',
    'jsdoc/require-hyphen-before-param-description': ['error', 'never'],
    'jsdoc/require-jsdoc': ['warn', {
      'require': {
        'ArrowFunctionExpression': true,
        'ClassDeclaration': true,
        'ClassExpression': true,
        'FunctionDeclaration': true,
        'MethodDefinition': false
      }
    }],
    'jsdoc/require-param': 'warn',
    'jsdoc/require-param-description': 'warn',
    'jsdoc/require-param-name': 'warn',
    'jsdoc/require-param-type': 'warn',
    'jsdoc/require-returns': 'warn',
    'jsdoc/require-returns-check': 'warn',
    'jsdoc/require-returns-description': 'warn',
    'jsdoc/require-returns-type': 'warn',
    'jsdoc/valid-types': 'error'
  }
}

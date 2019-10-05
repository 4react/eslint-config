/* global module */

module.exports = {
  plugins: [
    'jsdoc'
  ],
  rules: {
    'jsdoc/check-alignment': 'warn',
    'jsdoc/check-examples': ['warn', {
      'captionRequired': true,
      'paddedIndent': 2
    }],
    'jsdoc/check-indentation': 'warn',
    'jsdoc/check-param-names': 'warn',
    'jsdoc/check-syntax': 'warn',
    'jsdoc/check-tag-names': 'warn',
    'jsdoc/check-types': 'off',
    'jsdoc/implements-on-classes': 'off',
    'jsdoc/match-description': 'off',
    'jsdoc/newline-after-description': 'off',
    'jsdoc/no-types': 'warn',
    'jsdoc/no-undefined-types': 'warn',
    'jsdoc/require-description': 'warn',
    'jsdoc/require-description-complete-sentence': 'warn',
    'jsdoc/require-example': 'off',
    'jsdoc/require-hyphen-before-param-description': ['warn', 'never'],
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'warn',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-param-name': 'warn',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns': 'warn',
    'jsdoc/require-returns-check': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/valid-types': 'error'
  }
}

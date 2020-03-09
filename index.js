/* global module */

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.json']
      }
    }
  },
  globals: {
    document: true,
    window: true
  },
  extends: [
    './rules/base/best-practises.js',
    './rules/base/errors.js',
    './rules/base/es6.js',
    './rules/base/node.js',
    './rules/base/strict.js',
    './rules/base/style.js',
    './rules/base/variables.js',
    './rules/plugins/import',
    './rules/plugins/jsdoc',
    './rules/plugins/react'
  ]
}

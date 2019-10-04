/* global module */

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json'
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.ts', '.tsx', '.json']
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
    './rules/plugins/react',
    './rules/plugins/typescript'
  ]
}

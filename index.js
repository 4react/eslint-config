import baseRules from './rules/base'
import importRules from './rules/import'
import typescriptRules from './rules/typescript'
import reactRules from './rules/react'
import jsdocRules from './rules/jsdoc'

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.json"
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.json']
      }
    }
  },
  globals: {
    document: true,
    window: true
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
    'react-hooks',
    'jsdoc'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    ...baseRules,
    ...importRules,
    ...typescriptRules,
    ...reactRules,
    ...jsdocRules
  }
};

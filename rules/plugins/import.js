/* global module */

module.exports = {
  plugins: [
    'import'
  ],
  rules: {
    'import/default': 'error',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': ['warn', 'never'],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': 'off',
    'import/newline-after-import': 'warn',
    'import/no-absolute-path': 'off',
    'import/no-amd': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/no-commonjs': 'off',
    'import/no-cycle': 'error',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': ['error', {
      'ignore': ['\\.storybook']
    }],
    'import/no-unused-modules': ['warn', {
      missingExports: false,
      unusedExports: true,
      src: ['*']
    }],
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'off',
    'import/order': ['warn', {
      'groups': ['builtin', 'external', 'internal', 'index', 'sibling', 'parent'],
      'newlines-between': 'never'
    }],
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off',
    'dynamic-import-chunkname': 'off'
  }
}

/* global module */

module.exports = {
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': ['error', 'always'],
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-prop-types': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-typos': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': ['error', {
      'ignore': ['data-cy']
    }],
    'react/no-unsafe': 'warn',
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'off',
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': ['error', {
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        'getters',
        'setters',
        'instance-methods',
        'everything-else',
        '/^on.+$/',
        '/^render.+$/',
        'render'
      ]
    }],
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': ['error', 'always'],
    'react/static-property-placement': ['error', 'static public field'],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    'react/jsx-boolean-value': 'off',
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-newline': ['error', {
      multiline: 'consistent',
      singleline: 'consistent'
    }],
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', 'tsx'] }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-handler-names': ['error', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on'
    }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': ['error', { 'checkFragmentShorthand': true }],
    'react/jsx-max-depth': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: false
    }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    'react/jsx-no-undef': 'error',
    // 'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-curly-brace-presence': ['error', { children: 'never' }],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true
    }],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-space-before-closing': ['warn', 'always'],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off'
  }
}

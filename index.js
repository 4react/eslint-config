module.exports = {
  extends: [
    './rules/javascript',
    './rules/import',
    './rules/react'
  ].map(require.resolve),
  rules: {}
};

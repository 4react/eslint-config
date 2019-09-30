module.exports = {
  extends: [
    './rules/typescript',
    './rules/import',
    './rules/react'
  ].map(require.resolve),
  rules: {}
};

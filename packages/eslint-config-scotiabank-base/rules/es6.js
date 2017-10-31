module.exports = {
  rules: {
    // Only require parenthesis around parameters if there is more than one parameter,
    // even for block body arrow functions
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }]
  }
};
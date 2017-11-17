module.exports = {
  rules: {
    // Do not enforce new line at the end of file
    // https://eslint.org/docs/rules/eol-last
    'eol-last': 'off',

    // Disallow dangling commas
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'never'],

    // Do not enforce against ++/--
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // Enforce a max line length of 200 characters
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', 200, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],

    // Enforce consistent usage of linebreaks between parenthesis
    // Note: 'multiline' (default) not compatible with single JSX parameter
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['error', 'consistent']
  }
};
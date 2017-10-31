module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    // Disable 'use strict' rule, as babel automatically inserts it
    'eslint-config-airbnb-base/rules/strict',

    // Scotiabank Specific Rules
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/style',
    './rules/variables'
  ].map(require.resolve)
};
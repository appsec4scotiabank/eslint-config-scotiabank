module.exports = {
  rules: {
    // Allow the importing of devDependencies and peerDependencies in all files
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: true
    }]
  }
};
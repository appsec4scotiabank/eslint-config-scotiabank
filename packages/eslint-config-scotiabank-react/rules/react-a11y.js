module.exports = {
  rules: {
    // Ensure <a> and <Link> tags are valid (require 'href' or 'to')
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton']
    }]
  }
};
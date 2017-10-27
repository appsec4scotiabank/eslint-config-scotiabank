# eslint-config-scotiabank
[![CircleCI Status](https://circleci.com/gh/scotiabank/eslint-config-scotiabank.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/scotiabank/eslint-config-scotiabank)

This package provides Scotiabank's default ESLint configuration for projects. It includes additional rulesets specifically for React.

It extends the [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) configuration.

## Usage

### Installation
To install:
```bash
yarn add -D eslint-config-scotiabank@latest
```

This package relies on `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y` as peer dependencies.

Please ensure they are installed as well:
```bash
yarn info eslint-config-scotiabank@latest peerDependencies
```

### Configuration
Update your .eslintrc to include:
```json
{
  "extends": "scotiabank/react"
}
```

If your project does not use React, the base configuration can also be used:
```json
{
  "extends": "scotiabank"
}
```

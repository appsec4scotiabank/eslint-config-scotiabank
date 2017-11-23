# eslint-config-scotiabank-react
Provides an ESLint configuration for Scotiabank React projects.

The [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) configuration is extended with additional Scotiabank-recommended rulesets.

## Usage

### Installation
To install:
```bash
yarn add -D @scotia/eslint-config-scotiabank-react@latest
```

This package relies on `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y` as peer dependencies.

Please ensure they are installed as well:
```bash
npm info @scotia/eslint-config-scotiabank-react@latest peerDependencies
```

### Configuration
Update your .eslintrc to include:
```json
{
  "extends": "@scotia/eslint-config-scotiabank-react"
}
```

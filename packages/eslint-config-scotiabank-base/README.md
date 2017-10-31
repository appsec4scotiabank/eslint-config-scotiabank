# eslint-config-scotiabank-base
Provides the base ESLint configuration for Scotiabank projects.

The [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) configuration is extended with additional Scotiabank-recommended rulesets.

## Usage

### Installation
To install:
```bash
yarn add -D @scotia/eslint-config-scotiabank-base@latest
```

This package relies on `eslint` and `eslint-plugin-import` as peer dependencies.

Please ensure they are installed as well:
```bash
yarn info @scotia/eslint-config-scotiabank-base@latest peerDependencies
```

### Configuration
Update your .eslintrc to include:
```json
{
  "extends": "@scotia/eslint-config-scotiabank-base"
}
```

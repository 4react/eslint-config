# @zanomate/eslint-config
Provides ESlint configuration for React projects.
> **NOTE**: this configuration requires **@typescript-eslint/parser** as ESlint parser

## Usage
Import package as devDependency
```
npm i -D @zanomate/eslint-config
```

Add configuration to `.eslintrc`
```json
{
  "parser": "@typescript-eslint/parser",
  "extends": "@zanomate"
}
```

## Configurations
`@zanomate` configuration is based on these plugins:
 - **`@typescript-eslint/eslint-plugin`**
 - **`eslint-plugin-import`**
 - **`eslint-plugin-react`**
 - **`eslint-plugin-react-hooks`**
 - **`eslint-plugin-jsdoc`**
 

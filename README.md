# @zanomate/eslint-config
Provides ESlint configuration for React projects.

## Usage
Import package as devDependency
```
npm i -D @zanomate/eslint-config
```

Add configuration to `.eslintrc`
```json
{
  "extends": [
    "zanomate/js",
    "zanomate/jsdoc"
  ]
}
```

## Configurations
You can import one or more of the following configurations:

### React (JavaScript)
`@zanomate/js` is a configuration for JavaScript projects, based on:
 - **`eslint`**
 - **`eslint-plugin-import`**
 - **`eslint-plugin-react`**
 - **`eslint-plugin-react-hooks`**
> **NOTE**: this configuration requires **eslint-parser** as code parser

### React (TypeScript)
`@zanomate/ts` is a configuration for TypeScript projects, based on:
 - **`@typescript-eslint/eslint-plugin`**
 - **`eslint-plugin-import`**
 - **`eslint-plugin-react`**
 - **`eslint-plugin-react-hooks`**
> **NOTE**: this configuration requires **@typescript-eslint/parser** as code parser

### JSDoc
`@zanomate/jsdoc` is a configuration for JSDoc, based on:
- **`eslint-plugin-jsdoc`**

## Examples

### React (with hooks) + JSDoc
```json
{
  "parser": "eslint-parser",
  "config": [
    "zanomate",
    "zanomate/jsdoc"
  ]
}
```

### TypeScript + React (with hooks) + JSDoc
```json
{
  "parser": "@typescript-eslint/parser",
  "config": [
    "zanomate/ts",
    "zanomate/jsdoc"
  ]
}
```

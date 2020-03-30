# @4react / eslint-config
**ESlint** configuration for **React** projects. Based on:
 - **`@typescript-eslint/eslint-plugin`**
 - **`eslint-plugin-import`**
 - **`eslint-plugin-react`**
 - **`eslint-plugin-react-hooks`**
 - **`eslint-plugin-jsdoc`**

## Usage

Import package as devDependency
```
npm i -D @4react/eslint-config
```

Extends configuration in `.eslintrc`:
#### with **JavaScript**
```json
{
  "extends": "@4react"
}
```

#### with **TypeScript**
```json
{
  "extends": "@4react/eslint-config/typescript"
}
```

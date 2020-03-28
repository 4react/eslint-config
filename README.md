# @zanomate/eslint-config
**ESlint** configuration for **React** projects. Based on:
 - **`@typescript-eslint/eslint-plugin`**
 - **`eslint-plugin-import`**
 - **`eslint-plugin-react`**
 - **`eslint-plugin-react-hooks`**
 - **`eslint-plugin-jsdoc`**

## Usage

Import package as devDependency
```
npm i -D @zanomate/eslint-config
```

Extends configuration in `.eslintrc`:
#### with **JavaScript**
```json
{
  "extends": "@zanomate"
}
```

#### with **TypeScript**
```json
{
  "extends": "@zanomate/eslint-config/typescript"
}
```

<div align="center">

# Plop Files

[Plop](https://plopjs.com/) templates for javascript, typescript and react.

</div>

Plop is a CLI tool for generating code from templates for a faster development
workflow. This project is a common set up templates so I can keep things
consistent and speed up development when I am woking on personal projects.

## Basic usage

This is an example for a basic `plopfile.js` in the root of your project

```js
const reactComponent = require("@adeattwood/plop-files/react-component-ts");
const reactDir = "./src";

module.exports = function main(plop) {
  reactComponent(plop, { componentsDir: `./${reactDir}/components` });
};
```

## Templates

A list of all the templates available along with all the files created and
options you can use to customise the templates

### React typescript component

A react component in typescript with a test and scss module for styling

#### Files created

- `/{{group}}/{{name}}.tsx`
- `/{{group}}/{{name}}.test.tsx`
- `/{{group}}/{{name}}.module.scss`

#### Options

| Option          | Description                                               |
| --------------- | --------------------------------------------------------- |
| `componentsDir` | The directory where all of your component will be created |

### React javascript component

A react component in javascript with a test and scss module for styling

#### Files created

- `/{{group}}/{{name}}.{js,jsx}`
- `/{{group}}/{{name}}.test.{js,jsx}`
- `/{{group}}/{{name}}.module.scss`

#### Options

| Option          | Description                                                                        |
| --------------- | ---------------------------------------------------------------------------------- |
| `componentsDir` | The directory where all of your component will be created                          |
| `fileExtension` | The file extension that will be used in the javascript files. The default is `jsx` |

### React typescript context

A react context file in typescript

#### Files created

- `/{{name}}.tsx`

#### Options

| Option       | Description                                              |
| ------------ | -------------------------------------------------------- |
| `contextDir` | The directory where all of your contexts will be created |

### React javascript context

A react context file in javascript

#### Files created

- `/{{name}}.{js,jsx}`

#### Options

| Option          | Description                                                                        |
| --------------- | ---------------------------------------------------------------------------------- |
| `contextDir`    | The directory where all of your contexts will be created                           |
| `fileExtension` | The file extension that will be used in the javascript files. The default is `jsx` |

### React javascript hook

A react hook file in javascript

#### Files created

- `/use-{{name}}.js`

#### Options

| Option     | Description                                           |
| ---------- | ----------------------------------------------------- |
| `hooksDir` | The directory where all of your hooks will be created |

### React typescript hook

A react hook file in typescript

#### Files created

- `/use-{{name}}.ts`

#### Options

| Option     | Description                                           |
| ---------- | ----------------------------------------------------- |
| `hooksDir` | The directory where all of your hooks will be created |

### Next JS Page

A Next JS page in typescript with test files and scss module styles file. This creates pages with a `.pages.ts` extension and requests the `pageExtensions` prop to be changed in the `next.config.js` so you can keep pages files and test files together.

```js
...
pageExtensions: ['page.tsx', 'page.ts'],
...
```

#### Files created

- `/{{path}}/{{name}}.page.tsx`
- `/{{path}}/{{name}}.test.tsx`
- `/{{path}}/{{name}}.module.scss`

#### Options

| Option     | Description                                           |
| ---------- | ----------------------------------------------------- |
| `pagesDir` | The directory where all of your pages will be created |

# scss-bem-example-for-studying

## Let's make scss project !

### 1. Command for installing

```bash
#1: create package.json
npm init

#2: install node-sass
npm install node-sass --save-dev
```

### 2. Edit package.json

Insert the below code for running "node-sass" to the "script" value.  
`"start": "node-sass -w --output-style expanded scss/style.scss css/style.css"`

```json
{
  ...,
  "scripts": {
    ...,
    "start": "node-sass -w --output-style expanded scss/style.scss css/style.css"
  },
  ...
}
```

> `node-sass [options] <input> [output]`

[quote source](https://www.npmjs.com/package/node-sass) (node-sass usage)

### 3. Run to command

```bash
npm run start
```

#### Optional

Run to code for "node-sass" by javascript

```bash
node compile.js
```

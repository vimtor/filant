<div align="center">
   <h1 align="center">babel-plugin-filant</h1>
   <p align="center">Integrate <a href="https://github.com/pocket-apps/filant">filant</a> browser extension with React.js/JSX projects</p>
</div>

## 📦 Setup

Install the babel plugin alongside you usual babel dependencies.

```shell
npm install --save-dev babel-plugin-filant
```

Then simply add it to your `.babelrc` config file:

```json5
{
  presets: ['@babel/preset-react'],
  // If using React.js
  plugins: ['babel-plugin-filant'],
}
```

That's it, you don't need to do anything else, now install the
[browser extension](https://github.com/pocket-apps/filant) and follow from there.

<div align="center">
   <h1 align="center">filant</h1>
   <p align="center">The tool for working on large frontend code bases</p>
</div>

## 🧠 Why

At some moment in your developer journey you will have encountered the following situation:

1. You are working in a codebase that is large or is not well organized
2. You have to fix a bug located in a section of your application. Let's say a `Download` button does not work properly
3. You don't have any idea where the file that contains that button is located
4. You try to search for `Download`
5. You get 42 results for the word `Download`
6. You cry a bit and skim through the 42 results

Filant aims to make this process instantaneous. It is as simple as right-clicking the component you want to see it open
in your favorite IDE

## 📦 Setup

You will need to do 2 things to set up _filant_:

1. Install the browser extension for [Chrome]() or [Firefox]()
2. Add the plugin [babel-plugin-filant](/packages/babel-plugin-filant) to your project

Once those things are done you can click the browser extension icon and select your IDE and follow any further
instructions specific for that IDE

Now you can simply right-click any component in your app and click on the `Open in IDE` button in the context menu

## ❓ Questions

<details>
<summary>My code editor is not supported</summary>
We tried to support all major code editors. If you think you can help adding your IDE, head over to the <a href="#-contributing">contributing section</a>
</details>

<details>
<summary>My Javascript framework is not supported</summary>
We are not experts on other Javascript frameworks. But we are more than welcome to accept pull requests and suggestions
on how to make filant work with other frameworks. If you think you can help, head over the <a href="#-contributing">contributing section</a>
</details>

<details>
<summary>The "Open in IDE" button does not appear</summary>
Check that all of your HTML elements have a `data-filant` attribute
The option will not appear if the element you are clicking on does not have the attribute
</details>

<details>
<summary>Those data attributes clutter my HTML</summary>
We plan in the future to add the data attributes differently to make the HTML less cluttered
However, this is not a priority right now since adding support for other frameworks is more important right now
Feel free to submit pull requests or issues on how to improve this.
</details>

## 📜 Examples

You can check a [React.js example](/examples/example-react) using [parcel-bundler](https://parceljs.org/).

## 👋 Contributing

We welcome pull requests to add further capabilities and support to _filant_. Here we'll see the most common scenarios

### How it works internally

As you will see exploring the `packages` folder, the concept is fairly easy. The
[babel-plugin-filant](/packages/babel-plugin-filant) adds to all JSX elements an attribute `data-filant` with the
current path, line and column that element is found. If you inspect you HTML after adding the plugin, you will see
something like this:

```html
<div data-filant="C:/Website/src/App.jsx|18|8">
  <h1 data-filant="C:/Website/src/App.jsx|19|12">Hello World!</h1>
</div>
```

In short, it adds the following to all HTML elements:

```html
<div data-filant="<FULL_PATH>|<LINE>|<COLUMN>"></div>
```

### Adding support for a new Javascript framework

To add support for a new JS framework, you will need to implement some kind of plugin that adds those `data-filant`
attributes to the output HTML. The browser extension will handle the rest.

Here at Pocket Apps, we use React.js and don't have much experience with other frameworks building pipelines. So we
thank you so much for helping us in this regard

### Adding support for a new code editor

To add support for a new code editor, you will need to submit a pull request with the following changes to the
[browser-extension](/packages/browser-extension) package:

- Add the new icon to the `images` folder
- Add the image to the IDE list on the `popup/index.html` file
- Add the explanation to the IDE footer on the `popup/index.html` file
- Add a way to open it on the `background.js` file

## 💖 Support

If you found filant useful you may consider [buying us a coffee](https://buymeacoffee.com/pocketapps) or contributing to
the repository.

We are two developers, and a cat making this possible in our free time from work, so your help will be greatly
appreciated.

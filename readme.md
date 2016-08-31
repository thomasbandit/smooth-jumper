# smooth-jumper

A simple dependency-free JavaScript smooth scroll helper. Enables scrolling between any DOM elements, including within positioned and specifically styled elements. React friendly!

## Demos

* [Vanilla JS](https://thomasbandit.github.io/smooth-jumper/examples) - Performs a smooth scroll example on the document.body.
* [React](https://thomasbandit.github.io/smooth-jumper/examples/react.html) - Performs a smooth scroll between three elements within an absolute element of fixed height.

## Using
* Via [NPM](https://www.npmjs.com/package/smooth-jumper): `npm install smooth-jumper --save`
* Or use the `dist/smooth-jumper.js` file as an external script.
* Exports a single function with 3 arguments:
  1. The DOM container element
  2. The DOM target element
  3. Options - JS Object (options listed below)

## Options

* Easing types: `ease-in-out`, `ease-in-cubic`, `in-out-quint`
* Duration: Integer (in milliseconds; default is 500ms)
* Offset: Integer (in pixels; default is 0)

## Building, useful commands

* `npm run dev` - Entry route is `src/examples/index.js`. This loads the React app with Hot Module Replacement (hot reloading).
* `npm run examples` - Builds the static JavaScript and SCSS files. The following files are created in the * `examples` directory: `bundle.js` and `style.css`.
* `npm run build` - Builds the production version smooth-jumper.js in the `dist` directory.
* `npm run lint` - Runs an ES lint to check everything's nice and tidy.

### License

MIT

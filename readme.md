# smooth-jumper

A simple dependency-free JavaScript smooth scroll helper. Enables scrolling between any DOM elements, including within positioned and specifically styled elements. React friendly!

## Demos

* [Vanilla JS](https://thomasbandit.github.io/smooth-jumper/examples/static.html) - Performs a smooth scroll example on the document.body.
* [React](https://thomasbandit.github.io/smooth-jumper/examples/index.html) - Performs a smooth scroll between three elements within an absolute element of fixed height.

## Using
* Via [NPM](https://www.npmjs.com/package/smooth-jumper): `npm install smooth-jumper --save`.

* Or use the `lib/smooth-jumper.min.js` file as an external script. Usage:

  `smoothJump(containerEl, targetEl, options = {});`

* Exports a single function with 3 arguments:
  1. The DOM container element
  2. The DOM target element
  3. Options - JS Object (options listed below)

## Options

* 'easing' for easing types: `ease-in-out`, `ease-in-cubic`, `in-out-quint`
* 'duration': Integer (in milliseconds; default is 500ms)
* 'offset': Integer (in pixels; default is 0)

## Building, useful commands

* `npm run dev` - Entry route is `src/examples/index.js`. This loads the React app with Hot Module Replacement (hot reloading).
* `npm run build` - Builds the NPM production version smooth-jumper.js in the `lib` directory.
* `npm run build:min` - Builds the minified production version smooth-jumper.min.js in the `lib` directory.
* `npm run build:examples` - Builds the static JavaScript and SCSS files. The following files are created in the * `examples` directory: `bundle.js` and `style.css`.
* `npm run lint` - Runs an ES lint to check everything's nice and tidy.

### License

MIT

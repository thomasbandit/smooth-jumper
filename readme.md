# smooth-jumper

A simple dependency-free JavaScript smooth scroll helper. Enables scrolling between any DOM elements, including within positioned and specifically styled elements. React friendly!

## Demos

[Vanilla JS](https://thomasbandit.github.io/smooth-jumper/examples) - Performs a smooth scroll example on the document.body.
[React](https://thomasbandit.github.io/smooth-jumper/examples/react.html) - Performs a smooth scroll between three elements within an absolute element of fixed height.

## Building, useful commands

* `npm run dev` - Entry route is src/examples/index.js, this is React with Hot Module Replacement (hot reloading).
* `npm run examples` - Builds the static JavaScript () and the SCSS files. The following files are created in the * `examples` directory: `bundle.js` and `style.css`.
* `npm run build` - Builds the production version smooth-jumper.js in the `dist` directory.
* `npm run lint` - Runs an ES lint to check everything's nie and tidy.

## Options (todo)

* easing types
* duration
* offset

### License

MIT

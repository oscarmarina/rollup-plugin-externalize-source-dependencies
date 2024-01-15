# rollup-plugin-total-bundlesize

> A Rollup plugin that allows for the replacement of dependencies with external dependencies without requiring users to manually mark them as external through the 'external' option.

- https://rollupjs.org/plugin-development/#resolveid
- https://github.com/remcovaes/web-test-runner-vite-plugin/blob/main/src/mark-external.js


<br>

## Installation

```
npm install @blockquote/rollup-plugin-externalize-source-dependencies
```

## Usage

```js
import externalizeSourceDependencies from '@blockquote/rollup-plugin-externalize-source-dependencies';

export default {
  entry: 'index.js',
  plugins: [
    externalizeSourceDependencies([
      /* @web/test-runner-commands needs to establish a web-socket
       * connection. It expects a file to be served from the
       * @web/dev-server. So it should be ignored by Vite */
      '/__web-dev-server__web-socket.js',
    ]),
  ],
};
```

## License

MIT

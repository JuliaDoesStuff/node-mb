# node-mb
Tiny megabyte conversion library

[![npm](https://img.shields.io/npm/v/node-mb)](https://npm.im/node-mb)
[![npm](https://img.shields.io/npm/dt/node-mb)](https://npm.im/node-mb)
[![NPM](https://img.shields.io/npm/l/node-mb)](https://npm.im/node-mb)

```js
mb("1024kb"); // 1
mb("1.5mb"); // 1.5
mb(1.5); // 1.5mb
mb(1.5, { long: true }); // 1.5 megabytes
mb("1 gigabyte"); // 1048576
mb(1048576); // 1 terabyte
mb(mb("1 terabyte")); // 1tb
```

# License
This package is licensed under the [MIT License](./LICENSE).
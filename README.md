# React Router Stub

This is a utility for stubbing routing context when testing code using `react-router`. It is heavily based on the docs at https://github.com/rackt/react-router/blob/master/docs/guides/testing.md and some modifications by @toolness.

```
npm install react-router-stub
```

## Usage

```js
var reactRouterStub = require('react-router-stub');
var SomeComponent = require('../some-component');

var instance = reactRouterStub.render(SomeComponent, {
  foo: 'foo',
  bar: 123
});

...

should(instance.state.doingStuff).be.false;

...

reactRouterStub.unmount(instance);
```

## API

### `reactRouterStub(Component, props, stub)`
Returns a reference to the stub itself

### `reactRouterStub.render(Component, props)`
Returns a instance(`componentInstance`) of `Component`

### `reactRouterStub.unmount(componentInstance)`
Unmounts the parent node of the `componentInstance`

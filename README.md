## Commit Changes

Use Commitizen for contributors.

So use `git cz` or `npm commit` instead of `git commit`.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Contribution & Development

If your `package-lock.json` file show lots of changed after `npm install` (e.g., `https` becomes `http`) but without installing any new packages. Try the method below to fix the issue:

```bash
$ rm -rf node_modules/
$ npm cache clean --force # Revert the changes in your package-lock.json file
$ npm install
```

> reference: [npm install downgrading resolved packages from https to http registry in package-lock.json](https://npm.community/t/npm-install-downgrading-resolved-packages-from-https-to-http-registry-in-package-lock-json/1818)

### Routes

Centralize router is config in `src/Routes.js`.

### Convention

Import sequences

```js
// node_modules(ignore comment)
import React from 'react';

// utils

// assets

// actions

// components

// self-defined-components

function Foo() {
  //...
}

export default Foo;
```

### Disable eslint

```JS
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
```

## Third Party

### State management - Redux

Libraries:

* [Redux](https://redux.js.org/)
* [reduxjs/toolkit](https://redux-toolkit.js.org/)
* [redux-saga](https://redux-saga.js.org/)

First, this project use Redux for state management.

To simplify redux and avoid too many files and trivial operation such as create *const* `ACTION_TYPE`.
We use [createSlice](https://redux-toolkit.js.org/api/createslice/) that provided by redux-starter-kit, and place files in `src/slices`.

A `slice` example as follow:

```js
/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit';
const counter = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    multiply: (state, action) => state * action.payload
  }
})

// Customize only for this project to add async action.
counter.sagas = {
  incrementAsync: createAction('counter/incrementAsync'),
};
export default counter;
```

So you have two kind of actions to dispatch:

```js
import counterSlice from './counter';
counterSlice.actions.increment();
counterSlice.sagas.incrementAsync();
```

To execute async actions please references `redux-saga` documents, and relevant files should placed in `src/sagas`.

1. Add saga

```js
function* incrementAsync({ payload }) {
  try {
    // async and effects
  } catch (error) {
  }
}

export function* watchIncrementAsync() {
  yield takeEvery('counter/incrementAsync', incrementAsync);
}
```

2. Import in `src/sagas/index.js`

```js
export default function* rootSaga() {
  yield all([
    // Placed here.
  ]);
}
```

3. Dispatch an action as normal
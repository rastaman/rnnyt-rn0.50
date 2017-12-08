# rnnyt-rn0.50

It is the example application from the book "Mastering React Native" updated for React Native 0.50.

Updates :
- Use React 16
- Use PropTypes from external package
- Use ImageBackground
- Don't use index.ios & index.android

## Progress

I'm currently at chapter 7 / Navigator of the book and so is the code. I had to use 'react-navigation' for
the last part of the chapter because the other ways are deprecated.

## Run the application

It the app complain about a missing jsbundle at start launch it with `FORCE_BUNDLING` to force the rebuilding :

```sh
$ FORCE_BUNDLING=1 react-native run-ios
```

After the app has been rebundled, it should not be needed to use the variable again.

## Tooling

- [How-To: Setup Atom with Nuclide, ESLint & Flow - Jesper Lund](https://jesperln.dk/how-to-setup-atom-with-nuclide-eslint-flow/)

## Navigation

- [Thousand Ways to Navigate in React Native – The React Native Log – Medium](https://medium.com/the-react-native-log/thousand-ways-to-navigate-in-react-native-f7a1e311a0e8)

### Redux with react-navigation
- [React-Navigation, complete Redux state management, tab-bar, and multiple navigators](https://codeburst.io/react-navigation-with-complete-redux-state-management-tab-bar-and-multiple-navigators-ed30a69d9a4d)

### Params

- [Params not being passed when navigating between Stacks (repro included) · Issue #143 · react-community/react-navigation](https://github.com/react-community/react-navigation/issues/143)

### Modals and go back

- [Choose transition mode for each screen in StackNavigator · Issue #707 · react-community/react-navigation](https://github.com/react-community/react-navigation/issues/707)
- [make a specific screen a modal? · Issue #770 · react-community/react-navigation](https://github.com/react-community/react-navigation/issues/770)
- [Navigator props - TabNavigator | React Navigation](https://reactnavigation.org/docs/navigators/tab#Navigator-Props)
- [Cannot hide header · Issue #293 · react-community/react-navigation](https://github.com/react-community/react-navigation/issues/293)

### Animations

Tip: Set flex to 0 for the width to take effect.

- [Animate Your React Native App](https://code.tutsplus.com/tutorials/working-with-animations-in-react-native--cms-27328)
- [Guide de référence des fonctions d'easing](http://easings.net/fr)

## Tests

### Jest

Debug:

```sh
$ ./node_modules/.bin/jest --debug
...
```

- [Cannot find module 'jest-cli' · Issue #2 · yoavniran/gulp-jest-jspm](https://github.com/yoavniran/gulp-jest-jspm/issues/2)
- [Unexpected Token Import for ES6 modules · Issue #2081 · facebook/jest](https://github.com/facebook/jest/issues/2081)
- [npm test always fails · Issue #199 · react-community/create-react-native-app](https://github.com/react-community/create-react-native-app/issues/199)

## Performance

### Systrace

- [TypeError: global.nativeTraceBeginSection is not a function (Systrace) · Issue #15003 · facebook/react-native](https://github.com/facebook/react-native/issues/15003)

- [[WIP] [Not for Merge] Disable ReactPerf and Update Systrace React Integration by gaearon · Pull Request #12797 · facebook/react-native](https://github.com/facebook/react-native/pull/12797)

### Profiling in general

- [React Native Performance Profiling · Issue #15371 · facebook/react-native](https://github.com/facebook/react-native/issues/15371)
- [Plan for Addons in React 16 · Issue #9207 · facebook/react](https://github.com/facebook/react/issues/9207)

## Fiber

- [acdlite/react-fiber-architecture: A description of React's new core algorithm, React Fiber](https://github.com/acdlite/react-fiber-architecture)

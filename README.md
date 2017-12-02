# rnnyt-rn0.50

It is the example application from the book "Mastering React Native" updated for React Native 0.50.

Updates :
- Use React 16
- Use PropTypes from external package
- Use ImageBackground
- Don't use index.ios & index.android

## Progress

I'm currently at chapter 7 / Navigator of the book and so is the code.

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

# React Native starter kit based on Atomic Architecture
**ARcN** (Atomic React Native) is a React Native starter kit based on the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology. Please see [Resources](#Resources) section to learn more about Atomic design.

- **[Demo](https://arcn.js.org)**


## Setup

### 1. Get the source code

Just clone the ARcN repo:
```sh
$ git clone -b redux-saga https://github.com/alexakasanjeev/arcn my-app
$ cd my-app
```

You will probably want to remove ARcN git history and start a brand new repository:
```sh
$ rm -rf .git
$ git init
```

### 2. Install dependencies

```sh
$ npm install
```

### 3. Run the app

```sh
$ npm start
$ react-native run-android
```

## Resources

- Learn about [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)

## Contributing

#### Code 
If you are a developer and you wish to contribute to the app please fork the project
and submit a pull request on the [redux-saga branch](https://github.com/alexakasanjeev/arcn/tree/redux-saga).

#### Issues
You can trace the status of known issues [here](https://github.com/alexakasanjeev/arcn/issues),
also feel free to file a new issue (helpful description, screenshots and logcat are appreciated)

#### Translations
If you are able to contribute with a new translation of a missing language or if you want to improve an existing one, we greatly appreciate any suggestion!

#### Suggestion/Ideas
If you have a feature request or idea which will enhance the user experience of app or have better UI design, create an issue with feature-request template.


PRs are very appreciated. For bugs/features consider creating an issue before sending a PR.

## Roadmap

- [ ] IMPLEMENT: Storybook for components (need help)
- [ ] IMPLEMENT: Write jest tests (need help)
- [x] IMPLEMENT: Way to implement theming for component using Context API
- [ ] IMPROVE: Write good documentaion (need help)
- [ ] IMPLEMENT: Branch that contains only react native and redux, no redux-saga
- [ ] TODO: Create an ArcN logo

## Similar project
[arc](https://github.com/diegohaz/arc) - React starter kit based on Atomic design.

[react-atomic-design](https://github.com/danilowoz/react-atomic-design) - React starter kit base on Atomic design

[magento_react_native](https://github.com/alexakasanjeev/magento_react_native) - Project using Atomic design architetcure


## License

This project is licensed under the GNU v3 Public License License - see the [LICENSE.md](LICENSE.md) file for details

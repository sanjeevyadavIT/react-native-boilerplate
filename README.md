<p align="center">
<img style="margin-bottom: 40px; " alt="Project Structure" src=".github/images/banner.png">
</p>

![React Native](https://img.shields.io/badge/react--native-0.62.2-brightgreen)
[![StoryBook](.github/icons/storybook.svg)](https://github.com/storybooks/storybook)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/alexakasanjeev/react-native-boilerplate/issues)

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that  provides **an architecture optimized for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic to help you kickstart your new app

When starting new apps I found myself repeatedly setting up my project with same packages over and over again so I decided to automate this process

This boilerplate consists of various elements and best practices I learned while going though apps written by various talented developers in the React Native Community :zap:

While this mostly consists of how I organize my projects but can be easily extended to suit any workflow :smile:

If you're new to React Native feel free to checkout this repo I made where I keep all the learning resources I find: [Learn React Native](https://github.com/karanpratapsingh/guides-and-articles/blob/master/Guides/Learn%20React%20Native.md)

If you face any issue then please checkout the Known Issues section below, but if the issue persists then feel free to open a issue so we can solve it together :smiley:

**Feel free to leave a :star: as motivation if this was useful to you :smile:**

## 📪 Index

   - [Content](#Content)

   - [Project Structure](#ProjectStructure)

   - [Using the boilerplate](#UsingBoilerplate)

   - [Rename the project](#RenameProject)

   - [Running the project](#RunningProject)

   - [Documentations](#Documentations)

## 📦 <a name="Content"></a> Content:

    - React Native (0.62.2)
    - Clean Directory Layout
    - Internationalization (i18n)
    - Theme Implementation
    - Storybook Setup
    - Packages:
        - Redux (with redux-saga)
        - React Navigation
        - React Native Vector Icons

## 🔍 <a name="ProjectStructure"></a> Project Structure:

> [WIP]

## 📲 <a name="UsingBoilerplate"></a> Using the boilerplate:

Clone the repository:

```sh
git clone https://github.com/alexakasanjeev/react-native-boilerplate.git && cd react-native-boilerplate
```

Make sure to remove the existing git history and initialize the project with your own 

``` bash
rm -rf .git/
git init
git add .
git commit -m 'project init'
git remote add origin <your remote repo>
git push -u origin master
```

## 📝 <a name="RenameProject"></a> Rename the project:

Rename the project with the name and bundle identifier of your choosing
**Note**: it is advised to do so in a new branch

``` 
git checkout -b rename
npx react-native-rename <new_name> -b <bundle_identifier>
```

## 🚀 <a name="RunningProject"></a> Running the project

Assuming you have cloned the repository : [Using the boilerplate](#UsingBoilerplate)

### Install dependencies

```sh
npm install
```

After dependencies are installed, start the metro bundler

```sh
npm start
```

### For Android

Run the following command while the simulator is open or a device is connected via adb.

``` 
react-native run-android
```

### For iOS

Run the following commands to install pods and run the app on iPhone simulator

``` 
npm run cocoapods
react-native run-ios
```

## 📜 <a name="Documentations"></a> Documentations

> [WIP]

## 🙋‍ Contributing

#### Code 
If you are a developer and you wish to contribute to the app please fork the project
and submit a pull request.

#### Issues
You can trace the status of known issues [here](https://github.com/alexakasanjeev/react-native-boilerplate/issues),
also feel free to file a new issue (helpful description, screenshots and logcat are appreciated)

#### Translations
If you are able to contribute with a new translation of a missing language or if you want to improve an existing one, we greatly appreciate any suggestion!

#### Suggestion/Ideas
If you have a feature request or idea which will enhance the user experience of app or have better UI design, create an issue with feature-request template.

PRs are very appreciated. For bugs/features consider creating an issue before sending a PR.

## 🔔 Updates

The boilerplate will follow latest React Native releases as soon as libraries and tools used here are compatible. I will personally try update this as I use this boilerplate in production :smile:

## 📋 Roadmap

- [x] UPGRADE: reatct-native 0.62.2
- [x] IMPLEMENT: Storybook for components
- [ ] IMPLEMENT: Write jest tests (need help)
- [x] IMPLEMENT: Way to implement theming for component using Context API
- [ ] IMPROVE: Write good documentaion (need help)
- [ ] IMPLEMENT: Branch that contains only react native and redux, no redux-saga
- [ ] UPGRADE: react-navigation to version 5
- [x] IMPLEMENT: Language localisation

## 🗃️ Similar project

* [magento_react_native](https://github.com/alexakasanjeev/magento_react_native) - Project using this boilerplate code(almost 😅)

* [React Native Boilerplate](https://github.com/karanpratapsingh/react-native-boilerplate) by [Karan Pratap Singh](https://github.com/karanpratapsingh)

## 📣 Acknowledgements

* [README-Template.md](https://github.com/karanpratapsingh/react-native-boilerplate/blob/master/README.md) by [Karan Pratap Singh](https://github.com/karanpratapsingh)

## ♥️ Donate

If this project help you, or to help acclerate development, you can give me a cup of coffee :smile: :

<a href="https://www.buymeacoffee.com/alexakasanjeev" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## 🛡 License

This project is licensed under the GNU v3 Public License License - see the [LICENSE.md](LICENSE.md) file for details

## File structure

- `/android` - contains native code specific to the Android OS
- `/documentation` - as the name suggests - any docs
- `/ios` - native code specific to iOS
- `/src` - contains our JS and CSS code. `index.js` is the entry-point for our file, and is mandatory.
    - `/common` - Shared stateless components are put here
    - `/constants` - App-wide variables [Read More &rarr;](how-to-use-theme.md)
        - `dimensions.js` - Store all number related constant used in screens/component here
        - `spacing.js` - Standard values meant to be used for padding & margin
        - `typography.js` - Contain presets meant to be used in `Text` component
    - `/i18n` - Store all the strings here, to support language localization
    - `/navigation` - Wire up the react-navigation routing
    - `/screens` - Contain Screens which correspond to a route in react-navigation
    - `/services` - Web service is defined here
    - `/store` - Redux Store - hooks up the stores and provides initial/template states
    - `/theme` - Inbuilt theme module using React Context [Read More &rarr;](how-to-use-theme.md)
    - `index.js` - The starting place for our app


import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// Comment out below line and uncomment storybook export to see component storybook
AppRegistry.registerComponent(appName, () => App);

// export * from './storybook';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import {name as appName} from '../app.json';
import { loadStories } from './storyLoader';

import './addons';
import './rn-addons';

// TODO: Implement require.context to automatically import stories.js files from components folder 
// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
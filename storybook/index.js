import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

import './rn-addons';

// TODO: Implement require.context to automatically import stories.js files from components folder
// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;

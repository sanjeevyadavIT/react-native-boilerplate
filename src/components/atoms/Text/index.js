import React from 'react';
import { Text as RNText } from 'react-native';
import { withTheme } from '../../../config';

const Text = props => <RNText {...props} />;

export default withTheme(Text);

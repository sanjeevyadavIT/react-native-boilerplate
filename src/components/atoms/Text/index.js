import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { withTheme } from '../../../config';

const Text = ({ theme, style, ...props }) => (
    <RNText
        style={StyleSheet.flatten([styles.text(theme), style])}
        {...props}
    />
)

const styles = {
    text: theme => ({
        ...theme.typography.bodyText,
    }),
}

export default withTheme(Text);

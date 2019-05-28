import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Text from '../Text';
import { ThemeProvider, theme } from '../../../config';

storiesOf('Text', module)
    .addDecorator(function(getStory) {
        return (<ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
    })
    .add('default', () => (
        <Text>Hello I am a text!</Text>
    ));
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Spinner from '../Spinner';
import { ThemeProvider, theme } from '../../../theme';

storiesOf('Spinner', module)
    .addDecorator(function(getStory) {
        return (<ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
    })
    .add('large', () => (
        <Spinner size="large"/>
    ))
    .add('small', () => (
        <Spinner size="small"/>
    ));
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import LoadingView from '../LoadingView';
import { ThemeProvider, theme } from '../../../config';

storiesOf('LoadingView', module)
    .addDecorator(function(getStory) {
        return (<ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
    })
    .add('small', () => (
        <LoadingView size="small" />
    ))
    .add('large', () => (
        <LoadingView size="large" />
    ));
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import MessageView, { messageTypes } from '../MessageView';
import { ThemeProvider, theme } from '../../../theme';

storiesOf('MessageView', module)
    .addDecorator(function(getStory) {
        return (<ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
    })
    .add('info', () => (
        <MessageView mode={messageTypes.INFO} message="This is a normal information!" />
    ))
    .add('success', () => (
        <MessageView mode={messageTypes.SUCCESS} message="Hurrah! the transaction is successful." />
    ))
    .add('error', () => (
        <MessageView mode={messageTypes.ERROR} message="Oh no! Looks like something went wrong." />
    ));
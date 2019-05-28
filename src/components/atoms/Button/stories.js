import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Button, { buttonTypes } from '../Button';
import { ThemeProvider, theme } from '../../../config';

storiesOf('Button', module)
    .addDecorator(function(getStory) {
        return (<ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
    })
    .add('solid', () => (
        <Button type={buttonTypes.SOLID} onPress={action('clicked')} title="Solid button"/>
    ))
    .add('outline', () => (
        <Button type={buttonTypes.OUTLINE} onPress={action('clicked')} title="Outline button"/>
    ));
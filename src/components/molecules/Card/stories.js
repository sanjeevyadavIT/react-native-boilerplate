import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Card from '../Card';
import { Text } from '../..';
import { ThemeProvider, theme } from '../../../theme';

storiesOf('Card', module)
    .addDecorator(function(getStory) {
        return (<ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
    })
    .add('default', () => (
        <Card>
            <Text>This is a basic Card with Text component inside</Text>
        </Card>
    ));
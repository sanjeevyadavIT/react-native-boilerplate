import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { ThemeProvider, lightTheme as theme } from '../../theme';

storiesOf('Button', module)
  .addDecorator(getStory => (
    <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => (
    <Button onPress={action('default button clicked')} title="Default button" />
  ));

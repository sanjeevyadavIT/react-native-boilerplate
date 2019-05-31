import ThemeContext from './ThemeContext';
import ThemeProvider, { ThemeConsumer } from './ThemeProvider';
import withTheme from './withTheme';
import theme from './theme';

export * from '../constants/strings';
/**
 * To receive theme as a prop in component, use 'withTheme' High Order Component
 */
export {
    theme,
    withTheme,
    ThemeContext,
    ThemeProvider,
    ThemeConsumer,
};

import React from 'react';
import { useColorScheme } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import RootNavigator from './navigation';
import store from './store';
import { ThemeProvider, lightTheme, darkTheme } from './theme';

const App = () => {
  /**
   * The useColorScheme React hook provides and subscribes to color scheme
   * updates from the Appearance module. This will help automatically
   * switch from light theme to dark theme, based on user preference.
   */
  const colorScheme = useColorScheme();
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={colorScheme === 'light' ? lightTheme : darkTheme}>
        <RootNavigator />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;

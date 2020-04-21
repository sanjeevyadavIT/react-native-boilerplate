import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import RootNavigator from './navigation';
import store from './store';
import { ThemeProvider, lightTheme as theme } from './theme';

const App = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <RootNavigator/>
    </ThemeProvider>
  </StoreProvider>
);

export default App;

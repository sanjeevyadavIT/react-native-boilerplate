import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import Navigator from './navigation/Navigator';
import NavigationService from './navigation/NavigationService';
import store from './store';
import { ThemeProvider, theme } from './config';


const App = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <Navigator
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </ThemeProvider>
  </StoreProvider>
);

export default App;

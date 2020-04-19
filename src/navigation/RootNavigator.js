import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeScreen,
  DetailScreen,
} from '../screens';
import {
  NAVIGATION_TO_HOME_SCREEN,
  NAVIGATION_TO_DETAIL_SCREEN,
} from './routes';
import { ThemeContext } from '../theme';
import { translate } from '../i18n';

const defaultHeader = theme => ({
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerBackTitle: null,
  headerTintColor: theme.colors.appbarTintColor,
});

const Stack = createStackNavigator();

const RootNavigator = () => {
  const theme = useContext(ThemeContext);
  console.log({ theme })
  return (
    <NavigationContainer    >
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          ...defaultHeader(theme),
        })}
      >
        <Stack.Screen
          name={NAVIGATION_TO_HOME_SCREEN}
          component={HomeScreen}
          options={{
            title: translate('homeScreen.appbarTitle'),
          }}
        />
        <Stack.Screen
          name={NAVIGATION_TO_DETAIL_SCREEN}
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.item.name || translate('detailScreen.appbarTitle')
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;

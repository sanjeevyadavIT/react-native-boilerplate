import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
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

const Stack = createStackNavigator();

const RootNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={theme.appbar.barStyle}
        backgroundColor={theme.appbar.statusBarColor}
      />
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: theme.primaryColor,
          },
          headerBackTitle: null,
          headerTintColor: theme.appbar.tintColor,
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
            title: translate('detailScreen.appbarTitle')
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;

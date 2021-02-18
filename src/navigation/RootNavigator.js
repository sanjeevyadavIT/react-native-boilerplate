import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons } from '../common';
import {
  HomeScreen,
  SettingsScreen,
} from '../screens';
import {
  NAVIGATION_TO_HOME_SCREEN,
  NAVIGATION_TO_SETTINGS_SCREEN,
} from './routes';
import { ThemeContext } from '../theme';
import { translate } from '../i18n';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
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
        options={({ navigation }) => ({
          title: translate('homeScreen.appbarTitle'),
          headerLeft: () => (
            <HeaderButtons>
              <HeaderButtons.Item
                title={translate('common.drawerButton')}
                iconName="menu"
                onPress={navigation.openDrawer}
              />
            </HeaderButtons>
          )
        })}
      />
      <Stack.Screen
        name={NAVIGATION_TO_SETTINGS_SCREEN}
        component={SettingsScreen}
        options={({ route }) => ({
          title: translate('settingsScreen.appbarTitle')
        })}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={theme.appbar.barStyle}
        backgroundColor={theme.appbar.statusBarColor}
      />
      <Drawer.Navigator initialRouteName={NAVIGATION_TO_HOME_SCREEN}>
        <Drawer.Screen name="Drawer" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {
    HomeScreen,
    DetailScreen,
} from '../screens';
import {
    NAVIGATION_HOME_SCREEN,
    NAVIGATION_DETAIL_SCREEN,
} from './routes';
import { theme } from '../theme';

export const defaultHeader = {
    headerStyle: {
        backgroundColor: theme.colors.primary,
    },
    headerTitleStyle: {
        ...theme.typography.titleTextBold,
    },
    headerBackTitle: null,
    headerTintColor: theme.colors.appbarTintColor,
};

const Navigator = createStackNavigator(
    {
        [NAVIGATION_HOME_SCREEN]: HomeScreen,
        [NAVIGATION_DETAIL_SCREEN]: DetailScreen,
    },
    {
        defaultNavigationOptions: defaultHeader,
    }
);

export default createAppContainer(Navigator);

import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
    HomePage,
    DetailPage,
} from '../components';
import {
    NAVIGATION_HOME_PAGE,
    NAVIGATION_DETAIL_PAGE,
} from './routes';
import { theme } from '../config';

export const defaultHeader = {
    headerStyle: {
        backgroundColor: theme.colors.primary,
    },
    headerTitleStyle: {
        ...theme.typography.titleTextBold,
    },
    headerBackTitle: null,
    headerTintColor: theme.colors.black,
};

const Navigator = createStackNavigator(
    {
        [NAVIGATION_HOME_PAGE]: HomePage,
        [NAVIGATION_DETAIL_PAGE]: DetailPage,
    },
    {
        defaultNavigationOptions: defaultHeader,
    }
);

export default createAppContainer(Navigator);

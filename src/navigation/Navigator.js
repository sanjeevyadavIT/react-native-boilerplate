import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
    HomePage,
    DetailPage,
} from '../components';
import {
    NAVIGATION_HOME_PAGE,
    NAVIGATION_DETAIL_PAGE,
} from './routes';
import { PRIMARY_COLOR, ACCENT_COLOR } from '../constants';

export const defaultHeader = {
    headerStyle: {
        backgroundColor: PRIMARY_COLOR,
    },
    headerTitleStyle: {
        color: ACCENT_COLOR,
    },
    headerBackTitle: null,
    headerTintColor: ACCENT_COLOR,
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

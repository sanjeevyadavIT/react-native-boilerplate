import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomePage } from '../components';
import { NAVIGATION_HOME_PAGE } from './routes';
import { PRIMARY_COLOR, ACCENT_COLOR } from '../config';

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
    },
    {
        defaultNavigationOptions: defaultHeader,
    }
);

export default createAppContainer(Navigator);

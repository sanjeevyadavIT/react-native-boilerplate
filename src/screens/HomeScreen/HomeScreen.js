import React, {useContext, useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTrendingRepo} from '../../store/actions';
import {Text, Button} from '../../common';
import {NAVIGATION_TO_SETTINGS_SCREEN} from '../../navigation';
import {Status} from '../../api';
import {translate} from '../../i18n';
import {loadTheme} from '../../utils';
import {ThemeContext, lightTheme, darkTheme} from '../../theme';

const HomeScreen = ({
  /**
   * Tells about the status of get trendending repo api call
   *
   * if status === Status.DEFAULT => api hasn't been hit yet
   * if status === Status.LOADING => api is currently being executed
   * if status === Status.SUCCESS => success response from api
   * if status === Status.ERROR   => error response from api
   *
   * @source: redux
   */
  status,
  /**
   * Contains the error message from server, when status === Status.ERROR
   *
   * @source: redux
   */
  errorMessage,
  /**
   * Array, which store trendeing repository data
   *
   * @source: redux
   */
  items,
  /**
   * redux action to initiate get trending repo api request
   *
   * @source: redux
   */
  getTrendingRepo: _getTrendingRepo,
  /**
   * @source react-navigation
   */
  navigation,
}) => {
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    // componentDidMount
    _getTrendingRepo();
    loadTheme()
      .then((themeType) => {
        if (themeType) {
          setTheme(themeType === 'dark' ? darkTheme : lightTheme);
          toggleDarkTheme(themeType === 'dark');
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ScrollView style={styles.container(theme)}>
        <View>
          <Text>{`${translate('homeScreen.apiCallStatus')} : ${status}`}</Text>
          {errorMessage !== '' && <Text>{errorMessage}</Text>}
          <Text>{JSON.stringify(items, null, 2)}</Text>
        </View>
      </ScrollView>
      <Button
        title={translate('homeScreen.settingsButton')}
        onPress={() => navigation.navigate(NAVIGATION_TO_SETTINGS_SCREEN)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: (theme) => ({
    flex: 1,
    backgroundColor: theme.backgroundColor,
  }),
});

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  getTrendingRepo: PropTypes.func.isRequired,
  status: PropTypes.oneOf(Object.values(Status)).isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  errorMessage: PropTypes.string,
};

HomeScreen.defaultProps = {
  items: [],
  errorMessage: '',
};

const mapStateToProps = ({home}) => {
  const {status, errorMessage, items} = home;
  return {
    items,
    status,
    errorMessage,
  };
};

export default connect(mapStateToProps, {getTrendingRepo})(HomeScreen);

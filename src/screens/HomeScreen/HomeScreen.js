import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTrendingRepo } from '../../store/actions';
import { Text, Button } from '../../common';
import { NAVIGATION_TO_DETAIL_SCREEN } from '../../navigation/routes';
import { translate } from '../../i18n';
import { ThemeContext, lightTheme, darkTheme } from '../../theme';

const HomeScreen = ({
  navigation,
  getTrendingRepo: _getTrendingRepo
}) => {
  const [isDarkTheme, toggleDarkTheme] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    // componentDidMount
    _getTrendingRepo();
  }, []);

  const toggleSwitch = state => {
    // If switch is on, set dark theme, else light
    toggleDarkTheme(state);
    setTheme(state ? darkTheme : lightTheme);
  }

  return (
    <View style={styles.container(theme)}>
      <Text>Dark Mode</Text>
      <Switch
        onValueChange={toggleSwitch}
        value={isDarkTheme}
      />
      <Button title="Detail Screen" onPress={() => navigation.navigate(NAVIGATION_TO_DETAIL_SCREEN)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: theme => ({
    flex: 1,
    backgroundColor: theme.backgroundColor,
  }),
});

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  getTrendingRepo: PropTypes.func.isRequired,
};

HomeScreen.defaultProps = {};

const mapStateToProps = ({ }) => {
  return {

  };
}

export default connect(mapStateToProps, { getTrendingRepo })(HomeScreen);

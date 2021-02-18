import React, {useContext, useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Switch} from 'react-native';
import {Text} from '../../common';
import {translate} from '../../i18n';
import {ThemeContext, lightTheme, darkTheme} from '../../theme';
import {saveTheme, loadTheme} from '../../utils';

const SettingsScreen = () => {
  const [isDarkTheme, toggleDarkTheme] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    // componentDidMount
    loadTheme()
      .then((themeType) => {
        if (themeType) {
          toggleDarkTheme(themeType === 'dark');
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const toggleSwitch = (state) => {
    toggleDarkTheme(state);
    setTheme(state ? darkTheme : lightTheme); // Change theme globally
    saveTheme(state ? 'dark' : 'light'); // Save theme preference in Async Storage
  };

  return (
    <ScrollView style={styles.container(theme)}>
      <View style={styles.switchContainer}>
        <Text>{translate('settingsScreen.darkMode')}</Text>
        <Switch onValueChange={toggleSwitch} value={isDarkTheme} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: (theme) => ({
    backgroundColor: theme.backgroundColor,
  }),
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

SettingsScreen.propTypes = {};

SettingsScreen.defaultProps = {};

export default SettingsScreen;

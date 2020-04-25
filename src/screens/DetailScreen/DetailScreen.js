import React, { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from '../../common';
import { translate } from '../../i18n';
import { ThemeContext } from '../../theme';

const DetailScreen = ({ route, navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ScrollView style={styles.container(theme)}>
      <Text bold type="heading">{translate('detailScreen.heading')}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: theme => ({
    backgroundColor: theme.backgroundColor,
  })
});

DetailScreen.propTypes = {};

DetailScreen.defaultProps = {};

export default DetailScreen;

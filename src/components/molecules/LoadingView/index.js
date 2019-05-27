import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Spinner } from '../..';
import { withTheme } from '../../../config';

const LoadingView = ({ size, theme }) => (
  <View style={styles.container(theme)}>
    <Spinner size={size} />
  </View>
);

const styles = {
  container: theme => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.transparent,
  })
};

LoadingView.propTypes = {
  size: PropTypes.string,
};

LoadingView.defaultProps = {
  size: 'large',
};

export default withTheme(LoadingView);

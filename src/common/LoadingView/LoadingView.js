import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import { ThemeContext } from '../../theme';

const LoadingView = ({ size }) => {
  const theme = useContext(ThemeContext);
  return (
    <View style={styles.container(theme)}>
      <Spinner size={size} />
    </View>
  );
}

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

export default LoadingView;

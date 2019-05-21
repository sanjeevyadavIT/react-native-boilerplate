import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Spinner } from '../..';
import { ACCENT_COLOR, TRANSPARENT_COLOR } from '../../../constants';

const LoadingView = ({ size, color, backgroundColor }) => (
  <View style={[styles.container, { backgroundColor }]}>
    <Spinner size={size} color={color} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

LoadingView.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

LoadingView.defaultProps = {
  size: 'large',
  color: ACCENT_COLOR,
  backgroundColor: TRANSPARENT_COLOR,
};

export default LoadingView;

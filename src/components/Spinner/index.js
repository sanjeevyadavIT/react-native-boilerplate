import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../theme';

const Spinner = ({ size }) => {
  const theme = useContext(ThemeContext);

  return (
     <ActivityIndicator size={size} color={theme.colors.secondary} />
  );
};

Spinner.propTypes = {
  size: PropTypes.string,
};

Spinner.defaultProps = {
  size: 'large',
};

export default Spinner;

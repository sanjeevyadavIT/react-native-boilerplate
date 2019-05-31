import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { withTheme } from '../../../theme';

const Spinner = ({ size, theme }) => <ActivityIndicator size={size} color={theme.colors.secondary} />;

Spinner.propTypes = {
  size: PropTypes.string,
};

Spinner.defaultProps = {
  size: 'large',
};

export default withTheme(Spinner);

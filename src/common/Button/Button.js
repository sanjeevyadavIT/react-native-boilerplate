import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import { ThemeContext } from '../../theme';
import { SPACING, DIMENS, TYPOGRAPHY } from '../../constants';

const Button = ({
  /**
   * text to be shown in button
   */
  title,
  /**
   * Callback to be called, when button is clicked
   */
  onPress,
  /**
   * custom style for button
   */
  style,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button(theme), style]}>
        <Text style={styles.title(theme)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: theme => ({
    flexDirection: 'row',
    padding: SPACING.small,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primaryColor,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.primaryDarkColor,
    borderRadius: DIMENS.common.borderRadius,
  }),
  title: (theme) => ({
    ...TYPOGRAPHY.buttonText,
    color: theme.white,
  }),
});

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
};

Button.defaultProps = {
  onPress: () => {},
  style: {},
};

export default Button;

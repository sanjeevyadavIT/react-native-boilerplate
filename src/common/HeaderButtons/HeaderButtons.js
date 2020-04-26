import React, { useContext } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Item,
  HeaderButton as HB,
  HeaderButtons as HBS,
} from 'react-navigation-header-buttons';
import { ThemeContext } from '../../theme';
import { DIMENS } from '../../constants';

const HeaderButton = props => {
  const { theme } = useContext(ThemeContext);
  return (
    <HB
      IconComponent={MaterialIcons}
      color={theme.appbar.tintColor}
      iconSize={DIMENS.common.appbarIconSize}
      {...props}
    />
  );
};

/**
 * HeaderButtons component is only meant to be
 * used in appbar in react-navigation.
 *
 * For normal icon use, use react-native-vector-icon
 * directly.
 */
const HeaderButtons = props => {
  const { theme } = useContext(ThemeContext);
  return (
    <HBS
      HeaderButtonComponent={HeaderButton}
      OverflowIcon={
        <MaterialIcons
          name="more-vert"
          size={DIMENS.common.appbarIconSize}
          color={theme.appbar.tintColor}
        />
      }
      {...props}
    />
  );
};

HeaderButtons.Item = Item;

export default HeaderButtons;

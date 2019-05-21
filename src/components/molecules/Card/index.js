import React from 'react';
import { TouchableNativeFeedback, TouchableOpacity, View, Platform, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { BORDER_COLOR } from '../../../constants';

const DEFAULT_MODE = 'NO_STYLE';
const OUTLINE_MODE = 'WITH_BORDER';

const CardMode = Object.freeze({ DEFAULT_MODE, OUTLINE_MODE });
const TouchReceptor = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const Card = ({
    style,
    mode,
    onPress,
    children,
}) => {
    const ViewGroup = onPress ? TouchReceptor : View;
    let cardStyle = styles.default;

    switch (mode) {
		case OUTLINE_MODE:
			cardStyle = styles.outline;
			break;
		default:
    }

    return (
    <ViewGroup onPress={onPress}>
        <View style={[cardStyle, style]}>
            {children}
        </View>
    </ViewGroup>
    );
};

const styles = StyleSheet.create({
  default: {
    flex: 1
  },
  outline: {
    flex: 1,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
  },
});

Card.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
  mode: PropTypes.oneOf(Object.values(CardMode)),
};

Card.defaultProps = {
  style: {},
  onPress: null,
  mode: CardMode.DEFAULT_MODE,
};

export default Card;
export { CardMode };

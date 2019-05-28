import React from 'react';
import { View, TouchableNativeFeedback, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text';
import { withTheme } from '../../../config';

const SOLID = 'solid';
const OUTLINE = 'outline';

const buttonTypes = Object.freeze({ SOLID, OUTLINE });

const TouchReceptor = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const Button = ({
    type,
    title,
    onPress,
    children,
    theme,
    ...props
}) => {
    return (
        <TouchReceptor onPress={onPress} {...props}>
            <View
                style={StyleSheet.flatten([
                    styles.button(type, theme),
                ])}
            >
                <Text style={styles.text(type, theme)}>{title}</Text>
            </View>
        </TouchReceptor>
    )
}

const styles = StyleSheet.create({
    button: (type, theme) => ({
        padding: theme.padding.eight,
        alignItems: 'center',
        backgroundColor: type == SOLID ? theme.colors.secondary : theme.colors.transparent,
        borderWidth: type == OUTLINE ? 1 : 0,
        borderColor: theme.colors.secondary,
        borderRadius: theme.dimens.borderRadius,
    }),
    text: (type, theme) => ({
        ...theme.typography.bodyText,
        color: type == SOLID ? theme.colors.white : theme.colors.secondary,
    }),
});

Button.propTypes = {
    type: PropTypes.oneOf(Object.values(buttonTypes)).isRequired,
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
}

Button.defaultProp = {
    onPress: () => {},
};

export default withTheme(Button);
export { buttonTypes };

import React from 'react';
import { View, TouchableNativeFeedback, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text';
import { withTheme } from '../../../config';

// Possible value for prop "type"
const SOLID = 'solid';
const OUTLINE = 'outline';

const TouchReceptor = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

// TODO: Add text-only style button type
// TODO: Write comments to explain props
// TODO: Implement way to incorporate children
// TODO: Make component to be full width with a prop
// TODO: Implement disable functionality
// TODO: Provide a style prop to customized button
const Button = ({
    title,
    type,
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
                <Text type="body" style={styles.text(type, theme)}>{title}</Text>
            </View>
        </TouchReceptor>
    )
}

const styles = StyleSheet.create({
    button: (type, theme) => ({
        padding: theme.padding.eight,
        alignItems: 'center',
        backgroundColor: type === SOLID ? theme.colors.secondary : theme.colors.transparent,
        borderWidth: type === OUTLINE ? 1 : 0,
        borderColor: theme.colors.secondary,
        borderRadius: theme.dimens.borderRadius,
    }),
    text: (type, theme) => ({
        color: type === SOLID ? theme.colors.white : theme.colors.secondary,
    }),
});

Button.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([SOLID, OUTLINE]),
    onPress: PropTypes.func,
}

Button.defaultProps = {
    type: SOLID,
    onPress: () => {},
};

export default withTheme(Button);

import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '../..';
import { withTheme } from '../../../config';

const INFO = 'info';
const SUCCESS = 'success';
const ERROR = 'error';

const messageTypes = { INFO, SUCCESS, ERROR };

const MessageView = React.memo(({ message, mode, theme }) => {
  let textStyle = {};
  switch (mode) {
    case messageTypes.SUCESS:
      textStyle = styles.success;
      break;
    case messageTypes.ERROR:
      textStyle = styles.error;
      break;
    default:
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.text(mode, theme), textStyle]}>{message}</Text>
    </View>
  );
});

const getTextColor = (mode, theme) => {
	switch(mode) {
		case success:
			return theme.colors.success;
		case error:
			return theme.colors.error;
		default:
			return theme.colors.black;
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textDefault: (mode, theme) => ({
		textAlign: 'center',
		padding: 8,
		fontSize: 16,
		color: getTextColor(mode, theme),
	}),
});

MessageView.propTypes = {
	message: PropTypes.string.isRequired,
	mode: PropTypes.oneOf(Object.values(messageTypes)),
};

MessageView.defaultProps = {
  	mode: messageTypes.INFO,
};

export default withTheme(MessageView);
export { messageTypes };

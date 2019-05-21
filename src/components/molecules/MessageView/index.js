import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '../..';
import {
    DEFAULT_PADDING,
    DEFAULT_TEXT_COLOR,
    SUCCESS_TEXT_COLOR,
    ERROR_TEXT_COLOR,
    ERROR_TEXT_SIZE,
} from '../../../constants';

const DEFAULT_MODE = 'INFO_MODE';
const SUCCESS_MODE = 'SUCCESS_MODE';
const ERROR_MODE = 'ERROR_MODE';

const MessageMode = { DEFAULT_MODE, SUCCESS_MODE, ERROR_MODE };

const MessageView = React.memo(({ message, mode }) => {
  let textStyle = {};
  switch (mode) {
    case MessageMode.SUCCESS_MODE:
      textStyle = styles.success;
      break;
    case MessageMode.ERROR_MODE:
      textStyle = styles.error;
      break;
    default:
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.textDefault, textStyle]}>{message}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDefault: {
    textAlign: 'center',
    padding: DEFAULT_PADDING,
    fontSize: ERROR_TEXT_SIZE,
    color: DEFAULT_TEXT_COLOR,
  },
  success: {
    color: SUCCESS_TEXT_COLOR,
  },
  error: {
    color: ERROR_TEXT_COLOR,
  },
});

MessageView.propTypes = {
  message: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(Object.values(MessageMode)),
};

MessageView.defaultProps = {
  mode: MessageMode.DEFAULT_MODE,
};

export default MessageView;
export { MessageMode };

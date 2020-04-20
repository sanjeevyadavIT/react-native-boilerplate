import React, { useContext } from 'react';
import { ScrollView, View, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LoadingView from '../LoadingView/LoadingView'
import MessageView, { messageTypes } from '../MessageView/MessageView'
import Status from '../../services/api/Status';
import { ThemeContext } from '../../theme';

const GenericTemplate = ({
  children,
  footer,
  isScrollable,
  status,
  errorMessage,
  style,
}) => {
  const ViewGroup = isScrollable ? ScrollView : View;
  const theme = useContext(ThemeContext);

  if (status === Status.ERROR) {
    return <MessageView mode={messageTypes.ERROR} message={errorMessage} />;
  }

  if (status === Status.DEFAULT || status === Status.LOADING) {
    return <LoadingView />;
  }

  return (
    <SafeAreaView style={styles.container(theme)}>
      <StatusBar
        barStyle="default"
        backgroundColor={theme.colors.primaryDark}
      />
      <ViewGroup style={[styles.content, style]}>
        {children}
      </ViewGroup>
      {footer}
    </SafeAreaView>
  );
};

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background,
  }),
  content: {
    flex: 1,
  },
};

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  isScrollable: PropTypes.bool,
  status: PropTypes.oneOf(Object.values(Status)),
  errorMessage: PropTypes.string,
  footer: PropTypes.element,
  style: PropTypes.object,
};

GenericTemplate.defaultProps = {
  isScrollable: false,
  status: Status.SUCCESS,
  errorMessage: '',
  footer: <></>,
  style: {},
};

export default GenericTemplate;

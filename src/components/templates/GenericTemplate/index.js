import React from 'react';
import { ScrollView, View, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { LoadingView, MessageView, messageTypes } from '../..';
import Status from '../../../services/api/Status';
import { withTheme } from '../../../theme';

const GenericTemplate = ({
    children,
    footer,
    isScrollable,
    status,
    errorMessage,
    style,
    theme,
}) => {
    const ViewGroup = isScrollable ? ScrollView : View;
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
                backgroundColor={theme.colors.statusBar}
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
	isScrollable: PropTypes.bool.isRequired,
	status: PropTypes.oneOf(Object.values(Status)),
	errorMessage: PropTypes.string,
	footer: PropTypes.element,
	style: PropTypes.object,
};

GenericTemplate.defaultProps = {
	status: Status.SUCCESS,
	errorMessage: '',
	footer: <></>,
	style: {},
};

export default withTheme(GenericTemplate);

import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { LoadingView, MessageView } from '../..';
import Status from '../../../services/api/Status';
import { BACKGROUND_COLOR } from '../../../constants';

const GenericTemplate = ({
    children,
    footer,
    isScrollable,
    status,
    errorMessage,
    style,
}) => {
    const ViewGroup = isScrollable ? ScrollView : View;
    if (status === Status.ERROR) {
        return <MessageView message={errorMessage} />;
    }

    if (status === Status.DEFAULT || status === Status.LOADING) {
        return <LoadingView />;
    }

    return (
        <View style={styles.container}>
            <ViewGroup style={[styles.content, style]}>
                {children}
            </ViewGroup>
            {footer}
        </View>
    );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: BACKGROUND_COLOR,
	},
	content: {
		flex: 1,
	},
});

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

export default GenericTemplate;

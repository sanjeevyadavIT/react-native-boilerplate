import React from 'react';
import { StyleSheet } from 'react-native';
import { GenericTemplate, Text } from '../../components';
import { translate } from '../../i18n';

const DetailScreen = ({ navigation }) => {
    return (
        <GenericTemplate
            isScrollable={false}
        >
            <Text>{JSON.stringify(navigation.getParam('item', 'null'))}</Text>
        </GenericTemplate>
    );
};

const styles = StyleSheet.create({});

DetailScreen.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('item', { name: translate('detailScreen.appbarTitle') }).name,
})

DetailScreen.propTypes = {};

DetailScreen.defaultProps = {};

export default DetailScreen;

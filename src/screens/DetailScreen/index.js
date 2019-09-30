import React from 'react';
import { StyleSheet } from 'react-native';
import { GenericTemplate, Text } from '../../components';
import { DETAIL_PAGE_TITLE } from '../../constants';

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
    title: navigation.getParam('item', { name: DETAIL_PAGE_TITLE }).name,
})

DetailScreen.propTypes = {};

DetailScreen.defaultProps = {};

export default DetailScreen;

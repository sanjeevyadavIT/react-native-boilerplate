import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { GenericTemplate, Text } from '../..';
import { DETAIL_PAGE_TITLE } from '../../../constants';

const DetailPage = ({ navigation }) => {
    return (
        <GenericTemplate
            isScrollable={false}
        >
            <Text>{JSON.stringify(navigation.getParam('item', 'null'))}</Text>
        </GenericTemplate>
    );
};

const styles = StyleSheet.create({});

DetailPage.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('item', { name: DETAIL_PAGE_TITLE }).name,
})

DetailPage.propTypes = {};

DetailPage.defaultProps = {};

export default DetailPage;

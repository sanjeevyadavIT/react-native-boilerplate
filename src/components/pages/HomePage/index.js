import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HOME_PAGE_TITLE } from '../../../constants';
import { getTrendingRepo } from '../../../store/actions';
import { GenericTemplate, Card, CardMode, Text } from '../..';

const HomePage = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.home.status);
    const errorMessage = useSelector(state => state.home.errorMessage);
    const items = useSelector(state => state.home.items);

    useEffect(() => {
        // componentDidMount
        dispatch(getTrendingRepo());
    }, []);

    const renderItem = ({ item }) => <Card mode={CardMode.OUTLINE_MODE}><Text>{item.name}</Text></Card>;

    return (
        <GenericTemplate
            isScrollable={false}
            status={status}
            errorMessage={errorMessage}
        >
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => String(item.id)}
            />
        </GenericTemplate>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

HomePage.navigationOptions = {
    title: HOME_PAGE_TITLE,
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;

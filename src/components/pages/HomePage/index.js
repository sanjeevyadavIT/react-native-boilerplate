import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HOME_PAGE_TITLE } from '../../../constants';
import { getTrendingRepo } from '../../../store/actions';
import { GenericTemplate } from '../..';
import { RepositoryListContainer } from '../../../containers';

const HomePage = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.home.status);
    const errorMessage = useSelector(state => state.home.errorMessage);

    useEffect(() => {
        // componentDidMount
        dispatch(getTrendingRepo());
    }, []);

    return (
        <GenericTemplate
            isScrollable={false}
            status={status}
            errorMessage={errorMessage}
        >
            <RepositoryListContainer />
        </GenericTemplate>
    );
};

const styles = StyleSheet.create({});

HomePage.navigationOptions = {
    title: HOME_PAGE_TITLE,
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;

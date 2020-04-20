import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getTrendingRepo } from '../../store/actions';
import { GenericTemplate } from '../../common';
import { RepositoryList } from './components';

const HomeScreen = ({ navigation }) => {
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
      <RepositoryList navigation={navigation} />
    </GenericTemplate>
  );
};

const styles = StyleSheet.create({});

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;

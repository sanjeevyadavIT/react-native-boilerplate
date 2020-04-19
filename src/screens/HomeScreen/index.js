import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getTrendingRepo } from '../../store/actions';
import { GenericTemplate } from '../../components';
import { RepositoryListContainer } from './containers';
import { translate } from '../../i18n';

const HomeScreen = () => {
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

HomeScreen.navigationOptions = {
  title: translate('homeScreen.appbarTitle'),
}

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;

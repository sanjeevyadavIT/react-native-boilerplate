import React from 'react';
import { useSelector } from 'react-redux';
import { RepositoryList } from '../../../../components';

const RepositoryListContainer = ({ navigation }) => {
  const items = useSelector(state => state.home.items);
  return (
    <RepositoryList items={items} navigation={navigation} />
  );
};

export default RepositoryListContainer;

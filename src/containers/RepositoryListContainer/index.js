import React from 'react';
import { useSelector } from 'react-redux';
import { RepositoryList } from '../../components';

const RepositoryListContainer = () => {
  const items = useSelector(state => state.home.items);
  return (
    <RepositoryList items={items} />
  );
};

export default RepositoryListContainer;

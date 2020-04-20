import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RepositoryListItem from '../RepositoryListItem/RepositoryListItem';

const RepositoryList = ({
  items,
  navigation,
}) => {
  const renderRow = ({ item, index }) => <RepositoryListItem item={item} navigation={navigation} />;

  return (
    <FlatList
      data={items}
      renderItem={renderRow}
      keyExtractor={item => String(item.id)}
    />
  );
};

const styles = StyleSheet.create({});

RepositoryList.propTypes = {
  items: PropTypes.array,
};

RepositoryList.defaultProps = {
  items: [],
};

const mapStateToProps = ({ home }) => {
  const { items } = home
  return {
    items
  }
};

export default connect(mapStateToProps)(RepositoryList);

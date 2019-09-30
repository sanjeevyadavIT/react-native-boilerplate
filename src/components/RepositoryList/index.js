import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { RepositoryListItem } from '../index';

const RepositoryList = ({
  items,
}) => {
    const renderRow = ({ item, index }) => <RepositoryListItem item={item} />;

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

export default RepositoryList;

import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardMode, Text } from '../..';
import NavigationService from '../../../navigation/NavigationService';
import { NAVIGATION_DETAIL_PAGE } from '../../../navigation/routes';
import { DEFAULT_PADDING, BORDER_COLOR } from '../../../constants';

const RepositoryListItem = ({
  item,
}) => (
    <Card
        onPress={() => NavigationService.navigate(NAVIGATION_DETAIL_PAGE, { item })}
        style={styles.container}
        mode={CardMode.OUTLINE_MODE}
    >
        <Text>{item.name}</Text>
    </Card>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        backgroundColor: 'white',
        marginRight: DEFAULT_PADDING,
        marginLeft: DEFAULT_PADDING,
        marginBottom: DEFAULT_PADDING,
        padding: DEFAULT_PADDING,
    },
});

RepositoryListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

RepositoryListItem.defaultProps = {};

export default RepositoryListItem;

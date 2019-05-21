import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        <Text style={styles.title}>{item.full_name}</Text>
        <Text>{item.description}</Text>
        <View style={styles.insightContainer}>
            <View style={styles.row}>
                <Icon name="star" size={20} color="#c0c0c0" />
                <Text> {item.stargazers_count}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="code-fork" size={20} color="#c0c0c0" />
                <Text> {item.forks_count}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="eye" size={20} color="#c0c0c0" />
                <Text> {item.watchers_count}</Text>
            </View>
        </View>
    </Card>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 100,
        backgroundColor: 'white',
        marginRight: DEFAULT_PADDING,
        marginLeft: DEFAULT_PADDING,
        marginBottom: DEFAULT_PADDING,
        padding: (DEFAULT_PADDING + DEFAULT_PADDING),
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    insightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: DEFAULT_PADDING,
    },
    row: {
        flexDirection: 'row',
    }
});

RepositoryListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

RepositoryListItem.defaultProps = {};

export default RepositoryListItem;

import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Text, Button, buttonTypes } from '../..';
import NavigationService from '../../../navigation/NavigationService';
import { NAVIGATION_DETAIL_PAGE } from '../../../navigation/routes';

const RepositoryListItem = ({
  item,
}) => (
    <Card
        onPress={() => NavigationService.navigate(NAVIGATION_DETAIL_PAGE, { item })}
        style={styles.container}
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
        <View style={[styles.row, { paddingTop: 8 }]}>
            <Button type={buttonTypes.SOLID} title="Sample button 1"/>
            <View style={{ margin: 8}} />
            <Button type={buttonTypes.OUTLINE} title="Sample button 2"/>
        </View>
    </Card>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 100,
        backgroundColor: 'white',
        marginRight: 8,
        marginLeft: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    insightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
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

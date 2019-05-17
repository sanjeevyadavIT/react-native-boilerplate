import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HOME_PAGE_TITLE } from '../../../config';

const HomePage = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Recat Native Boiler Plate code based on Atomic Architecture</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

HomePage.navigationOptions = {
    title: HOME_PAGE_TITLE,
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;

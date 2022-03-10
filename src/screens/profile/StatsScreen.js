import React from 'react';
import {Text, View, StyleSheet, Button, TouchableHighlight} from 'react-native';

const StatsScreen = (props) => {
    return (
        <View style={styles.screenContent}>
            <Text>Stats Screen</Text>
        </View>
    )
}

export default StatsScreen;

const styles = StyleSheet.create({
    screenContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
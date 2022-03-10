import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const Header = (props) => {
    return(
        <View>
            <Text style={styles.titleContent}>{props.title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    titleContent: {
        color: '#fff',
        ...Platform.select({
            ios: {
                fontSize: 18,
                fontWeight: '500',
            },
            android: {
                fontSize: 22,
                fontWeight: '600',
            }
        })
    }
})
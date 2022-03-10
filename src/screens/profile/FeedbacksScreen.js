import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { Avatar, Paragraph, Title } from 'react-native-paper';

const FeedbacksScreen = (props) => {
    return (
        <View style={styles.screenContent}>
            <TouchableOpacity style={styles.cardContainer}>
                <Avatar.Image 
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKoBi7WK7jjRuEE9xuWr8QUIztGOoFbbEpAA&usqp=CAU"
                    }}
                    size={60}
                />
                <View style={{paddingHorizontal: 10}}>
                    <Title>John Doe</Title>
                    <Paragraph>sfsdfsd fdsafasd ...</Paragraph>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContainer}>
                <Avatar.Image 
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKoBi7WK7jjRuEE9xuWr8QUIztGOoFbbEpAA&usqp=CAU"
                    }}
                    size={60}
                />
                <View style={{paddingHorizontal: 10}}>
                    <Title>John Doe</Title>
                    <Paragraph>sfsdfsd fdsafasd ...</Paragraph>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContainer}>
                <Avatar.Image 
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKoBi7WK7jjRuEE9xuWr8QUIztGOoFbbEpAA&usqp=CAU"
                    }}
                    size={60}
                />
                <View style={{paddingHorizontal: 10}}>
                    <Title>John Doe</Title>
                    <Paragraph>sfsdfsd fdsafasd ...</Paragraph>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default FeedbacksScreen;

const styles = StyleSheet.create({
    screenContent: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        width: "90%",
        flexDirection: 'row',
        marginTop: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 15
    }
})
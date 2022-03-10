import React from 'react';
import {
    View, 
    Image, 
    StyleSheet, 
    TouchableOpacity,
    Platform
} from 'react-native';
import {
    Title, 
    Caption,
    Paragraph
} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';

const Card = (props) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={()=>props.navigation.navigate('Service', {service: props.data.item, navigation: props.navigation})}>
            <View style={styles.imageContainer}>
                <Image
                 style={styles.image}
                 source={require('../assets/logo.png')}
                />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.textContainer}>
                    <Title numberOfLines={1}>{props.data.item.title}</Title>
                    <Caption>{props.data.item.description}</Caption>
                </View>
                <View style={styles.rateContainer}>
                    <Paragraph style={styles.paragraph}>4.5</Paragraph>
                    <Ionicons name="star" color="#ffbf00" size={25}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        width: "80%",
        alignSelf: 'center',
        height: 220,
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    image: {
        width: "100%",
        height: 150,
        resizeMode: 'stretch',
        ...Platform.select({
            ios: {
                borderRadius: 20,
            },
            android: {
                borderRadius: 5,
            }
        })
    },

    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    rateContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    paragraph: {
        paddingRight: 10
    },

    textContainer: {
        width: "80%"
    }
})
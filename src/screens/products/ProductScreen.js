import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    Button,
    SafeAreaView,
    ScrollView,
    Alert
} from 'react-native';
import {Title, Caption, Paragraph} from 'react-native-paper';

const ProductScreen = (props) => {
    const {service} = props.route.params;
    const deleteData = (id) => {
        fetch(`http://192.168.0.105:5000/services/${id}`, {
            method: 'DELETE'
        })
        Alert.alert(
            "You successfully deleted your service",
        );
        props.route.params.navigation.goBack();
    }

    return (
            <ScrollView contentContainerStyle={{flex: 1}}>
                <View style={styles.serviceMainContainer}>
                    <Image
                        style={styles.image}
                        source={service.image ? { uri: service.image} : require('../../assets/logo.png')}
                    />
                    <Ionicons style={styles.title} name="lock-open" color="#000000" size={50}/>
                </View>
                <ScrollView style={styles.viewContainer}>
                    <View style={styles.listInfo}>
                        <Caption>
                            Title: <Paragraph>{service.title}</Paragraph>
                        </Caption>
                    </View>
                    <View style={styles.listInfo}>
                        <Caption>Type</Caption>
                        <Paragraph>{service.type}</Paragraph>
                    </View>
                    <View style={styles.listInfo}>
                        <Caption>Location</Caption>
                        <Paragraph>{service.city}, {service.country}, {service.address}</Paragraph>
                    </View>
                    <View style={styles.listInfo}>
                        <Caption>Description</Caption>
                        <Paragraph>{service.description}</Paragraph>
                    </View>
                    <View style={styles.listInfo}>
                        <Caption>Transport</Caption>
                        <Paragraph>{service.transport}</Paragraph>
                    </View>
                    <View style={styles.listInfo}>
                        <Caption>Recomandation</Caption>
                        <Paragraph>{service.recomandation}</Paragraph>
                    </View>
                    <View style={styles.listInfo}>
                        <Caption>
                            Price: <Paragraph>{service.price}$</Paragraph>
                        </Caption>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
                        <Image
                            style={{height: 120, width: 110}}
                            source={service.image ? { uri: service.image} : require('../../assets/logo.png')}
                        />
                        <Image
                            style={{height: 120, width: 110}}
                            source={service.image ? { uri: service.image} : require('../../assets/logo.png')}
                        />
                        <Image
                            style={{height: 120, width: 110}}
                            source={service.image ? { uri: service.image} : require('../../assets/logo.png')}
                        />
                    </View>
                    <View style={{...styles.listInfo, width: "30%", alignSelf: 'center'}}>
                        <Button
                            title="Delete"
                            style={{marginBottom:10, height: 20}}
                            onPress={()=>deleteData(service.id)}
                        />    
                    </View>
                </ScrollView >
            </ScrollView >
    )
}

export default ProductScreen;

const styles = StyleSheet.create({
    screenContent: {
        flex: 1,
    },
    serviceMainContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewContainer: {
        flex: 0.7,
        paddingHorizontal: 10
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: 'stretch',
    },
    title: {
        position: 'absolute',
        bottom: 10,
        right: 30,
    },
    listInfo: {
        marginVertical: 2,
        paddingHorizontal: 10,
        paddingTop: 5
    }
})
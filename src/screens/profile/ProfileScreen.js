import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Linking
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Avatar, Title, Subheading} from 'react-native-paper';

const ProfileScreen = (props) => {
    return (
        <SafeAreaView style={styles.screenContent}>
            <View style={styles.mainSection}>
                <Avatar.Image 
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKoBi7WK7jjRuEE9xuWr8QUIztGOoFbbEpAA&usqp=CAU"
                    }}
                    size={140}
                />
                <Title>John Doe</Title>
            </View>
            <View style={styles.additSection}>
                <TouchableOpacity
                 style={styles.info}
                 onPress={()=>{
                     Linking.openURL(`tel:+380979877887`)
                 }}
                >
                    <Ionicons name="call" color="#58B29E" size={35}/>
                    <Subheading style={styles.textInfo}>+380979877887</Subheading>
                </TouchableOpacity>
                <TouchableOpacity
                 style={{...styles.info, backgroundColor: '#F5F5F5'}}
                 onPress={()=>{
                    Linking.openURL(`mailto:test@gmail.com`)
                 }}
                >
                    <Ionicons name="mail" color="#58B29E" size={35}/>
                    <Subheading style={styles.textInfo}>test@gmail.com</Subheading>
                </TouchableOpacity>
                <TouchableOpacity 
                 style={{...styles.info, backgroundColor: '#fff'}}
                 onPress={()=>props.navigation.navigate('Feedbacks')}
                >
                    <Ionicons name="paper-plane" color="#58B29E" size={35}/>
                    <Subheading style={styles.textInfo}>80</Subheading>
                </TouchableOpacity>
                <View style={{...styles.info, backgroundColor: '#F5F5F5'}}>
                    <Ionicons name="star" color="#58B29E" size={35}/>
                    <Subheading style={styles.textInfo}>4.5</Subheading>
                </View>
            </View>
            <View style={styles.contracts}>
                <Title>Rent Contracts</Title>
                <View style={styles.iconsContractsContainer}>
                    <TouchableOpacity
                     hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
                     onPress={()=>{
                         props.navigation.navigate('PartProducts', {title: 'Opened Contracts', isOpened: true})
                     }}
                    >
                        <View style={styles.center}>
                            <Ionicons name="lock-open" color="#58B29E" size={35} />
                            <Text style={{fontSize: 30}}>4</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                     hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
                     onPress={()=>{
                        props.navigation.navigate('PartProducts', {title: 'Closed Contracts', isOpened: false})
                    }}
                    >
                        <View style={styles.center}>
                            <Ionicons name="lock-closed" color="#58B29E" size={35} />
                            <Text style={{fontSize: 30}}>4</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Title>Sales history</Title>
                <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                    <TouchableOpacity
                     hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
                    >
                        <View style={styles.center}>
                            <Ionicons name="archive-outline" color="#58B29E" size={35} />
                            <Text style={{fontSize: 30}}>32</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    screenContent: {
        flex: 1,
        alignItems: 'center'
    },
    mainSection: {
        flex: 0.3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    additSection: {
        flex: 0.35,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    info: {
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInfo: {
        alignSelf: 'center'
    },
    contracts: {
        flex: 0.4,
        width: "100%",
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    iconsContractsContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    center: {
        alignItems: 'center'
    }
})
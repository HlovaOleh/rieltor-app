import React from 'react';
import {View, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BackBtn = (props) => {
    return(
        <View style={styles.headerContainer}>
            <TouchableOpacity
            underlayColor='#042417'
            onPress={()=>{
                props.navigation.goBack()
            }}
            >
                <Ionicons 
                name="chevron-back" 
                size={30} 
                color="#fff"
                />
            </TouchableOpacity>
        </View>
    )
}

export default BackBtn;

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10
    }
})
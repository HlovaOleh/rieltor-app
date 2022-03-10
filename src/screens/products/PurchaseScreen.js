import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const PurchaseScreen = (props) => {
    return (
        <View style={styles.screenContent}>
            <Text>Purchase Screen</Text>
            <Button 
            title="Go back"
            onPress={()=>props.navigation.goBack()}
            />
        </View>
    )
}

export default PurchaseScreen;

const styles = StyleSheet.create({
    screenContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
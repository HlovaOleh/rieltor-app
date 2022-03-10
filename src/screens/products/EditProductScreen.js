import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const EditProductScreen = (props) => {
    return (
        <View style={styles.screenContent}>
            <Text>Edit product Screen</Text>
            <Button 
            title="Go back"
            onPress={()=>props.navigation.goBack()}
            />
        </View>
    )
}

export default EditProductScreen;

const styles = StyleSheet.create({
    screenContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
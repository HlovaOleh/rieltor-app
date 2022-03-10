import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, TouchableHighlight, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput, Title } from 'react-native-paper';

const LoginScreen = (props) => {
    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isEmailValid = (userEmail) => {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(String(userEmail).toLowerCase())
    }

    // const setAuth = () => {
    //     console.log('test')
    //     fetch("http://localhost:8080/allServicesList/")
    //     .then(data => console.log(data))
    //     .catch(err=>console.log(err))
    // }

    return (
        <View style={styles.screenContent}>
            <View style={styles.titleContainer}>
                <Title>Login</Title>
            </View>
            <View style={styles.fieldsContainer}>
                {/* <TextInput
                 style={styles.textInputContainer}
                 mode="outlined"
                 label="Username"
                 value={username}
                 onChangeText={text => setUsername(text)}
                /> */}
                <TextInput
                 style={styles.textInputContainer}
                 mode="outlined"
                 label="Email"
                 value={email}
                 onChangeText={text => setEmail(text)}
                />
                <TextInput
                 style={styles.textInputContainer}
                 mode="outlined"
                 label="Password"
                 value={password}
                 secureTextEntry={true}
                 onChangeText={text => setPassword(text)}
                />
            </View>
            <View style={styles.btn}>
                <Button
                 title="Forward"
                 onPress={()=>{
                     if(email == "" || password == ""){
                         Alert.alert("You didn't enter any email or password!")
                     }else {
                        isEmailValid(email) ? props.navigation.navigate('Main') : Alert.alert("Email is not valid")
                     }
                    //  setAuth();
                    //  props.navigation.navigate('Main')
                 }}
                />
            </View>
            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                <Text>If you are not registered, just </Text>
                <TouchableOpacity
                 style={{justifyContent: 'center', alignItems: 'center'}}
                 hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
                 onPress={()=>{
                     props.navigation.navigate('SignUp')
                 }}
                >
                    <Text style={{fontWeight: 'bold'}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    screenContent: {
        width: "100%",
        marginTop: 100,
    },
    titleContainer:{
        alignItems: 'center'
    },
    fieldsContainer: {
        marginBottom: 10
    },
    textInputContainer: {
        height: 40,
        width: "80%",
        alignSelf: "center"
    },
    btn: {
        alignSelf: 'center',
        width: "30%"
    }
})
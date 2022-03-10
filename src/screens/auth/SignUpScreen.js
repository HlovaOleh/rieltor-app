import React, {useState, useRef} from 'react';
import {View, StyleSheet, Button, Alert, TouchableHighlight} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput, Title } from 'react-native-paper';
import PhoneInput from 'react-native-phone-input';

const SignUpScreen = (props) => {
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState(new Date());
    const [formDate, setFormDate] = useState('');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [passport, setPassport] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(false)
    const phoneRef = useRef(undefined);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        const formDate = `${selectedDate.getDate()} ${monthNames[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`
        setShow(Platform.OS === 'ios');
        setFormDate(formDate);
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };

    const isEmailValid = (userEmail) => {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(String(userEmail).toLowerCase())
    }

    return (
        <View style={styles.screenContent}>
            <View style={styles.titleContainer}>
                <Title>Sign up</Title>
            </View>
            <View style={styles.fieldsContainer}>
                <TextInput
                 style={styles.textInputContainer}
                 mode="outlined"
                 label="First name"
                 value={firstName}
                 onChangeText={text => setFirst(text)}
                />
                <TextInput
                 style={styles.textInputContainer}
                 mode="outlined"
                 label="Last name"
                 value={lastName}
                 onChangeText={text => setLast(text)}
                />
                <PhoneInput
                    style={styles.textInputContainer} 
                    ref={phoneRef}
                    value={phoneNumber}
                    onChangePhoneNumber={setPhoneNumber} 
                />
                <TextInput
                 style={styles.textInputContainer}
                 mode="outlined"
                 label="Username"
                 value={username}
                 onChangeText={text => setUsername(text)}
                />
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
                <View style={{width: "80%", flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between'}}>
                    <TextInput
                        style={{...styles.textInputContainer, width: "60%",}}
                        mode="outlined"
                        label="Birth of date"
                        value={formDate}
                        disabled={true}
                        pointerEvents="none"
                    />
                    <View style={{...styles.btn, justifyContent: 'center'}}>
                        <Button
                        onPress={showDatepicker}
                        title="Select"
                        />
                    </View>
                </View>
                <TextInput
                 style={{...styles.textInputContainer, marginTop: 10}}
                 mode="outlined"
                 label="Passport ID"
                 value={passport}
                 onChangeText={text => setPassport(text)}
                />
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )}
            </View>
            <View style={styles.btn}>
                <Button
                 title="Forward"
                 onPress={()=>{
                     if(email == "" || password == "" || firstName == "" || lastName == "" || passport == "" || phoneNumber == "" || date == ""){
                         Alert.alert("You didn't fill all fields!")
                     }
                     else{
                         isEmailValid(email) ? props.navigation.navigate('Login') : Alert.alert("Email is not valid!");
                     }
                 }}
                />
            </View>
        </View>
    )
}

export default SignUpScreen;

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
    },
})
import React, {useState, useEffect, Component } from 'react';
import {
    Text, 
    View, 
    StyleSheet, 
    Button, 
    ScrollView, 
    Picker, 
    Platform, 
    Image, 
    Alert,
    CheckBox, 
    SafeAreaView
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {TextInput, Title} from 'react-native-paper';
        

const AddProductScreen = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState(null);
    const [transport, setTransport] = useState('');
    const [recomandation, setRec] = useState('');
    const [price, setPrice] = useState('');

    const data = {
        "title": title,
        "description": description,
        "country": country,
        "city": city,
        "address": address,
        "type": type,
        "image": image,
        "transport": transport,
        "recomandation": recomandation,
        "price": price,
    }

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
    }, []);

    const clearState = () => {
        setTitle('');
        setDesc('');
        setCountry('');
        setCity('');
        setAddress('');
        setType('');
        setImage(null);
        setTransport('');
        setRec('');
        setPrice('');
    }

    const postData = () => {
        fetch("http://192.168.0.105:5000/services", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        clearState();
    }
    const [isSelected, setSelection] = useState(false);

    const onChanged = text =>{
        let newText = '';
        let numbers = '0123456789';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
                setPrice(newText)
            }
            else {
                Alert.alert("Please enter numbers only");
            }
        }
        setPrice(newText);
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          setImage(result.uri.toString());
        }
    };

    return (
        <SafeAreaView style={styles.screenContent}>
            <ScrollView>
                <Title style={{alignSelf: 'center'}}>Add service</Title>
                <TextInput
                    style={styles.textInputContainer}
                    underlineColor="transparent"
                    label="Title"
                    value={title}
                    onChangeText={text=>setTitle(text)}
                />
                <TextInput
                    style={{...styles.textInputContainer, height: 80}}
                    underlineColor="transparent"
                    label="Description"
                    multiline={true}
                    value={description}
                    onChangeText={text=>setDesc(text)}
                />
                <TextInput
                    style={styles.textInputContainer}
                    underlineColor="transparent"
                    label="Country"
                    value={country}
                    onChangeText={text=>setCountry(text)}
                />
                <TextInput
                    style={styles.textInputContainer}
                    underlineColor="transparent"
                    label="City"
                    value={city}
                    onChangeText={text=>setCity(text)}
                />
                <TextInput
                    style={styles.textInputContainer}
                    underlineColor="transparent"
                    label="Address"
                    value={address}
                    onChangeText={text=>setAddress(text)}
                />

                {Platform.OS === 'ios' ? 
                <View style={{flexDirection: 'row'}}>
                    <Text>Choose a type: </Text>
                    <Picker
                        style={{marginTop: 10}}
                        selectedValue={type}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setType(itemValue)}
                    >
                        <Picker.Item label="Sell" value="Sell" />
                        <Picker.Item label="Rent" value="Rent" />
                    </Picker> 
                </View>
                : 
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20
                }}>
                    <Text style={{alignSelf: 'center'}}>Choose a type: </Text>
                    <Picker
                        selectedValue={type}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setType(itemValue)}
                    >
                        <Picker.Item label="Sell" value="Sell" />
                        <Picker.Item label="Rent" value="Rent" />
                    </Picker> 
                </View>
                }
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button title="Pick an image from camera roll" onPress={pickImage} />
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
                <TextInput
                style={{...styles.textInputContainer, height: 80}}
                underlineColor="transparent"
                label="Transport"
                multiline={true}
                value={transport}
                onChangeText={text=>setTransport(text)}
                />
                <TextInput
                style={{...styles.textInputContainer, height: 80}}
                underlineColor="transparent"
                label="Recomandation"
                multiline={true}
                value={recomandation}
                onChangeText={text=>setRec(text)}
                />
                <TextInput
                    style={styles.textInputContainer}
                    underlineColor="transparent"
                    label="Price"
                    value={price}
                    onChangeText={(text)=> onChanged(text)}
                />
                <View style={styles.container}>
                    <View style={styles.checkboxInput}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                            /> 
                        <Text style={styles.label}>Do you really want to create this product ?</Text>
                    </View>
                </View>
            
                <View style={styles.container}>
                    <Button 
                     disabled={isSelected ? false : true}
                     title={"Add"}
                     onPress={()=>{
                            postData(),
                            Alert.alert(
                                "Congratulation",
                                "You successful create your service",
                            )
                        }
                     }
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddProductScreen;

const styles = StyleSheet.create({
    screenContent: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 35
    },

    textInputContainer: {
        width: "90%", 
        height: 45, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#58B29E",
        margin: 15
    },

    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        height: 45,
      },

      checkboxInput: {
        flexDirection: "row",
        marginBottom: 20,
      },

      label: {
        margin: 5,
      },
})
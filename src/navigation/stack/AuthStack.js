import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../../screens/auth/LoginScreen';
import SignUpScreen from '../../screens/auth/SignUpScreen';
import Header from '../../components/Header';
import BackBtn from '../../components/BackBtn';
import MainDrawer from '../drawer/MainDrawer';


const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#58B29E"
            },
            headerTintColor: "#fff"
        }}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen 
             name="SignUp" 
             component={SignUpScreen}
             options={({navigation})=>({
                headerLeft: ()=><BackBtn navigation={navigation} />,
                headerTitle: ()=><Header title="Sign up"/>
            })}
            />
            <Stack.Screen name="Main" component={MainDrawer} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default AuthStack;
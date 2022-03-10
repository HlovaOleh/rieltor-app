import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import ProfileScreen from '../../screens/profile/ProfileScreen';
import ProfileEditScreen from '../../screens/profile/ProfileEditScreen';
import Header from '../../components/Header';
import BackBtn from '../../components/BackBtn';
import FeedbacksScreen from '../../screens/profile/FeedbacksScreen';
import PartProductScreen from '../../screens/products/PartProductScreen';

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: "#58B29E"
            },
            headerTintColor: "#fff"
        }}>
            <Stack.Screen 
             name="Profile" 
             component={ProfileScreen}
             options={()=>{
                 return {
                     headerLeft: ()=> null,
                     headerTitle: ()=> <Header title="Profile" />
                 }
             }}
            />
            <Stack.Screen 
             name="ProfileEdit" 
             component={ProfileEditScreen}
             options={({navigation})=>{
                return{
                    headerLeft: ()=> <BackBtn navigation={navigation}/>,
                    headerTitle: ()=> <Header title="Edit"/>
                }
             }}
            />
            <Stack.Screen 
             name="Feedbacks" 
             component={FeedbacksScreen}
             options={({navigation})=>{
                return{
                    headerLeft: ()=> <BackBtn navigation={navigation}/>,
                    headerTitle: ()=> <Header title="Feedbacks"/>
                }
             }}
            />
            <Stack.Screen
             name="PartProducts"
             component={PartProductScreen}
             options={({navigation, route})=>({
                headerLeft: ()=><BackBtn navigation={navigation} />,
                headerTitle: ()=><Header title={route.params.title}/>
                })}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack;
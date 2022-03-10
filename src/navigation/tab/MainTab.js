import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ProductStack from '../stack/ProductStack';
import ProfileStack from '../stack/ProfileStack';
import AddProductScreen from '../../screens/products/AddProductScreen';

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator
         screenOptions={({route})=>({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if(route.name === 'Services') {
                    iconName = focused ? 'search' : 'search-outline';
                }
                else if(route.name === 'Add service') {
                    iconName = focused ? 'add-circle' : 'add-circle-outline';
                }
                else if(route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
         })}
         tabBarOptions={{
             activeTintColor: '#58B29E',
             inactiveTintColor: 'grey'
         }}
        >
            <Tab.Screen
             name="Services" 
             component={ProductStack}
            />
            <Tab.Screen 
             name="Add service" 
             component={AddProductScreen}
            />
            <Tab.Screen 
             name="Profile" 
             component={ProfileStack}
            />
        </Tab.Navigator>
    )
}

export default MainTab;
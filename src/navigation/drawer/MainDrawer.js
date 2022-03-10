import React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';
import MainTab from '../tab/MainTab';
import FeedbacksScreen from '../../screens/profile/FeedbacksScreen';
import StatsScreen from '../../screens/profile/StatsScreen';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
    return (
        <Drawer.Navigator
         drawerContent={props => <DrawerContent {...props} />}
         drawerContentOptions={{
             activeTintColor: "#58B29E",
             inactiveTintColor: 'grey',
         }}
        >
            <Drawer.Screen
             name="Home"
             component={MainTab}
            />
            {/* <Drawer.Screen
             name="Feedbacks"
             component={FeedbacksScreen}
            />
            <Drawer.Screen
             name="Statistics"
             component={StatsScreen}
            /> */}
        </Drawer.Navigator>
    )
}

export default MainDrawer;
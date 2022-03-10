import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import ListScreen from '../../screens/products/ListScreen';
import ProductScreen from '../../screens/products/ProductScreen';
import PurchaseScreen from '../../screens/products/PurchaseScreen';
import EditProductScreen from '../../screens/products/EditProductScreen';
import Header from '../../components/Header';
import BackBtn from '../../components/BackBtn';

const Stack = createStackNavigator();

const ProductStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: "#58B29E"
            },
            headerTintColor: "#fff"
        }}>
            <Stack.Screen 
             name="Services" 
             component={ListScreen}
             options={()=>({
                headerLeft: ()=> null,
                headerTitle: ()=><Header title="Services"/>
             })}
            />
            <Stack.Screen 
             name="Service" 
             component={ProductScreen}
             options={({navigation})=>({
                 headerLeft: ()=><BackBtn navigation={navigation} />,
                 headerTitle: ()=><Header title="Service"/>
             })}
            />
            <Stack.Screen 
             name="Purchase" 
             component={PurchaseScreen} 
             options={({navigation})=>({
                 headerLeft: ()=><BackBtn navigation={navigation} />,
                 headerTitle: ()=><Header title="Purchase" />
             })}
            />
            <Stack.Screen 
             name="EditProduct" 
             component={EditProductScreen}
             options={({navigation})=>({
                 headerLeft: ()=><BackBtn navigation={navigation} />,
                 headerTitle: ()=><Header title="Edit"/>
             })}
            />
        </Stack.Navigator>
    )
}

export default ProductStack;
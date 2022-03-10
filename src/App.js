import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './navigation/stack/AuthStack';
import MainDrawer from './navigation/drawer/MainDrawer';
import store from './store';


export default function App() {
  const [isUserToken, setUserToken] = useState(false);
  return (
    <NavigationContainer>
      <Provider store={store}>
      {isUserToken ? 
        <MainDrawer/>
      :
        <AuthStack />
      }
      </Provider>
    </NavigationContainer>
  );
}



import React from 'react';
import { View,Image } from 'react-native';
import Chats from './Component/Chats';
import Status from './Component/Status';
import Calls from './Component/Calls';
import { NavigationContainer } from '@react-navigation/native';
import Heading from './Component/Head';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Head from './Component/Head';
import { TabBarItem } from 'react-native-tab-view';
import Communities from './Component/Communities';


import TopNav from './navigation/TopNav';

const TopTab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
<Head/>

<TopNav/>
    </NavigationContainer>
    
  )
}

export default App
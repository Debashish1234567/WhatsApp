import { View, Text,Image } from 'react-native';
import React from 'react';
import ChatScreen from '../Component/ChatScreen';
import Chats from '../Component/Chats';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Indexx from './TopNav';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Status from '../Component/Status';
import StatusScreen from '../Component/StatusScreen';
const Stack= createNativeStackNavigator();
const Statusnav = () => {
  return (
    
        <Stack.Navigator>
            <Stack.Screen name="Status" component={Status} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="StatusScreen" component={StatusScreen} options={{headerTitle:'Username'}}></Stack.Screen>
        </Stack.Navigator>
    
  )
}

export default Statusnav
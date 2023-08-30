import { View, Text ,Button} from 'react-native';
import React from 'react';
import ChatScreen from '../Component/ChatScreen';
import Chats from '../Component/Chats';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from 'react-native/Libraries/NewAppScreen';
import Status from '../Component/Status';
const Stack= createNativeStackNavigator();
const ChatNav= () => {
  return (
    
        <Stack.Navigator>
            
            <Stack.Screen name="Chats" component={Chats} options={{headerShown:false}} ></Stack.Screen>
            
            <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerTitle:'Username',headerRight:()=><Button title='right'/> }}></Stack.Screen>
        </Stack.Navigator>
    
  )
}

export default ChatNav
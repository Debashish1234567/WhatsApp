import React from 'react';
import ChatScreen from '../Component/ChatScreen';
import Chats from '../Component/Chats';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from 'react-native/Libraries/NewAppScreen';
import Status from '../Component/Status';
import Calls from '../Component/Calls';
import CallInfo from '../Component/CallInfo';
const Stack= createNativeStackNavigator();
const CallInfoNav= () => {
  return (
    
        <Stack.Navigator>
            
            <Stack.Screen name="Calls" component={Calls} options={{headerShown:false}} ></Stack.Screen>
            
            <Stack.Screen name="CallInfo" component={CallInfo} options={{headerTitle:'Username'}}></Stack.Screen>
        </Stack.Navigator>
    
  )
}

export default CallInfoNav
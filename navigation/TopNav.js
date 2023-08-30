import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Chats from '../Component/Chats';
import Status from '../Component/Status';
import Calls from '../Component/Calls';
import Communities from '../Component/Communities';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Ionicons} from '@expo/vector-icons'

import ChatNav from './ChatNav';
import Statusnav from './Statusnav';
import Heading from '../Component/Head';
import CallInfoNav from './CallInfoNav';
const TopTab = createMaterialTopTabNavigator();
const TopNav = () => {
  return (
    

<TopTab.Navigator screenOptions={{tabBarStyle:{backgroundColor:'#2B8E71'},tabBarLabelStyle:{fontWeight:'bold'}}} initialRouteName='Chats' >

<TopTab.Screen name="Communities" component={Communities} options={{tabBarIcon:({color})=>(<Ionicons name='people' uri={'https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/group2-1024.png'} color={color} size={32} width={35} marginTop={0}  position={'absolute'} top={8} left={0} padding={0}></Ionicons>), title:'' }}></TopTab.Screen>
        <TopTab.Screen name="Chats" component={ChatNav}></TopTab.Screen>
        <TopTab.Screen name="Status" component={Statusnav}></TopTab.Screen>
        <TopTab.Screen name="Calls" component={CallInfoNav}></TopTab.Screen>
        
      </TopTab.Navigator>

    
  )
}

export default TopNav
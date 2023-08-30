import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    TextInput,
    Image,
    Pressable,
  } from 'react-native';
  
  
  import { useState } from 'react';
  
  // You can import from local files
  
  // or any pure javascript modules available in npm

  import React from 'react'
  
  const Heading = () => {
    return (
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            backgroundColor: '#2B8E71',
            paddingTop: 10,
            marginTop:30
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              flex: 1,
              marginLeft: 12,
              color: 'white',
            }}>
            WhatsApp
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Image
                source={{
                  uri: 'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-1024.png',
                }}
                style={{ height: 20, width: 20, margin: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{
                  uri: 'https://cdn4.iconfinder.com/data/icons/linecon/512/find-1024.png',
                }}
                style={{ height: 20, width: 20, margin: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{
                  uri: 'https://cdn0.iconfinder.com/data/icons/very-basic-android-l-lollipop-icon-pack/24/menu2-512.png',
                }}
                style={{ height: 20, width: 20, margin: 5 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    
  
  export default Heading
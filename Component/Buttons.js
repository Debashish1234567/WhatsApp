import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    navigate,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
  export default function Buttons({ navigation }) {
    return (
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          paddingTop: 20,
          paddingBottom: 10,
          backgroundColor: 'green'
        }}>
        <TouchableOpacity style={{ flexGrow: 5.5 }}>
          <Image
            source={{
              uri: 'https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/group2-1024.png',
            }}
            style={{ width: 30, height: 19, marginLeft: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexGrow: 4,
            color: 'grey',
          }}
          onPress={() => navigation.navigate('Chat')}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>
            {' '}
            Chats
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={{
            flexGrow: 4,
            fontWeight: 'bold',
            color: 'grey',
          }}
          onPress={() => navigation.navigate('Status')}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>
            Status
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={{
            flexGrow: 4,
            fontWeight: 'bold',
            color: 'grey',
          }}
          onPress={() => navigation.navigate('Calls')}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>
            {' '}
            Calls
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
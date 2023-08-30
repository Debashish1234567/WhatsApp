import React from 'react'
import { View,Text ,StyleSheet,Image, Pressable} from 'react-native'

const Communities = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri:'https://beebom.com/wp-content/uploads/2022/11/whatsapp-communities-vs-groups.png?w=730&h=487&crop=1&quality=75'}} style={{height:300,width:370}}></Image>
      <Text style={{fontWeight:'bold'}}>
         Stay connected with a community
         </Text>
         <Text style={{padding:20}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
         <Pressable style={{padding:13,alignItems:'center',backgroundColor:'#2B8E71',borderRadius:40,width:290,height:50}}><Text style={{fontWeight:'bold'}}>Start your community</Text></Pressable>
         </View>
  )
}
const styles= StyleSheet.create({
    container:{
        marginTop:50,
        alignItems:'center',
        height:900,     
        borderBottomWidth:1
    }
})
export default Communities


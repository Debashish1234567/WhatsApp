import {
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
    
  } from 'react-native';
import React from 'react'

const CallInfo = () => {
    return (
        <View>
          <View style={styles.container}>
            <TouchableOpacity>
              <View
                style={{
                  ...styles.image1,
                  backgroundColor: '#42CE68',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: 'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png',
                  }}
                  style={{ height: 50, width: 50 }}
                />
              </View>
            </TouchableOpacity>
    
            <View style={styles.data}>
              <View>
                <Text numberOfLines={1} style={styles.name1}>
                  UserName
                </Text>
                <Text>Rtddyfhtfuy</Text>
              </View>
            </View>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_call_48px-1024.png',
              }}
              style={{ height: 26, width: 26, margin: 10 }}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image
              source={{
                uri: 'https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/video_call-1024.png',
              }}
              style={{ height: 26, width: 26, margin: 10 }}
            />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row'}}>
          <View style={{marginTop:35,margin:10}}>
          <Image
                    source={{
                      uri: 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_archive_48px-1024.png',
                    }}
                    style={{ height: 20, width: 25 }}
                  />
          </View>
          <View>
          <Text>16 August</Text>
          <View style={{ ...styles.data, marginTop: 10 }}>
            <View>
              <Text numberOfLines={1} style={{...styles.name1,height:25}}>
                incoming
              </Text>
              <View style={{flexDirection:'row'}}>
                <Image
                  source={{
                    uri: 'https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_call_48px-1024.png',
                  }}
                  style={{ height: 15, width: 15,marginRight:5 ,marginTop:3}}
                />
                <Text>6.31 pm</Text>
              </View>
            </View>
          </View>
          </View>
        </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        height: 60,
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: 'row',
      },
      image1: { width: 50, height: 50, borderRadius: 50, marginRight: 5 },
      data: {
        flexDirection: 'row',
        flex: 1,
      },
      name1: { fontWeight: 'bold', fontSize: 17 },
    });
    

export default CallInfo
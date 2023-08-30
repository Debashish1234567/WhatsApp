import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  PressableOpacity,
  Button,
} from "react-native";
import React from "react";
import Head from './Head'

const Calls = ({ navigation }) => {
  const chat = [
    {
      id: "1",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Deb",
      time: "Today,8:20",
      callUri:
        "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_call_48px-1024.png",
      msg: "Hi Debashish ",
    },
    {
      id: "2",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Rajendra",
      time: "Today,6:20",
      callUri:
        "https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/video_call-1024.png",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "3",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Suneel",
      time: "10 August,8:20",
      callUri:
        "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_call_48px-1024.png",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "4",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Ravi",
      time: "7 August,8:20",
      callUri:
        "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_call_48px-1024.png",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "5",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Shyam",
      time: "7 August,8:20",
      callUri:
        "https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/video_call-1024.png",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "6",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Ram",
      time: "7 August,8:20",
      callUri:
        "https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/video_call-1024.png",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "7",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Hari",
      time: "Today,8:20",
      callUri:
        "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_call_48px-1024.png",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "8",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Deb",
      time: "Today,8:20",
      callUri:
        "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_call_48px-1024.png",
      msg: "Hi Debashish ",
    },
    {
      id: "9",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Rajendra",
      time: "Today,8:20",
      callUri:
        "https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/video_call-1024.png",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "10",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Suneel",
      time: "Today,8:20",
      callUri:
        "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_call_48px-1024.png",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "11",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Ravi",
      time: "Today,8:20",
      callUri:
        "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_call_48px-1024.png",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "12",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Shyam",
      time: "Today,8:20",
      callUri:
        "https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/video_call-1024.png",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "13",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Ram",
      time: "Today,8:20",
      callUri:
        "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_call_48px-1024.png",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "14",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Hari",
      time: "Today,8:20",
      callUri:
        "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_call_48px-1024.png",
      msg: "dfsdfgdgfdfgd",
    },
  ];

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity>
            <View
              style={{
                ...styles.image,
                backgroundColor: "#2B8E71",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/link_hyperlink-2-1024.png",
                }}
                style={{ height: 20, width: 25 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content}>
            <View style={styles.data}>
              <View style={styles.calldata}>
                <Text numberOfLines={1} style={styles.name1}>
                  Create call link
                </Text>
                <Text>share a link for your WhatsApp call</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: "bold", marginLeft: 5 }}> Recent</Text>
        {chat.map((item) => (
          <View style={styles.container} key={item.id}>
            <TouchableOpacity onPress={() => navigation.navigate("CallInfo")}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.content}
              onPress={() => navigation.navigate("CallInfo")}
            >
              <View style={styles.data}>
                <View style={styles.calldata}>
                  <Text numberOfLines={1} style={styles.name}>
                    {item.name}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={{
                        uri: "https://thenounproject.com/api/private/icons/2619413/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
                      }}
                      style={{ height: 29, width: 20 }}
                    />
                    <Text numberOfLines={1} style={styles.time}>
                      {item.time}
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.img}
                  source={{
                    uri: item.callUri,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.callIcon}>
        <Image
          source={{
            uri: "https://cdn0.iconfinder.com/data/icons/evericons-24px-vol-1/24/call-add-128.png",
          }}
          style={{ height: 26, width: 26 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 60,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
  },
  image: { width: 50, height: 50, borderRadius: 50, marginRight: 5 },
  content: { flex: 1, marginTop: 1 },
  data: {
    flexDirection: "row",
  },
  calldata: {
    flex: 1,
  },
  name: { fontWeight: "bold", fontSize: 17 },
  name1: { fontWeight: "bold", fontSize: 19 },
  img: { height: 27, width: 27 },
  time: { color: "grey", marginTop: 3 },
  callIcon: {
    height: 45,
    width: 45,
    backgroundColor: "#2B8E71",
    borderRadius: 7,
    position: "fixed",
    bottom: 50,
    left: 330,
    justifyContent: "center",
    paddingLeft: 10,
  },
});

export default Calls;

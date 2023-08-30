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
  import Head from './Head';
//   import Buttons from './Buttons';
// You can import supported modules from npm

// or any files within the Snack

import React from "react";

const Status = ({ navigation }) => {
  const chat = [
    {
      id: "1",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Deb",
      time: "Today,7:20am",
      msg: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
    },
    {
      id: "2",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Rajendra",
      time: "Today,8:20pm",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "3",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Suneel",
      time: "Today,9:20pm",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "4",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Ravi",
      time: "1 hour ago",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "5",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Shyam",
      time: "8 minutes ago",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "6",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Ram",
      time: "Today,3:20pm",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "7",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Hari",
      time: "4.20",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "8",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Deb",
      time: "7.20",
      msg: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
    },
    {
      id: "9",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Rajendra",
      time: "8.20",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "10",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Suneel",
      time: "9.20",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "11",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Ravi",
      time: "1.20",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "12",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Shyam",
      time: "Today,8:20",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "13",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Ram",
      time: "Today,3:20",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "14",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Hari",
      time: "Today,4:20pm",
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
                ...styles.image1,
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
                  My Status
                </Text>
                <Text>Tap to add status update</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            marginLeft: 12,
            color: "grey",
            marginBottom: 5,
          }}
        >
          Recent updates
        </Text>
        {chat.map((item) => (
          <View style={styles.container} key={item.id}>
            <TouchableOpacity
              onPress={() => navigation.navigate("StatusScreen")}
            >
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.content}
              onPress={() => navigation.navigate("StatusScreen")}
            >
              <View style={styles.data}>
                <Text numberOfLines={1} style={styles.name}>
                  {item.name}
                </Text>
              </View>
              <Text numberOfLines={1} style={styles.msg}>
                {item.time}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.statusIcon}>
        <Image
          source={{
            uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-camera-outline-1024.png",
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
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 5,
    borderWidth: 4,
    borderColor: "green",
  },
  image1: { width: 50, height: 50, borderRadius: 50, marginRight: 5 },
  content: { flex: 1 },
  data: {
    flexDirection: "row",
  },
  name: { flex: 1, fontWeight: "bold", paddingTop: 2, fontSize: 17 },
  name1: { fontWeight: "bold", paddingTop: 2, fontSize: 17 },
  msg: { color: "grey", marginTop: 2 },
  calldata: {
    flex: 1,
  },
  statusIcon: {
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

export default Status;

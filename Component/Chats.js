import React from "react";
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
  navigate,
} from "react-native";
import Head from './Head'

const Chats = ({ navigation }) => {
  const chat = [
    {
      id: "1",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Deb",
      time: "7.20 am",
      msg: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
    },
    {
      id: "2",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Rajendra",
      time: "8.20 am",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "3",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Suneel",
      time: "Yesterday",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "4",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Ravi",
      time: "Yesterday",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "5",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Shyam",
      time: "10/08/23",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "6",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Ram",
      time: "10/08/23",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "7",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Hari",
      time: "10/08/23",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "8",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Deb",
      time: "10/08/23",
      msg: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
    },
    {
      id: "9",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Rajendra",
      time: "10/08/23",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "10",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Suneel",
      time: "10/08/23",
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
      time: "8.20",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "13",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Ram",
      time: "3.20",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "14",
      image:
        "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-1024.png",
      name: "Hari",
      time: "4.20 am",
      msg: "dfsdfgdgfdfgd",
    },
  ];

  return (
    <View>
      <ScrollView>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Image
            source={{
              uri: "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_archive_48px-1024.png",
            }}
            style={{ height: 25, width: 25, marginLeft: 7 }}
          />
          <TouchableOpacity>
            <Text style={{ marginLeft: 7, fontWeight: "bold", fontSize: 17 }}>
              Archived
            </Text>
          </TouchableOpacity>
        </View>
        {chat.map((item) => (
          <Pressable style={styles.container} key={item.id}>
            <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.content}
              onPress={() => navigation.navigate("ChatScreen")}
            >
              <View style={styles.data}>
                <Text numberOfLines={1} style={styles.name}>
                  {item.name}
                </Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <Text numberOfLines={1} style={styles.msg}>
                {item.msg}
              </Text>
            </TouchableOpacity>
          </Pressable>
        ))}
      </ScrollView>
      <View style={styles.chatIcon}>
        <Image
          source={{
            uri: "https://cdn3.iconfinder.com/data/icons/remixicon-communication/24/message-2-line-1024.png",
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
  content: { flex: 1 },
  data: {
    flexDirection: "row",
  },
  name: { flex: 1, fontWeight: "bold", fontSize: 17 },
  time: { color: "grey" },
  msg: { color: "grey" },
  chatIcon: {
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

export default Chats;

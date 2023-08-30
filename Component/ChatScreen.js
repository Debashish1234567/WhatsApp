import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";

// You can import supported modules from npm

// import Head from './head';
// or any files within the Snack
const arr1 = [""];
let a = null;
export default function ChatScreen({ navigation }) {
  const [value, setValue] = useState("");
  const [num, setnum] = useState(16);
  const onSend = () => {
    console.warn("Sending new message", value);
    arr1.push(value);
    setValue("");
  };
  useEffect(() => {
    setnum(num + 1);
  }, [value]);
  const chat = [
    {
      id: "1",
      msg: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
      msg1: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
    },
    {
      id: "2",
      msg: "dfsdfgdgfdfgd",
      msg1: "Hi Debashish dfsdfgdgfdfgdjdflsjd",
    },
    {
      id: "3",
      msg1: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "4",
      msg1: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "5",
      msg1: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "6",
      msg1: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "7",
      msg1: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "8",
      msg1: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
      msg: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
    },
    {
      id: "9",
      msg1: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "10",
      msg1: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "11",
      msg1: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "12",
      msg1: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "13",
      msg1: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsg",
      msg: "dfsdfgdgfdfgd",
    },
    {
      id: "14",
      msg1: "Hi Debashish dfsdfgdgfdfgdjdflsjdhfdkjgfhudgsfksdgfdjhfgdkdjhghsgh",
      msg: "dfsdfgdgfdfgd",
    },
  ];
  return (
    <View>
      <View style={styles.containner}>
        <ScrollView style={{ marginBottom: 150 }}>
          {chat.map((item) => (
            <View key={item.id}>
              <View
                style={{
                  ...styles.self,
                  width: item.msg.length >= 30 ? 250 : 150,
                }}
              >
                <Text style={styles.msg}>{item.msg}</Text>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={{ color: "grey" }}>9.20 am</Text>
                </View>
              </View>
              <View
                style={{
                  ...styles.sender,
                  width: item.msg1.length >= 30 ? 250 : 150,
                }}
              >
                <Text style={styles.msg}>{item.msg1}</Text>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={{ color: "grey" }}>9.20 am</Text>
                </View>
              </View>
            </View>
          ))}
          {/* {arr1.map((data)=>(
            <View key={num}
            style={{
              ...styles.self,
              
            }}>
            <Text style={styles.msg}>{data}</Text>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: 'grey' }}>9.20 am</Text>
            </View>
          </View>
          ))} */}
        </ScrollView>
        <View
          style={{
            height: 65,
            backgroundColor: "#EFEFEF",
            position: "relative",
            bottom: 130,
            right: 0,
            left: 0,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TextInput
            placeholder="Message"
            value={value}
            onChangeText={setValue}
            style={styles.inputText}
          />
          <View style={styles.inputTextIcon}>
            <TouchableOpacity onPress={onSend}>
              <Image
                source={{
                  uri:
                    value.length == 0
                      ? "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678057-microphone-1024.png"
                      : "https://cdn1.iconfinder.com/data/icons/material-core/23/send-1024.png",
                }}
                style={{
                  height: 26,
                  width: 26,
                  marginLeft: 1,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containner: {
    backgroundColor: "whitesmoke",
  },
  self: {
    backgroundColor: "#DCF8b9",
    alignSelf: "flex-end",
    borderRadius: 10,
    padding: 5,
    margin: 7,
  },
  sender: {
    backgroundColor: "white",
    width: 100,
    borderRadius: 10,
    padding: 5,
    margin: 7,
  },
  msg: {
    color: "black",
  },
  inputTextIcon: {
    height: 40,
    width: 40,
    backgroundColor: "#2B8E71",
    borderRadius: 35,
    margin: 5,
    marginTop: 12,
    justifyContent: "center",
  },
  inputText:{
    borderWidth: 1,
    borderRadius: 10,
    height: 45,
    flexGrow: 2,
    margin: 5,
    marginTop: 10,
    paddingLeft: 5,
  }
});

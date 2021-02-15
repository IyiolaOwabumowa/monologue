import React from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Username from "../userPack/Username";
import Avatar from "../userPack/Avatar";
import { useNavigation } from "@react-navigation/native";
const width = Dimensions.get("window").width;
function ReplyComment() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.replyBox}>
        <View style={{marginRight:5}}>
          <Avatar
            size={"extrasmall"}
            imageUri={"https://reactnative.dev/img/tiny_logo.png"}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Username
            removeRef={true}
            username={"lalaakindoju"}
            verified={false}
          />
        </TouchableOpacity>

        <View style={{flex:1, flexDirection:"row",  flexWrap:"wrap"}}>
        
          <Text style={styles.commentText}>I love this  I love this  </Text>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.replyButton}>Reply</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.replyButton}>View 256 replies</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ReplyComment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  replyBox: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
    marginLeft: 10,
    borderWidth: 1,
  },
  commentText: {
    color: "white",
    marginLeft: 9
  },
  replyButton: {
    color: "white",
    marginLeft: 9,

    fontSize: 12,
  },
});

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
import { useNavigation } from "@react-navigation/native";
const width = Dimensions.get("window").width;
function Comment(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.commentsContainer}>
        <View style={styles.commentBox}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Username
              removeRef={true}
              username={"lalaakindoju"}
              verified={true}
            />
          </TouchableOpacity>

          <View>
            <Text style={styles.commentText}>I love this... Go Iyi!</Text>
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
        {props.children}
      </View>
    </View>
  );
}

export default Comment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  commentBox: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    borderWidth: 1
  },
  commentText: {
    color: "white",
    marginLeft: 9,
  },
  replyButton: {
    color: "white",
    marginLeft: 9,
    marginTop: 5,
    fontSize: 12,
  },
  commentsContainer: {
    borderWidth: 1,
    borderBottomColor: "#181818",
  },
});

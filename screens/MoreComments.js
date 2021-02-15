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
import Comment from "../components/postPack/Comment";
import ReplyComment from "../components/postPack/ReplyComment";
import SendMessage from "../components/inputPack/SendMessage";

const width = Dimensions.get("window").width;

function MoreComments() {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    keyboardVerticalOffset={Platform.select({
      ios: () => 70,
      android: () => 50,
    })()}
  >
      <ScrollView>
        <Comment>
          <ReplyComment />
          <ReplyComment />
        </Comment>
        <Comment>
          <ReplyComment />
          <ReplyComment />
        </Comment>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </ScrollView>

      <View><SendMessage/></View>

    </KeyboardAvoidingView>
  );
}

export default MoreComments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  messageBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

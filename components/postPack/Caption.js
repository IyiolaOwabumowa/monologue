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
} from "react-native";

const width = Dimensions.get("window").width;

function Caption(props) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontWeight:"100" }}>
      <Text style={{fontWeight:"700"}}>{props.username}</Text> {" "}This actually happened on my way to school and I decided to bring it back to life..lmao...Please upvote my video
      </Text>
    </View>
  );  
}

export default Caption;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding:10
  },
  textStyle: {
    flex: 1,
    fontWeight: "100",
    color: "white",
  },
  usernameStyle: {
    fontWeight: "700",
    fontSize: 13,
    color: "white",
  },

  badgeStyle: {
    width: 14,
    height: 14,
  },
});

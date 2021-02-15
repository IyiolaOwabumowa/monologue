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
import FeedCardHeader from "./FeedCardHeader";
import FeedCardFooter from "./FeedCardFooter";

const width = Dimensions.get("window").width;
function FeedCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <FeedCardHeader />
        <View style={styles.postCard}></View>
        <FeedCardFooter/>
      </View>
    </View>
  );
}

export default FeedCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom:50
  },

  card: {
    borderColor: "#181818",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  postCard: {
    width: width,
    height: width,
    backgroundColor: "#1e1e1e",
  },
});

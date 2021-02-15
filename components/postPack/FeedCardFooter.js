import React, { useState, useEffect } from "react";
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
import Caption from "./Caption";
import CommentsSnippet from "./CommentsSnippet";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;

function FeedCardFooter(props) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.infoBar}>
        <Text style={styles.footerBarText}>
          Click on Upvote or Downvote above this video
        </Text>
      </View>
      <View style={styles.postDetailsBar}>
        <Caption username={"iyiola"} verified={true} />
        <View>
          <CommentsSnippet />
          <TouchableOpacity onPress={()=>{
            navigation.navigate("MoreComments")
          }} activeOpacity={0.8}>
            <Text style={styles.commentExpand}>View all 40 Comments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default FeedCardFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  footerBarText: {
    color: "#F45B69",
    fontWeight: "100",
    // fontFamily: "Whitney-BlackSC"
  },
  commentExpand: {
    color: "white",
    marginLeft: 10,
    marginTop:10,
    fontWeight: "700",
  },
  infoBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    height: 30,
    backgroundColor: "#101010",
  },
  postDetailsBar: {
    flexGrow: 1,
    paddingBottom:20,
    backgroundColor: "#000",
  },
});

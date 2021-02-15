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
import { ActionSheet } from "native-base";

import Avatar from "../userPack/Avatar";
import Username from "../userPack/Username";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleDoubleUp,
  faAngleDoubleDown,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

const width = Dimensions.get("window").width;
var BUTTONS = [
  "Submit Your Entry",
  "Award Role",
  "Send Message",
  "Delete Post",
  "Cancel",
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

function FeedCardHeader(props) {
  const [clicked, setClicked] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.mainBar}>
        <Avatar
          size={"small"}
          imageUri={"https://reactnative.dev/img/tiny_logo.png"}
        />
        <TouchableOpacity activeOpacity={0.9}>
          <Username
            fullName={"Iyiola Owabumowa"}
            username={"iyiola"}
            verified={true}
          />
        </TouchableOpacity>

        <View style={styles.alignToRight}>
          <TouchableOpacity style={styles.votes} activeOpacity={0.7}>
            <FontAwesomeIcon color="#fff" size={30} icon={faAngleDoubleUp} />
            <Text style={styles.textStyle}>1M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.votes, { marginRight: 20 }]}
            activeOpacity={0.7}
          >
            <FontAwesomeIcon color="#fff" size={30} icon={faAngleDoubleDown} />
            <Text style={styles.textStyle}>189k</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                },
                (buttonIndex) => {
                  setClicked(BUTTONS[buttonIndex]);
                }
              )
            }
            style={[styles.votes]}
            activeOpacity={0.2}
          >
          <View style={{padding:5}}>
          <FontAwesomeIcon color="#fff" size={20} icon={faEllipsisV} />

          </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.subBar}>
          <Text style={styles.subBarText}>
            Casting Call for Pitch Perfect 3
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default FeedCardHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  textStyle: {
    color: "white",
    fontFamily: "Whitney-BlackSC",
  },
  subBarText: {
    color: "#F45B69",
    fontFamily: "Whitney-BlackSC",
  },
  votes: {
    marginRight: 6,

    flexDirection: "row",
    alignItems: "flex-end",
  },
  mainBar: {
    flex: 1,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    backgroundColor: "#000",
  },
  alignToRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 5,
  },
  subBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    backgroundColor: "#101010",
  },
});

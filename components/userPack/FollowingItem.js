import React from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Button, Input, Item, Spinner } from "native-base";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleDoubleUp,
  faAngleDoubleDown,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "./Avatar";
import Username from "./Username";

const width = Dimensions.get("window").width;

function FollowingItem() {
  return (
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
          
        {/* The follow button */}

        {/* <Button
          activeOpacity={0.9}
          style={[styles.profileCardButtons, { backgroundColor: "#323232" }]}
        >
          <Text style={styles.buttonText}>FOLLOW</Text>
        </Button> */}

        <Button
          activeOpacity={0.9}
          style={[styles.profileCardButtons, { backgroundColor: "#F45B69" }]}
        >
          <Text style={styles.buttonText}>FOLLOWED</Text>
        </Button>
      </View>
    </View>
  );
}

export default FollowingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  kContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  profileCardButtons: {
    flex: 0.5,
    height: 30,
    padding: 10,
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Whitney-BlackSC",
    fontSize: 12,
  },
  textInput: {
    color: "#575757",
    fontSize: 14,
    paddingLeft: 25,
  },
  itemStyle: {
    borderColor: "#101010",
    backgroundColor: "#101010",
    marginLeft: 20,
    marginRight: 20,

    borderRadius: 5,
  },
  tinyText: {
    fontSize: 12,
    marginTop: 17,
  },

  registerButton: {
    backgroundColor: "#000",

    height: 60,
    width: width - 40,
    marginTop: 15,
    paddingLeft: 30,
    justifyContent: "space-between",
    paddingRight: 30,
  },
  loginButton: {
    backgroundColor: "#1a1a1a",
    height: 60,
    marginTop: 15,
    width: width - 40,
    paddingLeft: 30,
    justifyContent: "space-between",
    paddingRight: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    color: "white",
    fontFamily: "Whitney-BlackSC",
  },
  errorMessage: {
    color: "#F46270",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  loginInfo: {
    color: "#575757",
    fontFamily: "Whitney-BlackSC",
    marginLeft: 20,
    marginTop: 20,
  },
  mainBar: {
    flex: 1,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    backgroundColor: "#000",
    borderBottomColor: "#181818",
    borderWidth: 1,
  },
  alignToRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20,
  },
});

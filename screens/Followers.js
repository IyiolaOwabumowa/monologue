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
import Avatar from "../components/userPack/Avatar";
import { Button, Input, Item, Spinner } from "native-base";

import Username from "../components/userPack/Username";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleDoubleUp,
  faAngleDoubleDown,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import FollowerItem from "../components/userPack/FollowerItem";

const width = Dimensions.get("window").width;

function Followers() {
  return (
    <ScrollView style={styles.container}>
      <FollowerItem />
      <FollowerItem />
      <FollowerItem />
    </ScrollView>
  );
}

export default Followers;

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

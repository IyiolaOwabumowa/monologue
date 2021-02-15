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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Button, Input, Item, Spinner } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import Heading from "../components/fontHeaders/Heading";

const width = Dimensions.get("window").width;

function EditProfile() {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.Item}>
        <Heading heading={"Profile Picture"} />
        <Button
          activeOpacity={0.9}
          style={[
            styles.loginButton,
            { backgroundColor: "#F45B69", color: "black" },
          ]}
          block
        >
          <FontAwesomeIcon color="#000" size={15} icon={faCamera} />

          <Text style={[styles.buttonText, { marginLeft: 7 }]}>
           Choose your profile picture
          </Text>
        </Button>
      </View>

      <View style={styles.Item}>
        <Heading heading={"Username"} />
        <Item style={styles.inputStyle}>
          <Input
            style={styles.textInput}
            placeholder="Type an amazing username here!"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardAppearance={"dark"}
          />
        </Item>
      </View>

      <View style={styles.Item}>
        <Heading heading={"Bio"} />
        <Item style={styles.inputStyle}>
          <Input
            style={[styles.textInput, { marginBottom: 15 }]}
            placeholder="Convince us about your acting!"
            multiline={true}
            autoCorrect={false}
            keyboardAppearance={"dark"}
          />
        </Item>
      </View>

      <View style={styles.Item}>
        <Heading heading={"Category"} />
        <Item style={styles.inputStyle}>
          <Input
            style={styles.textInput}
            placeholder="Select an acting category"
            autoCorrect={false}
            keyboardAppearance={"dark"}
          />
        </Item>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  Item: {
    marginBottom: 30
  },

  textInput: {
    paddingLeft: 0,
    color: "#575757",
    fontSize: 14,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  inputStyle: {
    marginLeft: 0,
    borderColor:"#181818"
  },
  loginButton: {
    height: 60,
    marginTop: 15,
    width: width - 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  buttonText: {
    fontFamily: "Whitney-BlackSC",
  },
});

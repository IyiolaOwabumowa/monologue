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
import { Button, Input, Item, Spinner } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlane, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const width = Dimensions.get("window").width;

function SendMessage() {
  return (
    <View style={styles.messageBar}>
      <Item style={styles.inputStyle}>
        <Input
          style={[styles.textInput, { marginBottom: 15 }]}
          placeholder="Type a reply to this submission"
          multiline={true}
        
          autoCorrect={false}
          placeholderTextColor={"white"}
          keyboardAppearance={"dark"}
        />
      </Item>
      <TouchableOpacity activeOpacity={0.7} >
      <FontAwesomeIcon size={23} icon={faPaperPlane} color="#F45B69" />

      </TouchableOpacity>

      
    </View>
  );
}

export default SendMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  messageBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingTop:5,
    borderTopWidth: 1,
    borderTopColor: "#181818",
    backgroundColor: "#000",
  },
  inputStyle: {
    marginLeft: 0,
    borderColor:"transparent",
    maxHeight: 80

  },


  textInput: {
    paddingLeft: 0,
    color: "white",
    fontSize: 14,
    flex: 0.85,
    flexDirection: "row"
  },
});

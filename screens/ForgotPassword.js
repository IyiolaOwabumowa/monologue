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
  KeyboardAvoidingView
} from "react-native";
import { Button, Input, Item } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const width = Dimensions.get("window").width;

const ForgotPassword = (props) => {
  return (
    <KeyboardAvoidingView
      style={styles.kContainer}
      behavior="padding"
      keyboardVerticalOffset={Platform.select({
        ios: () => 50,
        android: () => 50
      })()}
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Item style={[styles.itemStyle, { marginTop: 20 }]}>
          <Input
            style={styles.textInput}
            placeholder="Email"
            keyboardAppearance={"dark"}
            spellCheck={false}

            autoCapitalize = 'none'
            keyboardType="email-address"
            
          />
        </Item>
     

        <TouchableOpacity  onPress={()=>{props.navigation.navigate("Signup")}}  activeOpacity={0.8}>
          <Text style={[styles.tinyText, { color: "#575757", marginLeft: 20 }]}>
            Want a new account? Click Here!
          </Text>
        </TouchableOpacity>

        <View style={{ position: "absolute", bottom: 30 }}>
          <Button activeOpacity={0.95} style={styles.loginButton} block>
            <Text style={styles.buttonText}>SEND RESET LINK</Text>
            <FontAwesomeIcon color="#000" size={25} icon={faAngleRight} />
          </Button>
          
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  kContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000"
  },

  textInput: {
    color: "#575757",
    fontSize: 14,
    paddingLeft: 25
  },
  itemStyle: {
    borderColor: "#101010",
    backgroundColor: "#101010",
    marginLeft: 20,
    marginRight: 20,
    
    borderRadius: 5
  },
  tinyText: {
    fontSize: 12,
    marginTop: 25
  },

  registerButton: {
    backgroundColor: "#000",

    height: 60,
    width: width - 40,
    marginTop: 15,
    paddingLeft: 30,
    justifyContent: "space-between",
    paddingRight: 30
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
    marginRight: 20
  },
  buttonText: {
    color: "white",
    fontFamily: "Whitney-BlackSC"
  }
});

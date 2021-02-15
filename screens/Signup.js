import React, {useState} from "react";
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
  ScrollView
} from "react-native";
import { Button, Input, Item } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import validateInput from "../assets/utils/validation";
import { useDispatch } from "react-redux";


const width = Dimensions.get("window").width;

const Signup = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [username, setUsername] = useState(null)
  const [usernameError, setUsernameError] = useState("")


  return (
    <KeyboardAwareScrollView
      style={styles.kContainer}
      behavior="padding"
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps= 'always'
      
      enabled
    >
    
        <StatusBar barStyle="light-content" />
        <Text style={styles.loginInfo}>Create your monologue account</Text>


        <Item style={[styles.itemStyle, { marginTop: 20 }]}>
          <Input
            style={styles.textInput}
            placeholder="Username"
            keyboardAppearance={"dark"}
            spellCheck={false}
            autoCapitalize = 'none'
            onChangeText = {text => {
              setUsername(text)
              setUsernameError(validateInput({ type: "username", value: text }))
              // dispatch(authActions.clearLoginErrors())
            }}
            
          />
        </Item>

        <Item style={[styles.itemStyle, { marginTop: 15 }]}>
          <Input
            style={styles.textInput}
            placeholder="Full Name"
            keyboardAppearance={"dark"}
            spellCheck={false}
            autoCapitalize = 'none'
            
          />
        </Item>

        <Item style={[styles.itemStyle, { marginTop: 15 }]}>
          <Input
            style={styles.textInput}
            placeholder="Email"
            keyboardAppearance={"dark"}
            spellCheck={false}
            autoCapitalize = 'none'
            keyboardType="email-address"
          />
        </Item>
        <Item style={[styles.itemStyle, { marginTop: 15 }]}>
          <Input
            style={styles.textInput}
            placeholder="Password"

            autoCapitalize = 'none'
            secureTextEntry={true}
            keyboardAppearance={"dark"}
            spellCheck={false}
          />
        </Item>
        <Item style={[styles.itemStyle, { marginTop: 15 }]}>
          <Input
            style={styles.textInput}
            placeholder="Confirm Password"
            autoCapitalize = 'none'
            secureTextEntry={true}
            keyboardAppearance={"dark"}
            spellCheck={false}
          />
        </Item>
       
        <View >
          <Button activeOpacity={0.95} style={styles.loginButton} block>
            <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
            <FontAwesomeIcon color="#000" size={25} icon={faAngleRight} />
          </Button>
          <TouchableOpacity  onPress={()=>{props.navigation.navigate("Login")}}  activeOpacity={0.8}>
            <Text
              style={[
                styles.tinyText,
                { textAlign: "center", color: "#777777", marginLeft: 20, marginBottom:20 }
              ]}
            >
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </View>
       
    </KeyboardAwareScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#000"
  },
  kContainer: {
    flex: 1,
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
  },

  loginInfo:{
    color: "#575757",
    fontFamily: "Whitney-BlackSC",
    marginLeft:20,
    marginTop:20
  }
});

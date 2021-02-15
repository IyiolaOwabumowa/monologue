import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "native-base";

import { authActions } from "../src/actions/auth.actions";
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
import { Button, Input, Item } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import validateInput from "../assets/utils/validation";

const width = Dimensions.get("window").width;

const Login = (props) => {
  const dispatch = useDispatch();
  const loggingIn = useSelector((state) => state.authReducer.loggingIn);
  const loginError = useSelector((state) => state.authReducer.loginErrorMessage);
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (email == null && password == null) {
      dispatch(authActions.clearLoginErrors());
    }
  }, [email, password]);

  const handleSubmit = () => {
    const validateEmail = validateInput({ type: "email", value: email });
    const validatePassword = validateInput({
      type: "password",
      value: password,
    });

    setEmailError(validateEmail);
    setPasswordError(validatePassword);

    if (emailError == null && passwordError == null) {
      dispatch(authActions.login(email, password));
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.kContainer}
      behavior="padding"
      keyboardVerticalOffset={Platform.select({
        ios: () => 60,
        android: () => 50,
      })()}
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.loginInfo}>
          Login with your email to start auditioning
        </Text>
        <Item style={[styles.itemStyle, { marginTop: 20 }]}>
          <Input
            style={styles.textInput}
            placeholder="Email"
            keyboardAppearance={"dark"}
            spellCheck={false}
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmailError(validateInput({ type: "email", value: text }));
              dispatch(authActions.clearLoginErrors());
            }}
          />
        </Item>
        {emailError ? (
          <Text style={styles.errorMessage}>{emailError}</Text>
        ) : null}
        <Item style={[styles.itemStyle, { marginTop: 15 }]}>
          <Input
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            keyboardAppearance={"dark"}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError(
                validateInput({ type: "password", value: text })
              );

              dispatch(authActions.clearLoginErrors());
            }}
          />
        </Item>
        {passwordError ? (
          <Text style={styles.errorMessage}>{passwordError}</Text>
        ) : null}

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("ForgotPassword");
          }}
          activeOpacity={0.8}
        >
          <Text style={[styles.tinyText, { color: "#777777", marginLeft: 20 }]}>
            Forgot Password? Click Here!
          </Text>
        </TouchableOpacity>

        <Text style={styles.errorMessage}>{loginError}</Text>

        <View style={{ position: "absolute", bottom: 30 }}>
          <View>
            <Button
              onPress={() => {
                handleSubmit();
              }}
              activeOpacity={0.95}
              style={styles.loginButton}
              block
            >
              {loggingIn ? (
                <>
                  <Spinner color="#fff" size="small" />
                  <FontAwesomeIcon color="#000" size={25} icon={faAngleRight} />
                </>
              ) : (
                <>
                  <Text style={styles.buttonText}>LOGIN</Text>
                  <FontAwesomeIcon color="#000" size={25} icon={faAngleRight} />
                </>
              )}
            </Button>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Signup");
            }}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tinyText,
                { textAlign: "center", color: "#777777", marginLeft: 20 },
              ]}
            >
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

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
});

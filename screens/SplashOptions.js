import React, { useState, useEffect } from "react";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";
import { Button, Input, Item, Spinner } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Splash from "./Splash";

const width = Dimensions.get("window").width;

const SplashOptions = (props) => {
  const [LogoImage, setLogoImage] = useState(null);
  const [Bg, setBg] = useState(null);
  const [ready, setReady] = useState(false);
  const bg = require("../assets/login_image.png");
  const logo = require("../assets/full_logo.png");

  useEffect(() => {
    const loadImages = async () => {
      await Asset.loadAsync(bg,logo);
      setReady(true);
    };

    loadImages();


    return ()=>{
      setReady(false)
    }
  }, []);

  if (!ready) {
    return <Splash />;
  }

  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={bg}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "contain",
          alignItems: "center"
        }}
      >
        <StatusBar barStyle="dark-content" />
     
        <Image source={logo} style={styles.LogoTop} />
        <Text style={{ top: 80,  }}>
          Everyone can audition for movies now!
        </Text>

        <View style={{ position: "absolute", bottom: 30 }}>
          <Button onPress={()=>{props.navigation.navigate("Signup")}} activeOpacity={0.95} style={styles.registerButton} block>
            <Text style={styles.buttonText}>REGISTER</Text>
            <FontAwesomeIcon color="#fff" size={25} icon={faAngleRight} />
          </Button>
          <Button onPress={()=>{props.navigation.navigate("Login")}} activeOpacity={0.95} style={styles.loginButton} block>
            <Text style={styles.buttonText}>LOGIN</Text>
            <FontAwesomeIcon color="#000" size={25} icon={faAngleRight} />
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },

  LogoTop: {
    width: "70%",
    resizeMode: "contain",
    top: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  registerButton: {
    backgroundColor: "#000",

    height: 60,
    width: width - 30,
    marginTop: 15,
    paddingLeft: 30,
    justifyContent: "space-between",
    paddingRight: 30
  },
  loginButton: {
    backgroundColor: "#1a1a1a",
    height: 60,
    marginTop: 15,
    width: width - 30,
    paddingLeft: 30,
    justifyContent: "space-between",
    paddingRight: 30
  },
  buttonText: {
    color: "white",
    fontFamily: "Whitney-BlackSC"
  }
});

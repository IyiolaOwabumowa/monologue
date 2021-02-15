import React from "react";
import { StyleSheet, StatusBar, Text, View, Image } from "react-native";
import { Spinner } from "native-base";

const Splash = props => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Image
        source={require("../assets/logo.png")}
        style={{ width: "40%", height: "40%", resizeMode: "contain" }}
      />
      {props.loader ? <Spinner color="#fff" size="small" /> : null}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  }
});

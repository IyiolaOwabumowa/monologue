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

const width = Dimensions.get("window").width;

function Username(props) {
  const usernameStyle = {
    fontWeight: props.fullName ? "200" : "700",
    fontSize: props.fullName ? 12 : 13,
    color: "white",
    marginLeft: props.fullName ? 10 : null,
  };

  const fullNameStyle = {
    fontWeight: "700",
    fontSize: 13,
    color: "white",
    marginLeft: 10,
  };

  return (
    <View style={styles.container}>
      {props.fullName ? (
        <>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={fullNameStyle}>{props.fullName}</Text>

              {props.verified ? (
                <Image
                  source={require("../../assets/ver_badge.png")}
                  style={styles.badgeStyle}
                />
              ) : null}
            </View>

            <Text style={usernameStyle}>
            {props.removeRef ? null : "@"}
              {props.username}
            </Text>
          </View>
        </>
      ) : (
        <>
          <Text style={usernameStyle}>
            {props.removeRef ? null : "@"}
            {props.username}
          </Text>
          {props.verified ? (
            <Image
              source={require("../../assets/ver_badge.png")}
              style={styles.badgeStyle}
            />
          ) : null}
        </>
      )}
    </View>
  );
}

export default Username;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  badgeStyle: {
    width: 14,
    height: 14,

    marginLeft: 4,
  },
});

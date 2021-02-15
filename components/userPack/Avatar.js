import React, { useState, useEffect } from "react";
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

//Avatar Component
// Props [size: large,small
//        bordered: true, false
//        borderWidth: Number
//        imageUri: String
//       ]

function Avatar(props) {
  const [avatarStyle, setavatarStyle] = useState(null);

  useEffect(() => {
    if (props.size == "extrasmall") {
      const avt = {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: props.bordered ? "#F45B69" : null,
        borderWidth: props.borderWidth ? props.borderWidth : null,
      };
      setavatarStyle(avt);
    } else {
      const avt = {
        width: props.size == "small" ? 30 : 100,
        height: props.size == "small" ? 30 : 100,
        borderRadius: props.size == "small" ? 20 : 50,
        borderColor: props.bordered ? "#F45B69" : null,
        borderWidth: props.borderWidth ? props.borderWidth : null,
      };
      setavatarStyle(avt);
    }
  }, [props.size]);

  return (
    <Image
      style={avatarStyle}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

export default Avatar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

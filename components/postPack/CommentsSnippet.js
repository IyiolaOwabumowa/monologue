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
import Username from "../userPack/Username";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
function CommentsSnippet() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Username
          username={"morganslaveman"}
          removeRef={true}
          verified={true}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={{ color: "white", marginLeft: 5 }}>
          I love this! Send a dm.
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CommentsSnippet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
  },

  card: {
    borderColor: "#181818",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  postCard: {
    width: width,
    height: width,
    backgroundColor: "#1e1e1e",
  },
});

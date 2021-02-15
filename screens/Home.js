import React, { useEffect } from "react";
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
import FeedCard from "../components/postPack/FeedCard";
import { Toast } from "native-base";
const width = Dimensions.get("window").width;
const notifications = {
  comments: "Comment Sent",
  message: "iyiola just sent you a message",
  reply: "iyiola just replied your comment 'Thank you so much for...'",
  follow: "morganfreeman just started following you",
  verification: "Monologue just verified you",
  castingcall: "iyiola just posted a casting call",
  ad: {
    stopped:"Your ad has been stopped"
  }
}


function Home(props) {
  useEffect(() => {
    // Toast.show({
    //   text: notifications["follow"],
    //   textStyle: {
    //     fontSize: 14,
    //     paddingLeft: 10,
    //   },
    //   duration: 9000,
    //   style: {
    //     backgroundColor: "#F45B69"
    //   },
    // });
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContainer}
    >
      <StatusBar barStyle="light-content" />

      <FeedCard />
      <FeedCard />
      <FeedCard />
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

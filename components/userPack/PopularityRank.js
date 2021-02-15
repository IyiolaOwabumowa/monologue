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

function PopularityRank(props) {
  return(
    <View style={styles.container}>
      <View style={styles.prStyle}>
      <Text style={styles.textStyle}>Popularity Rank: </Text><Text style={styles.boldStyle}>{props.ranking}</Text>
      </View>
    </View> 
  );
}

export default PopularityRank;

const styles = StyleSheet.create({
  container: {
   justifyContent:"flex-end"
  },
  prStyle:{
    flexDirection:"row"
  },
  textStyle: {
    fontWeight: "100",
    fontSize: 11,
    marginTop:10,
    color:"white"
  },
  boldStyle: {
    fontWeight: "700",
    fontSize: 11,
    marginTop:10,
    color:"white"
  },
  row: {
    flexDirection: "row",
  },
});

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../src/actions/user.actions";
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
import { Button, Input, Item, Spinner } from "native-base";

import Avatar from "../components/userPack/Avatar";
import Username from "../components/userPack/Username";
import PopularityRank from "../components/userPack/PopularityRank";
import Bio from "../components/userPack/Bio";

const width = Dimensions.get("window").width;

function Profile(props) {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    dispatch(userActions.getUser(1));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.profileCard}>
        <View style={styles.left}>
          <Avatar
            size={"large"}
            bordered={false}
            borderWidth={2}
            imageUri={"https://reactnative.dev/img/tiny_logo.png"}
          />
          <PopularityRank ranking={"292nd"} />
        </View>
        <View style={styles.right}>
          <Username
            username={props.username ? props.username : username}
            verified={true}
          />
          <Bio
            text={
              "CEO and Founder of Monologue. I eat Mangoes for a living... LMAO"
            }
          />

          <View style={styles.buttonRow}>
            {props.username == username || props.username == undefined ? (
              <>
                <Button
                  activeOpacity={0.9}
                  style={[
                    styles.profileCardButtons,
                    { backgroundColor: "#323232" },
                  ]}
                  onPress ={()=>{props.navigation.navigate("EditProfile")}}
                >
                  <Text style={[styles.buttonText, { color: "white" }]}>
                    EDIT PROFILE
                  </Text>
                </Button>
              </>
            ) : (
              <>
                <Button
                  activeOpacity={0.9}
                  style={[
                    styles.profileCardButtons,
                    { backgroundColor: "#F45B69" },
                  ]}
                >
                  <Text style={[styles.buttonText]}>FOLLOWED</Text>
                </Button>
                <Button
                  activeOpacity={0.9}
                  style={[
                    styles.profileCardButtons,
                    { marginLeft: 20, backgroundColor: "#323232" },
                  ]}
                >
                  <Text style={[styles.buttonText, { color: "white" }]}>
                    MESSAGE
                  </Text>
                </Button>
              </>
            )}
          </View>
        </View>
      </View>
      <View style={styles.countContainer}>
        <TouchableOpacity activeOpacity={0.6} style={styles.countView} onPress={()=>{props.navigation.navigate("Followers")}}>
          <Text style={styles.countNumber}>2M</Text>
          <Text style={styles.countText}> Followers</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} style={styles.countView} onPress={()=>{props.navigation.navigate("Following")}}>
          <Text style={styles.countNumber}>90</Text>
          <Text style={styles.countText}> Following</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} style={styles.countView}>
          <Text style={styles.countNumber}>23</Text>
          <Text style={styles.countText}> Landed Roles</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.galleryContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.thumbnail}
        ></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#000",
  },

  galleryContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  thumbnail: {
    backgroundColor: "grey",
    borderWidth: 0.5,
    height: width / 3,
    width: width / 3,
  },
  countNumber: {
    color: "#F45B69",
    fontWeight: "700",
    fontFamily: "Whitney-BlackSC",
  },
  countText: {
    color: "white",
    fontWeight: "700",
    fontFamily: "Whitney-BlackSC",
  },
  profileCard: {
    flexDirection: "row",
  },
  left: {
    flex: 1,
    padding: 10,
  },
  right: {
    flex: 1.8,
    padding: 10,
  },
  boxOne: {
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "gold",
    padding: 20,
  },
  profileCardButtons: {
    flex: 1,
    height: 30,
    padding: 10,
    justifyContent: "center",
  },
  countContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "black",
    padding: 20,
  },
  countView: {
    flexDirection: "row",
    padding: 5,
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  buttonText: {
    fontFamily: "Whitney-BlackSC",
    fontSize: 12,
  },
});

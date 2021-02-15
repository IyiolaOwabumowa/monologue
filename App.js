import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SplashOptions from "./screens/SplashOptions";
import * as Font from "expo-font";
import Login from "./screens/Login";
import Splash from "./screens/Splash";
import { Asset } from "expo-asset";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./screens/Signup";
import ForgotPassword from "./screens/ForgotPassword";
import { authActions } from "./src/actions/auth.actions";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile";
import { TouchableOpacity } from "react-native-gesture-handler";
import Home from "./screens/Home";
import Avatar from "./components/userPack/Avatar";
import { Root, Toast } from "native-base";
import MoreComments from "./screens/MoreComments";
import Followers from "./screens/Followers";
import Following from "./screens/Following";
import Chats from "./screens/Chats";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

const App = () => {
  const Tab = createBottomTabNavigator();

  const token = useSelector((state) => state.authReducer.token);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isScreenLoading, setIsScreenLoading] = useState(true);
  const dispatch = useDispatch();
  const Stack = createStackNavigator();
  const logo = require("./assets/header_logo.png");
  const backButtonImage = require("./assets/back_btn.png");

  useEffect(() => {
    dispatch(authActions.getUserToken());

    const awaitFonts = async () => {
      await Font.loadAsync({
        "Whitney-BlackSC": require("./assets/fonts/Whitney-BlackSC.ttf"),
        "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
      });
      setFontLoaded(true);
    };
    awaitFonts();

    const splashScreen = async () => {
      return new Promise((resolve) =>
        setTimeout(() => {
          setIsScreenLoading(false);
        }, 4000)
      );
    };

    const loadImages = async () => {
      await Asset.loadAsync(logo, backButtonImage);
    };

    splashScreen();

    loadImages();
  }, []);

  console.log(fontLoaded);

  function LogoTitle() {
    return (
      <Image
        style={{
          width: 170,
          height: 50,
          resizeMode: "contain",
          alignItems: "center",
          justifyContent: "center",
        }}
        source={logo}
      />
    );
  }

  function BackButton() {
    return (
      <Image
        style={{
          width: 20,

          resizeMode: "contain",
          marginLeft: 20,
        }}
        source={backButtonImage}
      />
    );
  }
  if (fontLoaded == false || isScreenLoading == true) {
    return <Splash />;
  }

  const HomeStack = createStackNavigator();

  function LoggedInStack() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: "#000",
              shadowColor: "#181818",
            },
            headerTintColor: "#fff",
            headerLeft: (props) => {
              return (
                <TouchableOpacity
                  style={{ marginLeft: 12 }}
                  activeOpacity={0.7}
                >
                  <Avatar
                    size={"small"}
                    imageUri={"https://reactnative.dev/img/tiny_logo.png"}
                    {...props}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
        <HomeStack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitle: "Iyiola Owabumowa",
            headerStyle: {
              backgroundColor: "#000",
              shadowColor: "#181818",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontFamily: "Whitney-BlackSC",
            },
            headerBackTitle: " ",
            headerBackImage: (props) => <BackButton {...props} />,
          }}
        />
        <HomeStack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerTitle: "Edit Your Profile",
            headerStyle: {
              backgroundColor: "#000",
              shadowColor: "#181818",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontFamily: "Whitney-BlackSC",
            },
            headerBackTitle: " ",
            headerBackImage: (props) => <BackButton {...props} />,
            headerRight: (props) => (
              <TouchableOpacity activeOpacity={0.8}>
                <Text
                  style={{
                    color: "#F45B69",
                    marginRight: 20,
                    fontSize: 16,
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
        <HomeStack.Screen
          name="Followers"
          component={Followers}
          options={{
            headerTitle: "Followers",
            headerStyle: {
              backgroundColor: "#000",
              shadowColor: "#181818",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontFamily: "Whitney-BlackSC",
            },
            headerBackTitle: " ",
            headerBackImage: (props) => <BackButton {...props} />,
          }}
        />
        <HomeStack.Screen
          name="Following"
          component={Following}
          options={{
            headerTitle: "Following",
            headerStyle: {
              backgroundColor: "#000",
              shadowColor: "#181818",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontFamily: "Whitney-BlackSC",
            },
            headerBackTitle: " ",
            headerBackImage: (props) => <BackButton {...props} />,
          }}
        />
        <HomeStack.Screen
          name="Chats"
          component={Chats}
          options={{
            headerTitle: "Chats",
            headerStyle: {
              backgroundColor: "#000",
              shadowColor: "#181818",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontFamily: "Whitney-BlackSC",
            },
            headerBackTitle: " ",
            headerLeft: (props) => {
              return (
                <TouchableOpacity
                  style={{ marginLeft: 12 }}
                  activeOpacity={0.7}
                >
                  <Avatar
                    size={"small"}
                    imageUri={"https://reactnative.dev/img/tiny_logo.png"}
                    {...props}
                  />
                </TouchableOpacity>
              );
            },
            headerBackImage: (props) => <BackButton {...props} />,
          }}
        />
        <HomeStack.Screen
          name="MoreComments"
          component={MoreComments}
          options={{
            headerTitle: "Comments",
            headerStyle: {
              backgroundColor: "#000",
              shadowColor: "#181818",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontFamily: "Whitney-BlackSC",
            },
            headerBackTitle: " ",
            headerBackImage: (props) => <BackButton {...props} />,
          }}
        />
      </HomeStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {token == undefined ? (
        <Stack.Navigator>
          <>
            <Stack.Screen
              name="SplashOptions"
              component={SplashOptions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerTitle: "Login to your account",

                headerStyle: {
                  backgroundColor: "#000",
                  shadowColor: "#181818",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontFamily: "Whitney-BlackSC",
                },
                headerBackTitle: " ",
                headerBackImage: (props) => <BackButton {...props} />,
              }}
            />

            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerTitle: "Register",
                headerStyle: {
                  backgroundColor: "#000",
                  shadowColor: "#181818",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontFamily: "Whitney-BlackSC",
                },
                headerBackTitle: " ",
                headerBackImage: (props) => <BackButton {...props} />,
              }}
            />

            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{
                headerTitle: "Forgot Password",
                headerStyle: {
                  backgroundColor: "#000",
                  shadowColor: "#181818",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontFamily: "Whitney-BlackSC",
                },
                headerBackTitle: " ",
                headerBackImage: (props) => <BackButton {...props} />,
              }}
            />
          </>
        </Stack.Navigator>
      ) : (
        //User is signed in
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "#F45B69",
            inactiveTintColor: "#323232",
            style: {
              backgroundColor: "black",
              borderTopColor: "black",
            },
          }}
          screenOptions={({ route }) => ({
            tabBarLabel: () => {
              return null;
            },

            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "Search") {
                iconName = focused ? "search" : "search";
              } else if (route.name === "Create") {
                iconName = focused ? "plus-circle" : "plus-circle";
              } else if (route.name === "Notification") {
                iconName = focused ? "bell" : "bell";
              } else if (route.name === "Messages") {
                iconName = focused ? "envelope" : "envelope";
              }

              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={LoggedInStack} />
          <Tab.Screen name="Search" component={LoggedInStack} />
          <Tab.Screen name="Create" component={LoggedInStack} />

          <Tab.Screen name="Notification" component={LoggedInStack} />
          <Tab.Screen name="Messages" component={LoggedInStack} />

          {/* <Tab.Screen name="Settings" component={SettingsStackScreen} /> */}
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );

  // function MyTabs() {
  //   return (
  //     <Tab.Navigator>
  //       <Tab.Screen name="Home" component={H} />
  //       <Tab.Screen name="Settings" component={SettingsScreen} />
  //     </Tab.Navigator>
  //   );
  // }
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <Root>
        <App />
      </Root>
    </Provider>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});

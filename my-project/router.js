import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import { LoginScreen } from "./Screens/Auth/LoginScreen";
import { RegistrationScreen } from "./Screens/Auth/RegistrationScreen";
import CreatePostsScreen from "./Screens/MainScreen/CreatePostsScreen";
import MapScreen from "./Screens/MainScreen/MapScreen";
import HomeScreen from "./Screens/MainScreen/HomeScreen";
import PostsScreen from "./Screens/MainScreen/PostsScreen";
import ProfileScreen from "./Screens/MainScreen/ProfileScreen";
/*Icons*/
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Entypo name="grid" size={size} color={color} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="plus" size={size} color={color} />
          ),
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      {/* <MainTab.Screen
        options={{
          headerShown: false,
        }}
        name="Map"
        component={MapScreen}
      ></MainTab.Screen> */}
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

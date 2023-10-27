import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screen/Home";
import Category from "../screen/Category";
import Plus from "../screen/Plus";
import Save from "../screen/Save";
import Profile from "../screen/Profile";
import OldMan from "../screen/OldMan";
import Donation from "../screen/Donation";
import DetailProfile from "../screen/DetailProfile";
import DetailNews from "../screen/DetailNews";

const HomeStack = createNativeStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home Stack" component={Home} />
    </HomeStack.Navigator>
  );
}

const CategoryStack = createNativeStackNavigator();
function CategoryStacks() {
  return (
    <CategoryStack.Navigator screenOptions={{ headerShown: false }}>
      <CategoryStack.Screen name="Category Stack" component={Category} />
    </CategoryStack.Navigator>
  );
}

const PlusStack = createNativeStackNavigator();
function PlusStacks() {
  return (
    <PlusStack.Navigator screenOptions={{ headerShown: false }}>
      <PlusStack.Screen name="Plus Stack" component={Plus} />
    </PlusStack.Navigator>
  );
}

const SaveStack = createNativeStackNavigator();
function SaveStacks() {
  return (
    <SaveStack.Navigator screenOptions={{ headerShown: false }}>
      <SaveStack.Screen name="Save Stack" component={Save} />
    </SaveStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();
function ProfileStacks() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Profile Stack" component={Profile} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "9%",
          shadowColor: "#FFF9EC",
          shadowOffset: {
            width: 5,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          borderRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storages/nav/home.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "black" : "#C6C6C6",
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storages/nav/category.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "black" : "#C6C6C6",
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Plus"
        component={PlusStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: -30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: focused ? "black" : "black",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../storages/nav/add.png")}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? "#FCFCFC" : "#FCFCFC",
                  }}
                ></Image>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Save"
        component={SaveStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storages/nav/heart.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "black" : "#C6C6C6",
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storages/nav/user.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "black" : "#C6C6C6",
                }}
              ></Image>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stacks = createNativeStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
        <Stacks.Screen name="Tabs" component={Tabs} />
        <Stacks.Screen name="OldMan" component={OldMan} />
        <Stacks.Screen name="Donation" component={Donation} />
        <Stacks.Screen name="DetailProfile" component={DetailProfile} />
        <Stacks.Screen name="DetailNews" component={DetailNews} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});

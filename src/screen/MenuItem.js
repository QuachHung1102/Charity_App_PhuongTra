import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderMenuDetail from "../screenComponent/category/HeaderMenuDetail";

const MenuItem = ({ route }) => {
  const params = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF5F7" }}>
      <HeaderMenuDetail params={params} />
      <View
        style={{
          backgroundColor: "#FFF5F7",
          width: Dimensions.get('window').width,
          height: 225,
          transform: [{ translateX: 0 }, { translateY: -100 }],
          zIndex: -10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../storages/endbackground.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});

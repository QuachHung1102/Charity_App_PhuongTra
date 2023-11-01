import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../screenComponent/category/Header";

const Category = ({ route }) => {
  let screen = "screen1";
  if (route.params) {
    screen = route.params.screenString
  }
  return (
    <View style={{ flex: 1 }}>
      <Header screenString={screen} />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});

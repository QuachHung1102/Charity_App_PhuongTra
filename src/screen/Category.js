import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../screenComponent/category/Header";

const Category = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header screenString={route.params.screenString} />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});

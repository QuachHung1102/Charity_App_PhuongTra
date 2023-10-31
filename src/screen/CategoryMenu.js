import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import MenuBtn from "../screenComponent/category/MenuBtn";

const CategoryMenu = () => {
  return (
    <View style={{ backgroundColor: "#FFF5F7", flex: 1 }}>
      <View style={{
        width: Dimensions.get('window').width * 0.9,
        marginHorizontal: Dimensions.get('window').width * 0.05,
      }}>
        <Text style={{ fontSize: 24, fontWeight: "800", color: "#20397A", marginTop: Dimensions.get('window').height * 0.025 }}>
          Danh mục
        </Text>
        <View style={{ marginTop: Dimensions.get('window').height * 0.01, }}>
          <MenuBtn />
        </View>
      </View>
    </View>
  );
};


export default CategoryMenu;

const styles = StyleSheet.create({});

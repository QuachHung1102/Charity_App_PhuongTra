import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardRunning from "../screenComponent/category/CardRunning";

const Running = () => {
  return (
    <View style={{}}>
      <View style={{
        width: Dimensions.get('window').width * 0.9,
      }}
      >
        <CardRunning />
      </View>
      <View>
        <View
          style={{
            height: Dimensions.get('window').width * 0.125,
            width: Dimensions.get('window').width * 0.8,
            borderWidth: 2,
            borderColor: "#20397A",
            borderRadius: 10,
            marginVertical: Dimensions.get('window').width * 0.05,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ fontSize: 16, color: "#20397A", fontWeight: "700" }}
          >
            Xem thêm
          </Text>
        </View>
      </View>
    </View >
  );
};

export default Running;

const styles = StyleSheet.create({});

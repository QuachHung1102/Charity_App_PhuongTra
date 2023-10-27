import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import CardSave from "../screenComponent/save/CardSave";

const Save = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF5F7" }}>
      <View
        style={{ height: 111, backgroundColor: "#FFDFE5", borderRadius: 25 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('screen').height * 0.15,
            marginHorizontal: Dimensions.get('window').width * 0.05,
            marginTop: Dimensions.get('window').width * 0.02,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "900",
                width: Dimensions.get('window').width * 0.4,
              }}
            >
              Đã lưu
            </Text>
          </View>
          <Image source={require("../storages/icon/bell.png")} />
        </View>
      </View>
      <View
        style={{
          marginTop: Dimensions.get('window').height * 0.01,
        }}
      >
        <CardSave />
      </View>
      <View
        style={{
          backgroundColor: "#FFF5F7",
          width: Dimensions.get('window').width,
          // transform: [{ translateX: 0 }, { translateY: -100 }],
          position: "absolute",
          bottom: 0,
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
    </View >
  );
};

export default Save;

const styles = StyleSheet.create({});

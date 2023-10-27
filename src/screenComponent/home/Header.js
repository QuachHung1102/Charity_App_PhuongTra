import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={{
      backgroundColor: "#FFDFE5",
      height: Dimensions.get('screen').height * 0.15,
      width: Dimensions.get('screen').width,
      paddingHorizontal: Dimensions.get('screen').height * 0.03,
    }}>
      <View
        style={{
          height: Dimensions.get('screen').height * 0.15,
          width: Dimensions.get('screen').width * 0.9,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: Dimensions.get('screen').height * 0.02,
        }}
      >
        <View style={[styles.flexRow, { justifyContent: 'space-between' }]}>
          <Image source={require("../../storages/avt.png")} />
          <View>
            <Text
              numberOfLines={1}
              style={{ fontSize: 20, fontWeight: "700", }}
            >
              Chào Phương Trà
            </Text>
            <Text
              numberOfLines={1}
              style={{ fontSize: 14, fontWeight: "400" }}>
              Đống Đa, Hà Nội, Việt Nam
            </Text>
          </View>
        </View>
        <Image source={require("../../storages/icon/bell.png")} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  }
});

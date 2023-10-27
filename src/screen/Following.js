import { Image, ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import CardRunningMini_1 from "../screenComponent/category/CardRunningMini_1";
import { Feather } from "@expo/vector-icons";

const Following = () => {
  return (
    <ScrollView
      style={{ height: 700 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: Dimensions.get('window').height * 0.02,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require("../storages/icon/star.png")} />
          <Image
            source={require("../storages/cardcategory/logo2.png")}
            style={{ width: 57, height: 57 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                marginBottom: 5,
              }}
            >
              Helpage International
            </Text>
            <Text style={{ fontSize: 12, color: "#757575" }}>
              Khởi tạo: Hôm nay, 15/12/2022
            </Text>
          </View>
        </View>
        <Feather name="user-check" size={24} color="#001A72" />
      </View>
      <View style={{ marginTop: 15 }}>
        <CardRunningMini_1 />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: Dimensions.get('window').height * 0.02,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require("../storages/icon/star.png")} />
          <Image
            source={require("../storages/cardcategory/logo2.png")}
            style={{ width: 57, height: 57 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                marginBottom: 5,
              }}
            >
              Helpage International
            </Text>
            <Text style={{ fontSize: 12, color: "#757575" }}>
              Khởi tạo: Hôm nay, 15/12/2022
            </Text>
          </View>
        </View>
        <Feather name="user-check" size={24} color="#001A72" />
      </View>
      <View style={{ marginTop: 15 }}>
        <CardRunningMini_1 />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: Dimensions.get('window').height * 0.02,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require("../storages/icon/star.png")} />
          <Image
            source={require("../storages/cardcategory/logo2.png")}
            style={{ width: 57, height: 57 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                marginBottom: 5,
              }}
            >
              Helpage International
            </Text>
            <Text style={{ fontSize: 12, color: "#757575" }}>
              Khởi tạo: Hôm nay, 15/12/2022
            </Text>
          </View>
        </View>
        <Feather name="user-check" size={24} color="#001A72" />
      </View>
      <View style={{ marginTop: 15 }}>
        <CardRunningMini_1 />
      </View>
    </ScrollView>
  );
};

export default Following;

const styles = StyleSheet.create({});

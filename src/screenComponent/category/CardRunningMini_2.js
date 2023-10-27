import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardRunningMini_2 = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailNews")}
      style={{
        backgroundColor: "white",
        width: Dimensions.get('window').width * 0.9,
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <View>
        <Image
          source={require("../../storages/cardcategory/img3.png")}
          resizeMode="cover"
          style={{
            width: Dimensions.get('window').width * 0.9,
          }}
        />
      </View>
      <View
        style={{
          width: Dimensions.get('window').width * 0.9,
          padding: Dimensions.get('window').width * 0.05,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
            <MaterialCommunityIcons
              name="calendar-clock-outline"
              size={15}
              color="#001A72"
            />
            <Text
              style={{
                fontSize: 12,
                color: "#FF617D",
                fontWeight: "700",
                marginLeft: 5,
              }}
            >
              Giáo dục
            </Text>
            <Text style={{ fontSize: 12, color: "#757575" }}> | Phú Yên</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="wallet" size={15} color="#123ADA" />
            <Text style={{ fontSize: 12, color: "#757575", marginLeft: 5 }}>
              Ủng hộ
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              height: 40,
              fontSize: 16,
              fontWeight: 700,
              color: "#20397A",
            }}
          >
            Ước mơ được đến lớp học của 2 đứa trẻ mồ côi cha
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ fontSize: 12, color: "#F18B0F", fontWeight: "500" }}
              >
                20.000.000
              </Text>
              <Text style={{ fontSize: 12, color: "#757575" }}>
                /100.000.000vnđ
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12, color: "#757575" }}>
                còn lại 35 ngày
              </Text>
            </View>
          </View>
          <View style={{
            backgroundColor: "#D9D9D9", borderRadius: 10,
            marginVertical: Dimensions.get('window').height * 0.005,
          }}>
            <View style={{ width: '20%', height: 7, backgroundColor: "#FF617D", borderRadius: 10 }}></View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="gift-outline" size={12} color="#FF617D" />
            <Text style={{ fontSize: 12, color: "#FF617D", marginLeft: 3 }}>
              200<Text style={{ color: "#757575" }}> người ủng hộ</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../storages/cardcategory/logo3.png")}
                style={{ width: 24, height: 24, marginRight: 5 }}
              />
              <Text style={{ fontSize: 12, fontWeight: "500" }}>
                Báo điện tử Dân Trí
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  height: 30,
                  width: 64,
                  backgroundColor: "#FF617D",
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 5,
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "700", color: "white" }}
                >
                  Ủng hộ
                </Text>
              </View>
              <AntDesign name="sharealt" size={30} color="#20397A" />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardRunningMini_2;

const styles = StyleSheet.create({});

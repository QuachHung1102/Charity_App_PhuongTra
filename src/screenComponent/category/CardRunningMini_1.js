import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardRunningMini_1 = () => {
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
          source={require("../../storages/cardcategory/img2.png")}
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
              Người già
            </Text>
            <Text style={{ fontSize: 12, color: "#757575" }}>
              {" "}
              | Quỳnh Lưu, Nghệ An
            </Text>
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
            Cụ bà đơn thân, sống lay lắt từng ngày vì căn bệnh hiểm nghèo
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
                15.000.000
              </Text>
              <Text style={{ fontSize: 12, color: "#757575" }}>
                /80.000.000vnđ
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12, color: "#757575" }}>
                còn lại 60 ngày
              </Text>
            </View>
          </View>
          <View style={{
            backgroundColor: "#D9D9D9", borderRadius: 10,
            marginVertical: Dimensions.get('window').height * 0.005,
          }}>
            <View style={{ width: '10%', height: 7, backgroundColor: "#FF617D", borderRadius: 10 }}></View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="gift-outline" size={12} color="#FF617D" />
            <Text style={{ fontSize: 12, color: "#FF617D", marginLeft: 3 }}>
              56<Text style={{ color: "#757575" }}> người ủng hộ</Text>
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
                source={require("../../storages/cardcategory/logo2.png")}
                style={{ width: 24, height: 24, marginRight: 5 }}
              />
              <Text style={{ fontSize: 12, fontWeight: "500" }}>
                Helpage International
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

export default CardRunningMini_1;

const styles = StyleSheet.create({});

import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardNews_1 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: Dimensions.get('window').width * 0.7,
        backgroundColor: "black",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("DetailNews")}>
        <Image
          source={require("../../storages/cardnews/news_1.png")}
          resizeMode="cover"
          style={{
            width: Dimensions.get('window').width * 0.7,
          }}
        />
      </TouchableOpacity >
      <View
        style={{
          width: Dimensions.get('window').width * 0.66,
          height: Dimensions.get('window').height * 0.2,
          marginHorizontal: Dimensions.get('window').width * 0.02,
          marginVertical: Dimensions.get('window').height * 0.02,
          justifyContent: "space-between"
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../../storages/icon/calendar.png")} />
          <Text
            style={{
              fontSize: 12,
              color: "#FF617D",
              fontWeight: "700",
              marginLeft: 5,
            }}
          >
            Sức khoẻ
          </Text>
          <Text style={{ fontSize: 12, color: "#757575" }}> | Bạc Liêu</Text>
        </View>
        <View style={{}}>
          <Text
            numberOfLines={2}
            style={{ fontSize: 16, fontWeight: "700", color: "white" }}>
            Hoàn cảnh cháu bé "học thêm năm nữa rồi ở nhà" được giúp 200 triệu
            đồng
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{ fontSize: 12, color: "#F18B0F", fontWeight: "500" }}
            >
              200.000.000 vnd
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 12, color: "#757575" }}>
              Kết thúc: 2/12/2022
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="gift-outline" size={12} color="#FF617D" />
          <Text style={{ fontSize: 12, color: "#FF617D", marginLeft: 3 }}>
            100
            <Text style={{ color: "#757575" }}> người ủng hộ</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../storages/cardimg/logo/logo5.png")}
              style={{ width: 24, height: 24, marginRight: 5 }}
            />
            <Text
              numberOfLines={2}
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "white",
                width: '60%',
              }}
            >
              Save the Children Viet Nam
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="sharealt" size={30} color="white" />
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: "white",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 8,
              }}
            >
              <AntDesign name="hearto" size={20} color="#FF617D" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardNews_1;

const styles = StyleSheet.create({});

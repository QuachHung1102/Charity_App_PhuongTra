import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DetailNews = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ height: 207 }}>
        <Image
          source={require("../storages/cardnews/img1.png")}
          style={{ position: "absolute" }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 45,
            marginHorizontal: 30,
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 40,
              height: 40,
              backgroundColor: "rgba(0, 0, 0, 0.22)",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="left" size={40} color="white" />
          </TouchableOpacity>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: "rgba(0, 0, 0, 0.22)",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="sharealt" size={38} color="white" />
          </View>
        </View>
      </View>
      <View>
        <View>
          <Image source={require("../storages/icon/lifebuoy.png")} />
          <View>
            <Text style={styles.textmini}>Mục tiêu chiến dịch</Text>
            <Text style={styles.textminibold}>70.000.000 vnd</Text>
          </View>
        </View>
        <View>
          <Image source={require("../storages/icon/clock.png")} />
          <View>
            <Text style={styles.textmini}>Thời gian còn lại</Text>
            <Text style={styles.textminibold}>30 ngày</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailNews;

const styles = StyleSheet.create({
  textmini: {
    color: "#757575",
  },
  textminibold: {
    fontWeight: "700",
  },
});

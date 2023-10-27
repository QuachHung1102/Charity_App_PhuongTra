import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF5F7" }}>
      <View
        style={{
          width: Dimensions.get("window").width * 0.9,
          marginVertical: Dimensions.get("window").width * 0.05,
          alignSelf: "center",
          alignItems: "center",
          marginTop: Dimensions.get("window").height * 0.1,
        }}
      >
        <Image source={require("../storages/avt2.png")} style={{
          marginBottom: Dimensions.get("window").height * 0.01,
        }} />
        <Text style={{
          fontSize: 24, fontWeight: "900",
        }}>
          Lưu Phương Trà
        </Text>
        <Text style={{ color: "#757575" }}>@phuongtra12</Text>
      </View>
      <View style={{
        marginTop: Dimensions.get("window").height * 0.03,
        width: Dimensions.get('window').width * 0.9,
        marginHorizontal: Dimensions.get('window').width * 0.05
      }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Donation")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign name="wallet" size={30} color="black" />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Ủng hộ của tôi</Text>
          </View>
          <AntDesign name="right" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("DetailProfile")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 24,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="user" size={30} color="black" />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Trang cá nhân</Text>
          </View>
          <AntDesign name="right" size={20} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="log-out" size={30} color="black" />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Đăng xuất</Text>
          </View>
          <AntDesign name="right" size={20} color="black" />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#FFF5F7",
          height: "25%",
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
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import New from "../../screen/New";
import Following from "../../screen/Following";
import HighLight from "../../screen/HighLight";

const HeaderMenuDetail = ({ params }) => {
  const navigation = useNavigation();
  const [screen, setScreen] = useState("screen1");
  return (
    <View style={{}}>
      <View
        style={{ borderRadius: 25 }}
      >
        <View style={{
          backgroundColor: "#FFDFE5",
          borderBottomStartRadius: 16,
          borderBottomEndRadius: 16,
        }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: Dimensions.get("window").width * 0.075,
              marginTop: Dimensions.get("window").height * 0.02,
              height: Dimensions.get('screen').height * 0.15,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", }}>
              <AntDesign
                name="left"
                size={Dimensions.get("window").width * 0.1}
                color="black"
                onPress={() => navigation.goBack()}
              />
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "rgba(255, 97, 125, 0.5)",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  marginHorizontal: Dimensions.get('window').width * 0.02,
                }}
              >
                <Image source={params.params.logo} />
              </View>

              <Text
                numberOfLines={1}
                style={{
                  width: Dimensions.get('window').width * 0.4,
                  fontSize: 20,
                  fontWeight: "900",
                }}
              >
                {params.params.name}
              </Text>
            </View>
            <Image source={require("../../storages/icon/bell.png")} />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{}}>
            <View style={{
              backgroundColor: "#FFF5F7",
              width: Dimensions.get('window').width * 0.8,
              marginHorizontal: Dimensions.get('window').width * 0.1,
            }}>
              <View style={styles.tabContainer}>
                <TouchableOpacity
                  onPress={() => setScreen("screen1")}
                  style={[styles.view]}
                >
                  {screen === "screen1" ? (
                    <Image source={require("../../storages/radio/radio1.png")} />
                  ) : (
                    <Image source={require("../../storages/radio/radio.png")} />
                  )}

                  <Text
                    style={[
                      styles.tabText,
                      screen === "screen1" && styles.tabTextBold,
                    ]}
                    numberOfLines={1}
                  >
                    Nổi bật
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setScreen("screen2")}
                  style={[styles.view]}
                >
                  {screen === "screen2" ? (
                    <Image source={require("../../storages/radio/radio1.png")} />
                  ) : (
                    <Image source={require("../../storages/radio/radio.png")} />
                  )}

                  <Text
                    style={[
                      styles.tabText,
                      screen === "screen2" && styles.tabTextBold,
                    ]}
                    numberOfLines={1}
                  >
                    Mới
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setScreen("screen3")}
                  style={[styles.view]}
                >
                  {screen === "screen3" ? (
                    <Image source={require("../../storages/radio/radio1.png")} />
                  ) : (
                    <Image source={require("../../storages/radio/radio.png")} />
                  )}
                  <Text
                    style={[
                      styles.tabText,
                      screen === "screen3" && styles.tabTextBold,
                    ]}
                    numberOfLines={1}
                  >
                    Đang theo dõi
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{
              height: Dimensions.get('window').height * 0.71,
              width: Dimensions.get('window').width * 0.9,
              marginHorizontal: Dimensions.get('window').width * 0.05,
            }}>
              {screen === "screen1" && <HighLight />}
              {screen === "screen2" && <New />}
              {screen === "screen3" && <Following />}
            </View>
          </View>
        </View>
      </View>
    </View >
  );
};

export default HeaderMenuDetail;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: Dimensions.get("window").height * 0.02,
  },
  tabText: {
    fontSize: 16,
    color: "#757575",
    fontWeight: "400",
    marginLeft: 5,

  },
  tabTextBold: {
    fontWeight: "bold",
    color: "black",
  },

  view: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

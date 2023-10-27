import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import React, { useState } from "react";
import CardMini from "../screenComponent/home/CardMini";
import Running from "./Running";
import Done from "./Done";
import { ImageBackground } from "react-native";
import { Image } from "react-native";

const Follow = () => {
  const [screen, setScreen] = useState("screen1");
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: "#FFF5F7",
      }}
    >
      <View style={{
        marginTop: Dimensions.get('screen').height * 0.02,
        marginHorizontal: Dimensions.get('screen').width * 0.05,
      }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: "#20397A" }}>
          Gợi ý Theo dõi (NGOS)
        </Text>
        <View style={{
          height: Dimensions.get('window').height * 0.19,
          marginTop: 14,
        }}>
          <CardMini />
        </View>
      </View>

      <View style={{
        // width: Dimensions.get("window").width * 0.9,
        marginTop: Dimensions.get("window").width * 0.065,
        backgroundColor: "#FFF5F7",
        paddingBottom: 20,
      }}>
        <Text style={{
          fontSize: 24,
          fontWeight: "800",
          color: "#20397A",
          marginHorizontal: Dimensions.get("window").width * 0.05,
        }}>
          Bảng tin nhân ái
        </Text>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          // marginTop: Dimensions.get("window").height * 0.025,
        }}>
          <View style={{}}>
            <View style={styles.tabContainer}>
              <TouchableOpacity
                onPress={() => setScreen("screen1")}
                style={[styles.view, screen === "screen1" ? styles.btnActive : styles.btn]}
              >
                <Text
                  style={[
                    styles.tabText,
                    screen === "screen1" && styles.tabTextBold,
                  ]}
                >
                  Đang chạy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setScreen("screen2")}
                style={[styles.view, screen === "screen2" ? styles.btnActive : styles.btn]}
              >
                <Text
                  style={[
                    styles.tabText,
                    screen === "screen2" && styles.tabTextBold,
                  ]}
                >
                  Hoàn thành
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{
              width: Dimensions.get("window").width * 0.9,
              marginHorizontal: Dimensions.get("window").width * 0.05,
            }}>
              {screen === "screen1" && <Running />}
              {screen === "screen2" && <Done />}
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFF5F7",
            width: Dimensions.get('window').width,
            height: 225,
            transform: [{ translateX: 0 }, { translateY: -35 }],
            zIndex: -10,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Image
            source={require("../storages/endbackground.png")}
            resizeMode="contain"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Follow;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: Dimensions.get("window").width,
    marginTop: Dimensions.get("window").height * 0.025,
  },
  tabText: {
    fontSize: 16,
    color: "#20397A",
    fontWeight: "700",
  },
  tabTextBold: {
    fontWeight: "bold",
    color: "white",
  },
  btnActive: {
    width: Dimensions.get("window").width * 0.35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#20397A",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: Dimensions.get("window").width * 0.4,
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});

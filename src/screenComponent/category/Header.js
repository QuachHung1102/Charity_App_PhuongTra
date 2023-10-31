import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import Follow from "../../screen/Follow";
import CategoryMenu from "../../screen/CategoryMenu";
import { useEffect } from "react";

const Header = ({ screenString }) => {
  const [screen, setScreen] = useState("screen1");
  useEffect(() => {
    if (screenString) {
      setScreen(screenString);
    }
  }, [screenString]);

  return (
    <View style={{ borderRadius: 25 }}>
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
            marginTop: Dimensions.get("window").height * 0.07,
          }}
        >
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: "900" }}
            >
              Khám phá
            </Text>
          </View>
          <Image source={require("../../storages/icon/bell.png")} />
        </View>
        <View style={{
          flexDirection: "row",
        }}>
          <View style={{}}>
            <View style={styles.tabContainer}>
              <TouchableOpacity
                onPress={() => setScreen("screen1")}
                style={[styles.view,
                screen === "screen1" ? styles.btnActive : styles.btn]}
              >
                <Text
                  style={[
                    styles.tabText,
                    screen === "screen1" && styles.tabTextBold,
                  ]}
                >
                  Theo dõi
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
                  Danh mục
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{
        height: Dimensions.get('window').height * 0.8,
      }}>
        {screen === "screen1" && <Follow />}
        {screen === "screen2" && <CategoryMenu />}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: Dimensions.get("window").width,
    marginVertical: Dimensions.get("window").height * 0.02,
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
    // width: 178,
    // height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});

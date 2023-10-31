import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Menu = ({ navigation }) => {
  const menu = [
    {
      id: 1,
      logo: require("../../storages/menu/logo1.png"),
      text: "Đời sống",
      goTo: "MenuItem",
    },
    {
      id: 2,
      logo: require("../../storages/menu/logo2.png"),
      text: "Sức khỏe",
      goTo: "MenuItem",
    },
    {
      id: 3,
      logo: require("../../storages/menu/logo3.png"),
      text: "Thiên tai",
      goTo: "MenuItem",
    },
    {
      id: 4,
      logo: require("../../storages/menu/logo4.png"),
      text: "Giáo dục",
      goTo: "MenuItem",
    },
    // {
    //   id: 5,
    //   logo: require("../../storages/menu/logo5.png"),
    //   text: "Tất cả",
    //   goTo: "CategoryStacks",
    // },
  ];
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}>
      {menu.map((data, index) => {
        return (
          <Pressable
            key={data.text}
            onPress={() => navigation.navigate(data.goTo, {
              params: {
                name: data.text,
                logo: data.id,
              }
            })}
          >
            <View
              style={{
                width: 55,
                height: 76,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 54,
                  height: 54,
                  backgroundColor: "rgba(255, 97, 125, 0.5)",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <Image source={data.logo} />
              </View>
              <View style={{ height: 4 }}></View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  color: "#9D9D9D",
                }}
              >
                {data.text}
              </Text>
            </View>
          </Pressable>
        );
      })}
      <Pressable
        key={5}
        onPress={() => navigation.navigate("CategoryStacks", {
          screen: 'Category',
          params: {
            screenString: "screen2",
          }
        })}
      >
        <View
          style={{
            width: 55,
            height: 76,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 54,
              height: 54,
              backgroundColor: "rgba(255, 97, 125, 0.5)",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <Image source={require("../../storages/menu/logo5.png")} />
          </View>
          <View style={{ height: 4 }}></View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: "#9D9D9D",
            }}
          >
            Tất cả
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});

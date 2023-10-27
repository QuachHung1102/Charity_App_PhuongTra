import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const CardMini = () => {
  const card = [
    {
      id: 1,
      img: require("../../storages/cardimg/card1.png"),
      logo: require("../../storages/cardimg/logo/logo1.png"),
      text: "Báo điện tử Dân Trí",
    },
    {
      id: 2,
      img: require("../../storages/cardimg/card2.png"),
      logo: require("../../storages/cardimg/logo/logo2.png"),
      text: "Unicef Viet Nam",
    },
    {
      id: 3,
      img: require("../../storages/cardimg/card3.png"),
      logo: require("../../storages/cardimg/logo/logo3.png"),
      text: "Action on Poverty",
    },
    {
      id: 4,
      img: require("../../storages/cardimg/card1.png"),
      logo: require("../../storages/cardimg/logo/logo4.png"),
      text: "Helpage International",
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ columnGap: 10 }}
    >
      {card.map((data, index) => {
        return (
          <View
            key={data.id}
            style={{
              // backgroundColor: "red",
              width: Dimensions.get('window').width * 0.28,
              height: Dimensions.get('window').height * 0.19,
              borderRadius: 10,
              shadowColor: "rgba(0, 0, 0, 0.25)",
              shadowRadius: 10,
              shadowOffset: { width: 2, height: 2 },
              elevation: 8,
            }}
          >
            <ImageBackground
              source={data.img}
              style={{
                flex: 1,
                borderRadius: 10,
                overflow: 'hidden',
                justifyContent: "space-between",
              }}
            >
              <View style={{
                backgroundColor: "#000",
                height: 25,
                width: 25,
                borderRadius: 50,
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "flex-end",
              }}>
                <Feather name="user-plus" size={20} color="white" />
              </View>
              <View>
                <View
                  style={{
                    height: Dimensions.get('window').height * 0.06,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    // backgroundColor: "#E6E5E1",
                    borderBottomStartRadius: 10,
                    borderBottomEndRadius: 10,
                  }}
                >
                  <LinearGradient
                    colors={['rgba(255, 255, 255, 0.81)', 'rgba(255, 255, 255, 0.81)']}
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      top: 0,
                      zIndex: 1
                    }}
                    start={[0, 1]}
                    end={[0, 0]}
                  >
                  </LinearGradient>
                  <Image source={data.logo} style={{ zIndex: 2 }} />
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 10,
                      width: Dimensions.get('window').width * 0.15,
                      fontWeight: "700",
                      zIndex: 2,
                    }}
                  >
                    {data.text}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        );
      })}
    </ScrollView >
  );
};

export default CardMini;

const styles = StyleSheet.create({});

// {<>
//
// </>}
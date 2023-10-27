import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

const Campaign = () => {
  return (
    <View style={{
      marginTop: Dimensions.get('screen').height * 0.08,
      width: Dimensions.get('screen').width * 0.9,
    }}>
      <View
        style={{
          position: "absolute",
          top: -45,
          left: 0,
          right: 0,
          flexDirection: "row",
          width: Dimensions.get('window').width * 0.9,
          alignItems: "flex-start",
          justifyContent: 'space-between'
        }}
      >
        <Image source={require("../../storages/person1.png")} />
        <View style={{}}></View>
        <Image source={require("../../storages/person2.png")} />
      </View>

      <View
        style={{ justifyContent: 'flex-end', alignItems: 'center' }}
      >
        <Text style={{ fontWeight: "700", fontSize: 20 }}>
          CHIẾN DỊCH CỦA BẠN
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#FFB1BF",
          marginTop: 15,
          borderRadius: 10,
          width: Dimensions.get('screen').width * 0.9,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: Dimensions.get('screen').width * 0.03,
            marginTop: Dimensions.get('screen').height * 0.015,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: Dimensions.get('window').width * 0.3,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "700", color: "#FF617D" }}>
              Giáo dục
            </Text>
            <Text style={{ fontSize: 12, color: "#757575" }}>|</Text>
            <Text style={{ fontSize: 12, color: "#757575" }}>Hải Dương</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12, color: "#757575" }}>
              Khởi tạo: 08/12/2022
            </Text>
          </View>
        </View>

        <View
          style={{
            height: 50,
            marginHorizontal: Dimensions.get('screen').width * 0.04,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: '#000',
              letterSpacing: 0.5,
              fontWeight: "700",
            }}
          >
            Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "black",
            borderRadius: 10,
            width: Dimensions.get('screen').width * 0.9,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: Dimensions.get('window').width * 0.82,
              justifyContent: "space-between",
              marginHorizontal: Dimensions.get('window').width * 0.04,
              marginVertical: Dimensions.get('window').height * 0.015,
            }}
          >
            <Image
              source={require("../../storages/img1.png")}
              style={{
                width: Dimensions.get('window').width * 0.25,
                borderRadius: 10,
              }}
            />
            <View style={{
              width: Dimensions.get('window').width * 0.54,
              justifyContent: "space-around",
            }}>
              <Text
                style={{ color: "white", fontWeight: "900", fontSize: 14, lineHeight: 16.8 }}
              >
                Hôm nay
              </Text>
              <View
                style={{
                  height: Dimensions.get('window').height * 0.06,
                  justifyContent: 'center',
                  backgroundColor: "#FF617D",
                  borderRadius: 7,
                  marginBottom: Dimensions.get('window').height * 0.01,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      columnGap: 2,
                      alignItems: "center",
                      height: 30,
                    }}
                  >
                    <Ionicons name="gift-outline" size={15} color="black" />
                    <Text style={{ fontSize: 20, fontWeight: "900" }}>5</Text>
                  </View>
                  <View style={{ flexDirection: "row", columnGap: 2, alignItems: "center", }}>
                    <View
                      style={{
                        width: 15,
                        height: 15,
                        borderWidth: 1,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Entypo
                        name="credit"
                        size={10}
                        color="black"
                        style={{ marginLeft: 2 }}
                      />
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: "900" }}>
                      1tr750
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      columnGap: 2,
                      height: 30,
                    }}
                  >
                    <AntDesign name="hearto" size={15} color="black" />
                    <Text style={{ fontSize: 20, fontWeight: "900" }}>36</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <Text
                  style={{ fontSize: 12, color: "#FF617D", fontWeight: "500" }}
                >
                  7.000.000
                </Text>
                <Text style={{ fontSize: 10, color: "#757575" }}>
                  /70.000.000vnđ
                </Text>
              </View>
              <View style={{
                marginVertical: Dimensions.get('window').height * 0.005,
              }}>
                {/* <Image source={require("../../storages/bar1.png")} /> */}
                <View style={{ backgroundColor: "#D9D9D9", borderRadius: 10 }}>
                  <View style={{ width: '10%', height: 7, backgroundColor: "#FF617D", borderRadius: 10 }}></View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="gift-outline" size={10} color="#FF617D" />
                  <Text style={{ fontSize: 10, color: "#FF617D" }}>
                    100
                    <Text style={{ color: "#757575" }}>người ủng hộ</Text>
                  </Text>
                </View>
                <Text style={{ fontSize: 10, color: "#757575" }}>
                  còn 30 ngày
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Campaign;

const styles = StyleSheet.create({});

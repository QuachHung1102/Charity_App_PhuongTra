import React from "react";
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../screenComponent/home/Header";
import CardMini from "../screenComponent/home/CardMini";
import Menu from "../screenComponent/home/Menu";
import Campaign from "../screenComponent/home/Campaign";
import CardNews from "../screenComponent/home/CardNews";
import CardNews_1 from "../screenComponent/home/CardNews_1";
import { FlashList } from "@shopify/flash-list";

const Home = () => {
  return (
    <View style={{ flex: 1, }}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#FFF5F7",
        }}
      // scrollEnabled={true}
      >
        <Header />
        <View
          style={{
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height * 0.2,
            alignSelf: "center",
          }}
        >
          <ImageBackground
            source={require('../storages/backgroundhome.png')}
            resizeMode="cover"
            style={{
              flex: 1,
              height: Dimensions.get('screen').height * 0.27,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View style={{
              width: '76%',
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Text
                style={{
                  fontWeight: "900",
                  fontSize: 24,
                  color: "white",
                  textShadowColor: "rgba(0, 0, 0, 0.71)",
                  textShadowOffset: { width: 1, height: 4 },
                  textShadowRadius: 10,
                  marginTop: Dimensions.get('window').height * 0.01,
                }}
              >
                Khởi tạo chiến dịch
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "700",
                  textAlign: "center",
                  color: "white",
                  marginTop: Dimensions.get('window').height * 0.005,
                  marginBottom: Dimensions.get('window').height * 0.015,
                  textShadowColor: "rgba(0, 0, 0, 0.75)",
                  textShadowOffset: { width: 1, height: 2 },
                  textShadowRadius: 10,
                  letterSpacing: 0.1,
                  lineHeight: 16,
                }}
              >
                Bạn có thể tự tạo bài đăng, kêu gọi sự ủng hộ và tài trợ từ các
                nhà hảo tâm sử dụng ứng dụng để giúp đỡ 1 hoàn cảnh khó khăn chưa
                được quan tâm mà bạn đã từng gặp.
              </Text>
              <View
                style={{
                  backgroundColor: "#FF617D",
                  borderRadius: 14,
                  borderWidth: 4,
                  borderColor: "#20397A",
                }}
              >
                <Text style={{ paddingVertical: 8, paddingHorizontal: 28 }}>
                  Bắt đầu
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>

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
          marginTop: Dimensions.get('screen').height * 0.025,
          marginHorizontal: Dimensions.get('screen').width * 0.05,
        }}>
          <Text style={{ fontSize: 24, fontWeight: "700", color: "#20397A" }}>
            Danh mục
          </Text>
          <View style={{ marginTop: 14 }}>
            <Menu />
          </View>
        </View>

        <View style={{
          width: Dimensions.get('window').width * 0.9,
          marginHorizontal: Dimensions.get('window').width * 0.05,
        }}>
          <Campaign />
        </View>

        <View style={{
          width: Dimensions.get('window').width * 0.86,
          marginVertical: Dimensions.get('window').height * 0.035,
          marginHorizontal: Dimensions.get('window').width * 0.07,
          borderRadius: 16,
          overflow: 'hidden',
        }}>
          <Text style={{ fontSize: 24, fontWeight: "800", color: "#20397A" }}>
            Hoàn cảnh nổi bật
          </Text>
          <View style={{
            marginTop: Dimensions.get('window').height * 0.0175,
            width: Dimensions.get('window').width * 0.86,
            rowGap: Dimensions.get('window').height * 0.02,
          }}>
            {/* Sau này sẽ sử dụng vòng for để render. */}
            <CardNews />
            <CardNews />
            <CardNews />
          </View>
        </View>
        <View>
          <View
            style={{
              height: Dimensions.get('window').width * 0.125,
              width: Dimensions.get('window').width * 0.8,
              borderWidth: 2,
              borderColor: "#20397A",
              borderRadius: 10,
              marginBottom: Dimensions.get('window').width * 0.05,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: 16, color: "#20397A", fontWeight: "700" }}
            >
              Xem thêm
            </Text>
          </View>
        </View>

        {/* News */}
        <View style={{
          width: Dimensions.get('window').width,
          backgroundColor: '#EBE5F7',
        }}>
          <View style={{
            width: Dimensions.get('window').width * 0.86,
            marginVertical: Dimensions.get('window').height * 0.035,
            marginHorizontal: Dimensions.get('window').width * 0.07,
            borderRadius: 16,
            overflow: 'hidden',
          }}>
            <Text style={{ fontSize: 24, fontWeight: "800", color: "#20397A" }}>
              Tin tức
            </Text>
            <FlatList
              data={[{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }]}
              renderItem={() => <CardNews_1 />}
              keyExtractor={(item, index) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={
                <View style={{ width: 15 }}></View>
              }
              style={{
                marginTop: 10,
              }}
            />
          </View>
          <View>
            <View
              style={{
                height: Dimensions.get('window').width * 0.125,
                width: Dimensions.get('window').width * 0.8,
                borderWidth: 2,
                borderColor: "#20397A",
                borderRadius: 16,
                // marginVertical: Dimensions.get('window').width * 0.05,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontSize: 16, color: "#20397A", fontWeight: "700" }}
              >
                Xem thêm
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#EBE5F7",
              overflow: 'hidden',
              height: 225,
              transform: [{ translateX: 0 }, { translateY: 0 }],
            }}
          >
            <Image
              source={require("../storages/endbackground.png")}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

import React from "react";
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../screenComponent/home/Header";
import CardMini from "../screenComponent/home/CardMini";
import Menu from "../screenComponent/home/Menu";
import Campaign from "../screenComponent/home/Campaign";
import CardNews from "../screenComponent/home/CardNews";
import CardNews_1 from "../screenComponent/home/CardNews_1";


const followerList = [
  { id: '1', name: 'Nguyễn Minh Thảo', followYear: '03/04/2021', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/bb9a/c965/60ee06ab42b36e66007cfe3c6b06e222?Expires=1699833600&Signature=Z8R7cTvZi1RdTPE4CcEur-bQXLMCKFl8lrzmSoSaRzueDgBKYcTidSZN5jkyJtk6Ic8Gq6P5QO8MfsZvqRk-LNUjOFH2KU75KcyMcPmWJa119TSg18jfl9-hVEicP2OiqUyakvKOvXi8ANtljhAOnIqtvIG3-9mGDASUVsMNHTBI8svLUrhNpsdElMOj8xe~G2FjrXav3KHr5UgXkZuXxLchPif5cWme44ruP7OI9Ihhbi1OrtR5xOC-Fd4ptWmbI1yq9-raBLEfyEvBwmeR6ANjf5SD~HKczRw-S-30x7Y4ra2VDUfw2~mmBbsNBCuqmhaEhyxI0LLdggl~KgRB4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
  { id: '2', name: 'Đặng Nhật Nam', followYear: '07/06/2021', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/18a4/68da/0ecb8c01864548fbe0321a76a86b85e6?Expires=1699833600&Signature=OS0lD7StggYEBKlxP9V8twHBzb2-R7u5Yyo8sDy8bY9fhjaAAswnjNaVnjUxq3S8kOyi9VoRB0qhM9jWm-DLq1IJ9c0YGRhgxYelv6w017hQ3Fam0-vEyaT8Tk7Xw~B6TIfmGxRtuokJcpX2HnLKtkh2y-YZORNIG~rT-da1moLU5gttxuf-w1lVQufL1rPwQQVrmRDuDGytOBJZbUUsCWtUpCUKOZMJmCnAzWk13~-hwQfJXIrDmltUKkTYvH0XQ9Ttxy2uM63Mn0xgeyWeZ8qlpsToWnJb3fcNCBbuOhi9HzfMWyX3GoidG86-6qbrwMFQOnr-RTwalxlpk7CvEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '3', name: 'Nguyễn Minh Kiên', followYear: '22/12/2021', isFiend: false, avatarURI: 'https://s3-alpha-sig.figma.com/img/49df/5d86/5aa389d4533ecf6806503b5a218cae51?Expires=1699833600&Signature=Pbf0YocdpPWOi4-Up2n8NfoVftTeJa8sL27LdV9WPKj3aDpIlAcBOfI~Uil7zOQCeBmB3C8O04iEGk8yps4eBFBsTANURBTrfCtAKrnoK2HtRocq~pWNVtlpP4ur~ndxrw2TWP5Bm4ZMQlEoBycubKVOlni5BAE-KzlU1YyCg-T3xcv-PW5PN1lr619v9mdkvy5FUdpcu1s0XMlDJXGMgXsvhMVq3-vr-KjHs4M3Pv0hB0Aij320Gq4UD-wBognoeoc~QbSK7QaKI9XCHssgH7SQlUtBQRahxzUj9rbCnKlHyFVlRjB4cxDKf6cWW53vzuSamS6zQEQuzS9VNxo27A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '4', name: 'Trần Văn Tuấn', followYear: '01/01/2022', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/3ded/8f85/cfb18168a1700d02198306783fb17610?Expires=1699833600&Signature=XQ6oeaXMNDkUAeTegZkjsQ-N~JjeifRxeyY7iLwPfSXPG0JfyZtPbgv2GRvFzN1JB28WqKp8mL3xH8JhrS~oNqhFCaFiNraqk2oAo3WkklQo-1NBZBwmTB5yIaUfhV9z-crsuXRU7pY~xiXZAJP08pB546P2fmmYABCiQyjoDMPss21EmUvZcBdTxXtO5AYKG8k4qFY4b-3Olp8Z43fGwXcHEhX1A5UylEFGp7f8NVlptl3hY~jrRip9hZtEup0nZvdd6x~PfLKFEs26RzhqGhEfHlxl1bb21lqYXl6qNz6NsXs8vWmCyG7Gu1f4MjrIJiI41fHqWzJgbhR4Rtr8Dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '5', name: 'Trịnh Hương Nhung', followYear: '12/03/2022', isFiend: false, avatarURI: 'https://s3-alpha-sig.figma.com/img/7cd3/a9a0/a62f88ac8f8d8dd921b12aa4ffa4fc5b?Expires=1699833600&Signature=ARmUqAsXoPWh9AiROEpGCJ1KLcP2EzfdWyrwm3hmq5ztIWE4O~OBkHvX0fLEtdCwyF~gJ8--goh1mFTvTpML1t1AyPpD7BhV691VoL6xUaV5r8pQ5WUd4uIQ~CdP-jldhptZxKZjJhTJ4n74UPCL154mFESch1TFdv8klZzOFAGxRXBJgEHunJKCs90lcA0IA45i0tXpM5OcLlNhgx3k9NH2~BbNWHjeUatghMppTJuV3pwbxuVu8Juff4Q-yT1f6jxGb4w9xo84TMmeetUIJ0wThCdc7CmY-h-a6taMG0OR~B3GNtdkFZpH9EkiwQgJ45L8O~eWK5dKezrGMdqwoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '6', name: 'Lê Thu Hà', followYear: '17/05/2022', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/cead/3b6f/542211e5466e67364740e38e3c0f6b1b?Expires=1699833600&Signature=mbbaxgGQbKLg1DgNdZGOyDCzMbGhnJ5gtm4rteRMI5-MsfIWxCZ6u6uxAS3velSP20LZtUh09Hit-6DynhEsfW7zaddnRshHXuZ3~HuuzWm99iokL-qdHNzZtwR8oGjRIT4p1zRbpiUe4b7b645Cxv~zvvNHh13BcExISd4Xb1r7vzKUu~jelVHOyCtQgo8jxbbn~gSd~4Jd4uIHjvxfqtxAtiuqGWQJm~jY3HjmM5c7-kd98yKkdGxNxV60I4~cigaPMFiyi~nM-PqS4weCgsljlWhwJcIWY3OVNWdEsxCmJGzmvk33auMOIyvAgQnx7p96DQ3kqvE2TR5xtnac9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '7', name: 'Khương Anh Kiệt', followYear: '22/06/2022', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/7b50/5edd/2e1468de430b925a2eea4bcfb4380bde?Expires=1699833600&Signature=WLrA7ekseEwiksow9lKuDLyuNgrri9w93Ct4k9iiM0Xsg7sMBFPLhfUe771AyXJhSpnk4D9hv2tsBNXrQo2OYR02EmWtPK81~w9qNhTJIl064o29BpJIP74j4I1nQoflDxbqeKjWPt6ZCzJZ9B22MjVLIgKKvj3kfdmbpRHvFedpPD3Z6NNdBsDrb26v7HzVZ3jgpn9onA1xLfxlAFzGju77jcR9hVLMLgvUfuIQH7khNAcvWlbTpXWhxK3hPxcvFX0APPuUI1BKsWnu6TX4DzpPTtuXwssld30KGUMiSpQF9td9RPK5nQPTNBLjkviNEuxfXfoQy4bHGEg1BZW9Lg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '8', name: 'Nguyễn Minh Huyền', followYear: '29/08/2022', isFiend: true, avatarURI: 'https://i.pinimg.com/564x/55/4f/3b/554f3b287e85124910d4c4ff448f3d20.jpg' },
  { id: '9', name: 'Lê Việt Hà', followYear: '16/10/2022', isFiend: false, avatarURI: 'https://i.pinimg.com/564x/8f/78/ed/8f78edaf16ad2f3e0115ed3c94096f4d.jpg' },
  { id: '10', name: 'Nguyễn Minh Huy', followYear: '07/03/2023', isFiend: false, avatarURI: 'https://i.pinimg.com/564x/8c/29/5a/8c295a263778e023d4fb5474cb5fb17c.jpg' },
  { id: '11', name: 'Quách Ngọc Hưng', followYear: '17/10/2023', isFiend: false, avatarURI: 'https://i.pinimg.com/564x/27/05/63/270563b54216fe9967359962520decba.jpg' },
];

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
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
            <Menu navigation={navigation} />
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

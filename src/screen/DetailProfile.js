import {
  Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Pressable, ImageBackground, FlatList
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

let progressNumberColor = "#000";
let progressColor = '#D9D9D9';


function CampItem({ item }) {
  let image = { uri: 'https://cdnphoto.dantri.com.vn/R96UV8RILpgk057FBZ3n90_B8Ow=/thumb_w/1360/2023/08/24/z4632592106399c54c87a7cac066b5cee00a798667cf7b-crop-1692873287748.jpeg?watermark=true' }

  let progress = 85;
  if (progress >= 80) {
    progressColor = '#3CD24B';
  } else if (20 <= progress && progress < 80) {
    progressColor = '#FC7900';
  } else {
    progressColor = '#EB0000';
  }
  let remainingDays = 32;
  if (remainingDays > 60) {
    progressNumberColor = "#76df81";
  } else if (remainingDays > 15 && remainingDays <= 60) {
    progressNumberColor = "#fca14c";
  } else if (remainingDays > 0 && remainingDays <= 15) {
    progressNumberColor = "#f14c4c";
  } else {
    progressNumberColor = '#EAEAEA';
  }

  return (
    <View style={styles.itemContainer}>
      <View style={[styles.centered, {
        margin: Dimensions.get('window').width * 0.03,
        width: Dimensions.get('window').width * 0.39,
      }]}>
        <Image source={image} style={styles.image} resizeMode="contain" />
        <View style={[styles.flexRow, {
          justifyContent: 'space-between', width: Dimensions.get('window').width * 0.39, marginTop: Dimensions.get('window').height * 0.01,
        }]}>
          <View style={[styles.flexRow, { alignItems: 'center' }]}>
            <Text style={[styles.progressText, { color: progressColor, }]}>Đang thực hiện{ }</Text>
          </View>
          <View style={{
            backgroundColor: progressNumberColor, borderRadius: 3,
          }}>
            <Text style={[styles.progressNumber, { paddingHorizontal: Dimensions.get('window').width * 0.01 }]}>
              { }32 ngày
            </Text>
          </View>
        </View>
        <Text style={styles.camTitle}>
          { }
          Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo.
        </Text>
        <View style={{ backgroundColor: "#D9D9D9", borderRadius: 10, height: 7, width: Dimensions.get('window').width * 0.39, marginVertical: Dimensions.get('window').height * 0.01, }}>
          <View style={{ width: '80%', height: 7, backgroundColor: progressColor, borderRadius: 10 }}></View>
        </View>
      </View>
    </View>
  )
}

const MyCampAndSupport = ({ renderItems }) => {
  return (
    <View style={[styles.contentContainer, { backgroundColor: '#000000', }]}>
      <View style={styles.myCamp}>
        <Text style={styles.titleText}>Chiến dịch của bạn</Text>
        <FlatList
          horizontal={true}
          data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
          renderItem={renderItems}
          keyExtractor={(item, index) => item.id}
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: Dimensions.get('window').width * 0.05, height: Dimensions.get('window').height * 0.01 }}></View>}
        />
      </View>
      <View style={styles.myCamp}>
        <Text style={styles.titleText}>Chiến dịch của bạn</Text>
        <FlatList
          horizontal={true}
          data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
          renderItem={renderItems}
          keyExtractor={(item, index) => item.id}
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: Dimensions.get('window').width * 0.05, height: Dimensions.get('window').height * 0.01 }}></View>}
        />
      </View>
    </View>
  )
}

function FollowItem({ item }) {
  let userIcon = <AntDesign name="user" size={32} color="#000" />

  return (
    <View style={[styles.flexRow, { alignItems: 'center', justifyContent: 'space-between' }]}>
      <View style={[styles.flexRow, { alignItems: 'center', columnGap: Dimensions.get('window').width * 0.025 }]}>
        <View style={{
          backgroundColor: "#b2b2b2",
          borderRadius: 100,
          height: Dimensions.get('window').width * 0.125,
          width: Dimensions.get('window').width * 0.125,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {userIcon}
        </View>
        <View>
          <View>
            <Text>{ }Helpage International</Text>
            <Text>Theo dõi { }2 năm trước</Text>
          </View>
        </View>
      </View>
      <Pressable>
        <View>
          <Feather name="user-check" size={24} color="#001A72" />
        </View>
      </Pressable>
    </View >
  )
}

const Follow = ({ }) => {
  const renderFollowItem = ({ item }) => {
    return (
      <View style={{}}>
        <FollowItem item={item} />
      </View>
    )
  }

  return (
    <View style={[styles.contentContainer, { backgroundColor: "#fff" }]}>
      <View style={styles.follow}>
        <FlatList
          data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]}
          renderItem={renderFollowItem}
          alwaysBounceVertical={true}
          scrollEnabled={false}
          keyExtractor={(item, index) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: Dimensions.get('window').width * 0.05, height: Dimensions.get('window').height * 0.01 }}></View>}
        />
      </View>
    </View>
  )
}

const DetailProfile = () => {
  const navigation = useNavigation();
  const [contentActive, SetContentActive] = useState(1);

  const renderItems = ({ item }) => {
    return <CampItem item={item} />
  }

  return (
    <View style={styles.container}>
      <View style={styles.proFileHeader}>
        <View style={[styles.flexRow, {
          columnGap: Dimensions.get('window').width * 0.05,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }]}
        >
          <Pressable
            onPress={() => navigation.goBack()}
          >
            <View style={styles.backBtn}>
              <AntDesign name="left" size={30} color="white" />
            </View>
          </Pressable>
          <View>
            <Text style={styles.headerTitle}>Trang cá nhân</Text>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.centered, { height: Dimensions.get('window').height * 0.4, marginBottom: Dimensions.get('window').height * 0.03, }]}>
          <View style={{ width: Dimensions.get('window').width * 0.25, height: Dimensions.get('window').width * 0.25 }}>
            <ImageBackground
              source={require('../storages/Ellipse37.png')}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
              resizeMode="cover"
            >
              <Image
                source={require('../storages/avt.png')}
                style={{
                  width: Dimensions.get('window').width * 0.22,
                  height: Dimensions.get('window').width * 0.22,
                }}
                resizeMode="contain"
              />
            </ImageBackground>
          </View>
          <View style={[styles.centered, { rowGap: Dimensions.get('window').height * 0.005 }]}>
            <Text style={styles.textBold900Black}>Lưu Phương Trà</Text>
            <Text>@phuongtra12</Text>
            <Text
              numberOfLines={2}
              style={[styles.smText, {
                width: Dimensions.get('window').width * 0.75,
                textAlign: 'center',
                fontWeight: '700',
              },]}
            >BIO người dùng: <Text style={styles.smText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text></Text>
          </View>
          <View style={[styles.flexRow, { columnGap: Dimensions.get('window').width * 0.05, }]}>
            <Pressable>
              <View style={[styles.centered, { width: Dimensions.get('window').width * 0.25 }]}>
                <Text style={styles.textBold900Black}>{ }45</Text>
                <Text style={styles.smText} numberOfLines={1}>Người theo dõi</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={[styles.centered, { width: Dimensions.get('window').width * 0.25 }]}>
                <Text style={styles.textBold900Black}>{ }345</Text>
                <Text style={styles.smText} numberOfLines={1}>Đang theo dõi</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('Donation')}
            >
              <View style={[styles.centered, { width: Dimensions.get('window').width * 0.25 }]}>
                <Text style={styles.textBold900Black}>{ }30</Text>
                <Text style={styles.smText} numberOfLines={1}>Lượt ủng hộ</Text>
              </View>
            </Pressable>
          </View>
        </View>

        {/* My camp */}
        {(contentActive ?
          <MyCampAndSupport renderItems={renderItems} /> :
          <Follow />
        )}


      </ScrollView >
    </View >
  );
};

export default DetailProfile;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  centered: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    backgroundColor: "#FFF5F7",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  proFileHeader: {
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.9,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginHorizontal: Dimensions.get('window').width * 0.05,
    marginVertical: Dimensions.get('window').height * 0.02,
  },
  headerTitle: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "500",
    letterSpacing: -0.528,
  },
  backBtn: {
    backgroundColor: "#C7BFC1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    width: Dimensions.get('window').width * 0.1,
  },
  title: {
    color: "#000",
    fontSize: 16,
    fontWeight: '700',
  },
  textBold900Black: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  smText: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: -0.308,
    color: '#757575',
  },
  contentContainer: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: Dimensions.get('window').height * 0.03,
    // height: Dimensions.get('window').height,
    // width: Dimensions.get('window').width,
  },
  myCamp: {
    backgroundColor: '#000000',
    width: Dimensions.get('window').width * 0.85,
    marginHorizontal: Dimensions.get('window').width * 0.075,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.45,
  },
  image: {
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.4,
    height: (Dimensions.get('window').width * 0.4) / 1.54,
  },
  camTitle: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.308,
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.44,
    marginTop: Dimensions.get('window').height * 0.02,
    marginBottom: Dimensions.get('window').height * 0.015,
  },
  progressText: {
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: -0.22,
  },
  progressNumber: {
    color: progressNumberColor,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: -0.22,
  },
  follow: {
    width: Dimensions.get('window').width * 0.85,
    marginHorizontal: Dimensions.get('window').width * 0.075,
    backgroundColor: "#fff",
  }
});

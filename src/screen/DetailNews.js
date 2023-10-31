import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";

const DetailNews = (props) => {
  const size = Dimensions.get('window').width * 0.08;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View>
          <ImageBackground
            source={require("../storages/cardnews/img1.png")}
          >
            <View
              style={[styles.headerContent, styles.flexRow,]}
            >
              <View style={[styles.btnNavigationHead, { width: size * 1.5, height: size * 1.5 }]}>
                <AntDesign name="left" size={size} color="#fff" />
              </View>
              <View style={[styles.btnNavigationHead, { width: size * 1.5, height: size * 1.5 }]}>
                <AntDesign name="sharealt" size={size} color="#fff" />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.flexRow, styles.centered, styles.campainStatus]}>
          <View style={[styles.flexRow, { columnGap: 5, alignItems: 'center' }]}>
            <View>
              <Image source={require('../storages/icon/lifebuoy.png')} />
            </View>
            <View >
              <Text style={styles.campainTitleText}>Mục tiêu chiến dịch</Text>
              <Text style={styles.campainText}>70.000.000{ } vnd</Text>
            </View>
          </View>
          <View style={[styles.flexRow, { columnGap: 5, alignItems: 'center' }]}>
            <View>
              <Image source={require('../storages/icon/clock.png')} />
            </View>
            <View>
              <Text style={styles.campainTitleText}>Thời gian còn lại</Text>
              <Text style={styles.campainText}>30{ } vnd</Text>
            </View>
          </View>
        </View>
        <View style={{ width: "85%", alignSelf: "center" }}>
          <Text style={styles.titleText}>{ }Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo</Text>
          <View style={[styles.flexRow, { alignItems: 'center', columnGap: 5, marginTop: Dimensions.get('window').height * 0.01 }]}>
            <View>
              <Image style={{ width: 24, height: 24, borderRadius: 24, }} source={{ uri: 'https://i.pinimg.com/564x/8c/29/5a/8c295a263778e023d4fb5474cb5fb17c.jpg' }} />
            </View>
            <Text style={[styles.fS14, styles.nameText]}>Phương Trà{ } <Text style={styles.textSm}>đã tạo chiến dịch</Text></Text>
          </View>
        </View>
        <View style={{ width: Dimensions.get('window').width * 0.85, marginVertical: Dimensions.get('window').width * 0.05, alignSelf: 'center', borderRadius: 20, overflow: 'hidden' }}>
          <View style={{ width: "100%", height: 10, alignSelf: "center", backgroundColor: "#D9D9D9", }}>
            <View style={{ backgroundColor: "#FC7900", width: "10%", height: 10 }}></View>
          </View>
        </View>
        <View style={[styles.flexRow, { width: Dimensions.get('window').width * 0.85, alignItems: 'center', alignSelf: 'center', justifyContent: 'space-between' }]}>
          <View style={styles.flexRow}>
            <Text>Đã đạt được:</Text>
            <Text>7.000.000{ } VND</Text>
          </View>
          <View>
            <Text>10{ }%</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailNews;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
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
  textmini: {
    color: "#757575",
  },
  textminibold: {
    fontWeight: "700",
  },
  headerContent: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width / 2,
    marginHorizontal: Dimensions.get('window').width * 0.05,
    paddingTop: Dimensions.get('window').height * 0.05,
    justifyContent: 'space-between',
  },
  btnNavigationHead: {
    backgroundColor: "rgba(0, 0, 0, 0.22)",
    borderRadius: Dimensions.get('window').width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  campainStatus: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: Dimensions.get('window').height * 0.02
  },
  campainTitleText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#757575',
  },
  campainText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
  },
  titleText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.44,
  },
  fS14: {
    fontSize: 14,
    lineHeight: 21,
  },
  nameText: {
    color: "#FF617D",
    fontWeight: '700',
  },
  textSm: {
    color: '#757575',
    fontWeight: '400',
  },
});

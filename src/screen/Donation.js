import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DonateHistoryItem from "../component/utilities/DonateHistoryItem";

const Donation = () => {
  const listDonate = [
    { id: "7", date: "17/12/2022", time: "12:30", donate: "2.000.000", message: "Chúc gia đình luôn khỏe mạnh", cp: "Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo." },
    { id: "6", date: "10/12/2022", time: "14:30", donate: "500.000", message: "Chúc gia đình luôn khỏe mạnh", cp: "Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo." },
    { id: "5", date: "15/11/2022", time: "21:30", donate: "800.000", message: "Chúc gia đình luôn khỏe mạnh", cp: "Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo." },
    { id: "4", date: "15/11/2022", time: "18:00", donate: "200.000", message: "Chúc gia đình luôn khỏe mạnh", cp: "Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo." },
    { id: "3", date: "15/11/2022", time: "09:00", donate: "900.000", message: "Chúc gia đình luôn khỏe mạnh", cp: "Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo." },
    { id: "2", date: "20/08/2022", time: "19:00", donate: "100.000", message: "Chúc gia đình luôn khỏe mạnh", cp: "Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo." },
    { id: "1", date: "20/08/2022", time: "18:58", donate: "50.000", message: "Chúc gia đình luôn khỏe mạnh", cp: "Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo." },
  ];
  const navigation = useNavigation();

  const RenderScrollView = () => {
    let objectDonate = {};
    listDonate.forEach((donate) => {
      const dateDonate = donate.date;
      if (!objectDonate[dateDonate]) {
        objectDonate[dateDonate] = [];
      }
      objectDonate[dateDonate] = [...objectDonate[dateDonate], donate];
    });
    let arrayDonate = Object.entries(objectDonate);
    return <>
      {
        arrayDonate.map((donateEle) => {
          return < DonateHistoryItem key={`${donateEle[0]}`} listDonate={donateEle[1]} date={donateEle[0]} />;
        })
      }
    </>;

  }
  // (< DonateHistoryItem key={`${dateNow}`} listDonate={currentList} />)

  return (
    <View style={{
      backgroundColor: "#FFF5F7",
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }}>
      <View
        style={{
          height: Dimensions.get('window').height * 0.1,
          width: Dimensions.get('window').width * 0.9,
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          marginHorizontal: Dimensions.get('window').width * 0.05,
          marginVertical: Dimensions.get('window').height * 0.02,
        }}
      >
        <View style={[
          styles.flexRow,
          {
            columnGap: Dimensions.get('window').width * 0.05,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }
        ]}
        >
          <Pressable
            onPress={() => navigation.goBack()}
          >
            <View style={styles.backBtn}>
              <AntDesign name="left" size={30} color="white" />
            </View>
          </Pressable>
          <View>
            <Text style={styles.headerTitle}>Ủng hộ của tôi</Text>
          </View>
        </View>
      </View>
      <View style={{
      }}>
        <ImageBackground
          source={require('../storages/toltalBackGround.png')}
        >
          <View style={[styles.centered, {
            width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').width * 0.9 / 1.56,
            marginHorizontal: Dimensions.get('window').width * 0.05,
            paddingVertical: Dimensions.get('window').height * 0.03,
          }]}>
            <Text style={styles.scriptText}>Tổng số tiền bạn đã ủng hộ</Text>
            <Text style={styles.totalText}>{ }3.231.000</Text>
            <Text style={styles.scriptText}>Cập nhật lần cuối: { } 17/12/2022, 19h</Text>
            <View style={[styles.flexRow, { columnGap: Dimensions.get('window').width * 0.1 }]}>
              <View style={styles.centered}>
                <Text style={styles.scriptText}>Số lần ủng hộ</Text>
                <Text style={styles.numberText}>30</Text>
              </View>
              <View style={{ height: "100%", borderWidth: 0.5, borderColor: "#fff" }}></View>
              <View style={styles.centered}>
                <Text style={styles.scriptText}>Số dự án ủng hộ</Text>
                <Text style={styles.numberText}>21</Text>
              </View>
            </View>
            <View style={[styles.centered, styles.flexRow, { columnGap: Dimensions.get('window').width * 0.05 }]}>
              <Text style={styles.cardName}>{ }LUU PHUONG TRA</Text>
            </View>
          </View>
        </ImageBackground>
      </View >
      <View style={{
        backgroundColor: "#FFFFFF",
        marginVertical: Dimensions.get('window').height * 0.01,
        borderRadius: 10,
      }}>
        <View style={{
          width: Dimensions.get('window').width * 0.8,
          marginHorizontal: Dimensions.get('window').width * 0.1,
          marginVertical: Dimensions.get('window').height * 0.01,
        }}>
          <Text style={styles.title}>Danh sách giao dịch</Text>
          <Text style={{ color: '#000', fontSize: 14, fontWeight: '400' }}>Sao kê sẽ hiển thị lịch sử giao dịch trong toàn bộ thời gian chiến dịch thực hiện</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: Dimensions.get('window').height * 0.5,
        }}>
        <View style={{
          width: Dimensions.get('window').width * 0.9,
          marginHorizontal: Dimensions.get('window').width * 0.05,
          marginBottom: Dimensions.get('window').height * 0.02,
        }}>
          <RenderScrollView />
        </View>
      </ScrollView>
    </View >
  );
};

export default Donation;

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
  scriptText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: "400",
  },
  totalText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '900',
  },
  numberText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  cardNumber: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
  cardName: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
  title: {
    color: "#000",
    fontSize: 16,
    fontWeight: '700',
  },
});

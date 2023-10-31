import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MenuBtn from "../screenComponent/plus/MenuBtn";
import { Entypo, Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const Plus = () => {
  const menu = [
    {
      id: 1,
      logo: require("../storages/plus/laptop.png"),
      text: "Công nghệ",
    },
    {
      id: 2,
      logo: require("../storages/plus/shirt.png"),
      text: "Quần áo",
    },
    {
      id: 3,
      logo: require("../storages/plus/bone.png"),
      text: "Thực phẩm",
    },
    {
      id: 4,
      logo: require("../storages/plus/car.png"),
      text: "Phương tiện",
    },
  ];
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView >
        <View style={{ height: 150, backgroundColor: "#FF8096" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 60,
            }}
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 16, color: "#2D81FF" }}>Cancel</Text>
            </TouchableOpacity>

            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "900",
              }}
            >
              Tạo chiến dịch mới
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 16, color: "#2D81FF" }}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ backgroundColor: "#FF8096", height: 120 }}>
          <View
            style={{
              height: 40,
              backgroundColor: "black",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "700",
                marginLeft: 30,
              }}
            >
              Hình thức
            </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 20,
              }}
            >
              <View style={styles.btn}>
                <Text>Ủng hộ tiền</Text>
              </View>
              <View style={styles.btn}>
                <Text>Vật chất</Text>
              </View>
              <View style={styles.btn}>
                <Text>Tình nguyện</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              height: 40,
              backgroundColor: "black",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "700",
                marginLeft: 30,
              }}
            >
              Chính
            </Text>
          </View>
          <View style={{ height: 270, backgroundColor: "#FF8096" }}>
            <View style={{ alignItems: "center" }}>
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: "700", marginVertical: 20 }}
                >
                  Tiêu đề chiến dịch (hiển thị)
                </Text>
                <TextInput
                  style={{
                    width: 368,
                    height: 59,
                    backgroundColor: "white",
                    borderRadius: 8,
                    paddingLeft: 15,
                  }}
                  placeholder="Nhập"
                />
              </View>
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: "700", marginVertical: 20 }}
                >
                  Địa điểm hoàn cảnh, chiến dịch
                </Text>
                <TextInput
                  style={{
                    width: 368,
                    height: 59,
                    backgroundColor: "white",
                    borderRadius: 8,
                    paddingLeft: 15,
                  }}
                  placeholder="(Huyện, Tỉnh)"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 380, backgroundColor: "#FF8096" }}>
          <View
            style={{
              height: 40,
              backgroundColor: "black",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "700",
                marginLeft: 30,
              }}
            >
              Nhóm chiến dịch (hoàn cảnh)
            </Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <MenuBtn />
          </View>
        </View>
        <View
          style={{
            height: 300,
            backgroundColor: "#FF8096",
          }}
        >
          <View
            style={{
              height: 40,
              backgroundColor: "black",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "700",
                marginLeft: 30,
              }}
            >
              Mô tả
            </Text>
          </View>
          <View style={{ alignItems: "center", marginVertical: 20 }}>
            <Image source={require("../storages/plus/input.png")} />
          </View>
        </View>
        <View style={{ height: 235, backgroundColor: "#FF8096" }}>
          <View
            style={{
              height: 40,
              backgroundColor: "black",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "700",
                marginLeft: 30,
              }}
            >
              Ảnh bìa
            </Text>
          </View>
          <View style={{ alignItems: "center", marginVertical: 20 }}>
            <Image source={require("../storages/plus/upload.png")} />
          </View>
        </View>
        <View style={{ height: 140, backgroundColor: "#FF8096" }}>
          <View
            style={{
              height: 40,
              backgroundColor: "black",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "700",
                marginLeft: 30,
              }}
            >
              Mục tiêu chiến dịch
            </Text>
          </View>
          <View style={{ marginVertical: 20, alignItems: "center" }}>
            <TextInput
              style={{
                width: 368,
                height: 59,
                backgroundColor: "white",
                borderRadius: 8,
                paddingLeft: 15,
              }}
              placeholder="VND"
            />
          </View>
        </View>
        <View style={{ height: 230, backgroundColor: "#FF8096" }}>
          <View
            style={{
              height: 40,
              backgroundColor: "black",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "700",
                marginLeft: 30,
              }}
            >
              Mục tiêu chiến dịch
            </Text>
          </View>
          <View style={{ marginVertical: 20, alignItems: "center" }}>
            <TextInput
              style={{
                width: 368,
                height: 59,
                backgroundColor: "white",
                borderRadius: 8,
                paddingLeft: 15,
              }}
              placeholder="Bắt đầu: Ngày/Tháng/Năm"
            />
          </View>
          <View style={{ marginVertical: 5, alignItems: "center" }}>
            <TextInput
              style={{
                width: 368,
                height: 59,
                backgroundColor: "white",
                borderRadius: 8,
                paddingLeft: 15,
              }}
              placeholder="Kết thúc: Ngày/Tháng/Năm"
            />
          </View>
        </View>
        <View>
          <View
            style={{
              height: 54,
              backgroundColor: "black",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "700",
                marginLeft: 30,
              }}
            >
              THÔNG TIN ỦNG HỘ
            </Text>
          </View>
          <View
            style={{
              height: 84,
              backgroundColor: "#EBE5F7",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  backgroundColor: "#20397A",
                  width: 44,
                  height: 44,
                  borderRadius: 39,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather name="user" size={28} color="white" />
              </View>
              <View style={{ width: 314, height: 38, marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#20397A",
                    fontWeight: "700",
                  }}
                >
                  Nhân vật trong chiến dịch
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#20397A",
                    fontWeight: "400",
                  }}
                >
                  (Ủng hộ trực tiếp)
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 500,
              backgroundColor: "#20397A",
              alignItems: "center",
            }}
          >
            <View style={{ marginTop: 15 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginVertical: 15,
                  color: "white",
                }}
              >
                Tên nhân vật
              </Text>
              <TextInput
                style={{
                  width: 368,
                  height: 59,
                  backgroundColor: "white",
                  borderRadius: 8,
                  paddingLeft: 15,
                }}
                placeholder="Nhập"
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginVertical: 15,
                  color: "white",
                }}
              >
                Số điện thoại
              </Text>
              <TextInput
                style={{
                  width: 368,
                  height: 59,
                  backgroundColor: "white",
                  borderRadius: 8,
                  paddingLeft: 15,
                }}
                placeholder="Nhập"
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginVertical: 15,
                  color: "white",
                }}
              >
                Địa chỉ
              </Text>
              <TextInput
                style={{
                  width: 368,
                  height: 59,
                  backgroundColor: "white",
                  borderRadius: 8,
                  paddingLeft: 15,
                }}
                placeholder="Nhập"
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginVertical: 15,
                  color: "white",
                }}
              >
                Tài khoản ngân hàng
              </Text>
              <TextInput
                style={{
                  width: 368,
                  height: 59,
                  backgroundColor: "white",
                  borderRadius: 8,
                  paddingLeft: 15,
                }}
                placeholder="Nhập"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            height: 1070,
            backgroundColor: "#EBE5F7",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "black",
                width: 44,
                height: 44,
                borderRadius: 39,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="user" size={28} color="white" />
            </View>
            <View style={{ width: 314, height: 38, marginLeft: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  fontWeight: "700",
                }}
              >
                Người/Tổ chức tạo chiến dịch
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  fontWeight: "400",
                }}
              >
                (Ủng hộ trực tiếp)
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 709,
              width: "100%",
              marginTop: 35,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#A49CF2",
                width: 394,
                height: 77,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <Image source={require("../storages/plus/avt.png")} />
              </View>
              <View style={{ width: 263, marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "white",
                    marginBottom: 5,
                  }}
                >
                  Phương Trà
                </Text>
                <Text style={{ fontSize: 12, color: "#FFDFE5" }}>
                  Tham gia: 6 tháng trước
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginVertical: 15,
                  color: "#0818A8",
                }}
              >
                Số điện thoại
              </Text>
              <TextInput
                style={{
                  width: 368,
                  height: 59,
                  backgroundColor: "#EEF7FF",
                  borderRadius: 8,
                  paddingLeft: 15,
                }}
                placeholder="Nhập"
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",

                  color: "#0818A8",
                }}
              >
                Tài khoản ngân hàng
              </Text>
              <Text
                style={{
                  width: 368,
                  fontSize: 16,
                  color: "#0818A8",
                  marginBottom: 15,
                }}
              >
                (tài khoản từ thiện - công khai sao kê giao dịch thường xuyên)
              </Text>
              <TextInput
                style={{
                  width: 368,
                  height: 59,
                  backgroundColor: "#EEF7FF",
                  borderRadius: 8,
                  paddingLeft: 15,
                }}
                placeholder="Nhập"
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../storages/radio/radio1.png")} />
                <Image
                  source={require("../storages/plus/bank1.png")}
                  style={{ marginLeft: 10 }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Image source={require("../storages/radio/radio.png")} />
                <Image
                  source={require("../storages/plus/bank2.png")}
                  style={{ marginLeft: 10 }}
                />
              </View>
            </View>
            <View
              style={{
                height: 40,
                width: 257,
                borderWidth: 1,
                borderColor: "#20397A",
                alignSelf: "flex-start",
                marginLeft: 30,
                marginTop: 40,
                borderRadius: 10,
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Entypo name="plus" size={24} color="#20397A" />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "#20397A",
                  marginLeft: 10,
                }}
              >
                Thêm thẻ liên kết khác
              </Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginVertical: 15,
                  color: "#0818A8",
                }}
              >
                Địa chỉ{" "}
                <Text style={{ fontWeight: "300" }}>
                  (địa điểm nhận đồ từ thiện/cứu trợ)
                </Text>
              </Text>
              <TextInput
                style={{
                  width: 368,
                  height: 59,
                  backgroundColor: "#EEF7FF",
                  borderRadius: 8,
                  paddingLeft: 15,
                }}
                placeholder="Nhập"
              />
            </View>
            <View
              style={{
                marginTop: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "85%",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginVertical: 15,
                  color: "#0818A8",
                }}
              >
                Địa chỉ
              </Text>
              <Feather name="info" size={20} color="#0818A8" />
            </View>
            <View
              style={{ marginTop: 10, alignSelf: "flex-start", marginLeft: 30 }}
            >
              <View style={{ flexDirection: "row" }}>
                {menu.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={{
                        width: 62,
                        height: 86,
                        alignItems: "center",
                        marginRight: 15,
                      }}
                    >
                      <View
                        style={{
                          width: 54,
                          height: 54,
                          backgroundColor: "white",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 20,
                          borderWidth: 2,
                          borderColor: "#20397A",
                        }}
                      >
                        <Image source={item.logo} />
                      </View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "400",
                          color: "#20397A",
                          marginTop: 5,
                          textAlign: "center",
                        }}
                      >
                        {item.text}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Plus;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: "black",
    width: "auto",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    padding: 10,
    marginHorizontal: 5,
  },
});

import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Image, Text, Dimensions, ActivityIndicator } from "react-native";
import { getDateDMY } from "./GetDateByDMY";

const { currentDate, currentTime } = getDateDMY();
function DonateHistoryItem(props) {
    const [isDataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
        if (props) {
            setDataLoaded(true);
        }
    }, [props]);
    if (!isDataLoaded) {
        return <View style={[styles.centered]}>
            <ActivityIndicator size="large" />
        </View>
    }

    const renderItem = ({ item }) => {
        return (
            <View style={{
                backgroundColor: "#EBE5F7",
                borderRadius: 10,
                padding: Dimensions.get('window').width * 0.05,
            }}>
                <View>
                    <View style={[styles.flexRow, styles.flex_between,]}>
                        <View style={[styles.flexRow, { columnGap: Dimensions.get('window').width * 0.015 }]}>
                            <Text>Từ:</Text>
                            <Image style={{ height: 24, width: 24 }} source={require('../../storages/plus/avt.png')} />
                            <Text style={{ color: "#FF617D" }}>Phương Trà{ }</Text>
                        </View>
                        <Text style={styles.moneyText}>{item.donate}</Text>
                    </View>
                    <View style={[styles.flexRow, styles.flex_between]}>
                        <Text>{item.message}</Text>
                        <Text>{item.time}</Text>
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: "", marginVertical: Dimensions.get('window').height * 0.01 }}></View>
                    <View style={[styles.flexRow, { columnGap: Dimensions.get('window').width * 0.015 }]}>
                        <View style={{ width: "30%", }}>
                            <Text style={styles.smText}>Đến chiến dịch</Text>
                        </View>
                        <View style={{ width: "70%", }}>
                            <Text style={styles.cpText} numberOfLines={2}>{item.cp}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{
            width: Dimensions.get('window').width * 0.8,
            marginHorizontal: Dimensions.get('window').width * 0.05,
        }}>
            <FlatList
                data={props.listDonate}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                scrollEnabled={false}
                ItemSeparatorComponent={() => (
                    <View style={{ height: 10, }}></View>
                )}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View style={{ marginVertical: Dimensions.get('window').height * 0.02 }}>
                        {currentDate == props.date ?
                            <View style={[styles.flexRow, styles.flex_between]}>
                                <Text style={styles.donateDate}>Hôm nay, ngày {currentDate}</Text>
                                <Text>{props.listDonate.length} giao dịch</Text>
                            </View> :
                            <View style={[styles.flexRow, styles.flex_between]}>
                                <Text style={styles.donateDate}>Ngày {props.date}</Text>
                                <Text>{props.listDonate.length} giao dịch</Text>
                            </View>
                        }
                    </View>
                )}
            />
        </View>
    )
}

export default DonateHistoryItem;

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
    },
    centered: {
        alignItems: "center",
        justifyContent: "center",
    },
    flex_between: {
        justifyContent: "space-between",
    },
    donateDate: {
        color: "#000",
        fontSize: 16,
        fontWeight: '700',
    },
    moneyText: {
        color: "#EA4E4E",
        fontSize: 14,
        fontWeight: "700",
    },
    smText: {
        fontSize: 12,
        fontWeight: '400',
        color: "#757575",
        letterSpacing: -0.2,
    },
    cpText: {
        color: "#20397A",
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: -0.2,
    }


});
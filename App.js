import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootStack from "./src/router/RootStack";

export default function App() {
  return (
    <>
      <StatusBar style="auto" backgroundColor="#FFDFE5" />
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <RootStack />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

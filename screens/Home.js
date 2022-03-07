import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native";
import React from "react";
import { HeaderTabs, SafeArea } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerTabContainer}>
        <HeaderTabs />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
    backgroundColor: "#eee",
    flex: 1,
  },
  headerTabContainer: {
    backgroundColor: "white",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    width: "90%",
    maxWidth: 300,
    padding: 10,
    borderRadius: 10,
  },
});

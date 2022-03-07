import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native";
import React from "react";
import { Categories, HeaderTabs, SearchBar } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerTabContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS !== "ios" ? StatusBar.currentHeight + 10 : 0,
    backgroundColor: "#eee",
    flex: 1,
  },
  headerTabContainer: {
    backgroundColor: "white",
    padding: 15,
  },
});

import React from "react";
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

export default (props) => (
  <SafeAreaView style={styles.AndroidSafeArea} {...props}>
    {props.children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

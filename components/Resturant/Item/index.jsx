import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import ImageComponent from "./Image";
import Info from "./Info";

const Item = () => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={{ marginBottom: 30 }}>
      <View style={styles.container}>
        <ImageComponent />
        <Info />
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

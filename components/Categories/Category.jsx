import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Category = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.imageContainer} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 20,
  },
  imageContainer: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  text: {
    fontWeight: "bold",
    marginTop: 5,
  },
});

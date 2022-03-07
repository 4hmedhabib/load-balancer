import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Info = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Farmhouse Kitchen Thai Cuisine</Text>
        <Text style={styles.time}>30 - 45 min</Text>
      </View>
      <View style={styles.reviewContainer}>
        <Text style={styles.review}>4.5</Text>
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {},
  title: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.9,
  },
  time: {
    fontSize: 13,
    color: "gray",
  },
  reviewContainer: {
    backgroundColor: "#eee",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});

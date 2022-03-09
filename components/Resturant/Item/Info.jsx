import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Info = ({ info }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{info.name}</Text>
        <Text style={styles.time}>30 - 45 min</Text>
      </View>
      <View style={styles.reviewContainer}>
        <Text style={styles.review}>{info.rating}</Text>
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
    marginTop: 7,
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

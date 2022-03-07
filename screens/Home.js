import { Text, StyleSheet } from "react-native";
import React from "react";
import { SafeArea } from "../components";

const Home = () => {
  return (
    <SafeArea>
      <Text>Home</Text>
    </SafeArea>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

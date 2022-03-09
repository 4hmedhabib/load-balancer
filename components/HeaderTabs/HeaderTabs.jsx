import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Button from "./Button";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={styles.screen}>
      <Button
        title="Delivery"
        color="white"
        bgColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Button
        title="Pickup"
        color="black"
        bgColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    alignSelf: "center",
  },
});

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={styles.screen}>
      <HeaderButton
        title="Delivery"
        color="white"
        bgColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        color="black"
        bgColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = ({ title, activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnBox,
        { backgroundColor: activeTab === title ? "black" : "white" },
      ]}
      onPress={() => setActiveTab(title)}
    >
      <Text
        style={[
          styles.btnTitle,
          { color: activeTab === title ? "white" : "black" },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    alignSelf: "center",
  },
  btnBox: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  btnTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ title, activeTab, setActiveTab }) => {
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

export default Button;

const styles = StyleSheet.create({
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

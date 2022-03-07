import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";

const HeaderTabs = () => {
  return (
    <View style={styles.screen}>
      <HeaderButton title="Delivery" color="white" bgColor="black" />
      <HeaderButton title="Pickup" color="black" bgColor="white" />
    </View>
  );
};

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.btnBox, { backgroundColor: props.bgColor }]}
    >
      <Text style={[styles.btnTitle, { color: props.color }]}>
        {props.title}
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

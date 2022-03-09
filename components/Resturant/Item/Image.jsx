import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

const ImageComponent = ({ source }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: source,
        }}
      />
      <TouchableOpacity style={styles.heartOutline}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
  },
  heartOutline: {
    position: "absolute",
    right: 20,
    top: 20,
  },
});

import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

const ImageComponent = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: "https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg",
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
  },
  heartOutline: {
    position: "absolute",
    right: 20,
    top: 20,
  },
});

import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import ImageComponent from "./Image";
import Info from "./Info";

const Item = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={{ marginBottom: 30 }}>
      {props.restaurantData.map((restuarant, index) => (
        <View key={index} style={styles.container}>
          <ImageComponent source={restuarant.image_url} />
          <Info info={restuarant} />
        </View>
      ))}
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 3,
  },
});

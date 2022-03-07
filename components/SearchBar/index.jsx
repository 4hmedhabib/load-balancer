import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = () => {
  return (
    <View style={styles.screen}>
      <GooglePlacesAutocomplete
        placeholder="Search.."
        styles={{
          textInput: styles.textInput,
          textInputContainer: styles.textInputContainer,
        }}
        renderLeftButton={() => (
          <View style={styles.renderLeftButton}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.renderRightButton}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  screen: {
    marginTop: 15,
    flexDirection: "row",
  },
  textInput: {
    backgroundColor: "#eee",
    borderRadius: 20,
    fontWeight: "bold",
    marginTop: 7,
    paddingHorizontal: 15,
    textDecorationLine: "none",
  },
  textInputContainer: {
    backgroundColor: "#eee",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  renderLeftButton: {
    marginLeft: 10,
  },
  renderRightButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: "white",
    padding: 9,
    borderRadius: 30,
  },
});

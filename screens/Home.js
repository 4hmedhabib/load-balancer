import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  Categories,
  HeaderTabs,
  SearchBar,
  RestaurantItems,
} from "../components";

import { items, localRestaurants } from "../data";

const Home = () => {
  const [restaurantItems, setRestaurantItems] = useState(localRestaurants);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerTabContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories items={items} />
        <RestaurantItems restaurantData={restaurantItems} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS !== "ios" ? StatusBar.currentHeight + 10 : 0,
    backgroundColor: "#eee",
    flex: 1,
  },
  headerTabContainer: {
    backgroundColor: "white",
    padding: 15,
  },
});

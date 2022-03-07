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

const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

const Home = () => {
  const [restaurantItems, setRestaurantItems] = useState(localRestaurants);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log("Restaurant", responseJson);
        setRestaurantItems(responseJson.businesses);
      });
  };

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

import React from "react";
import { StyleSheet, Image, View, Platform } from "react-native";

const Header = () => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require("./PIG_money_ALT.png")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    paddingTop: Platform.OS === "ios" ? 10 : 30,
    alignItems: "center",
  },

  image: {
    width: 30,
    height: 23
  }
});

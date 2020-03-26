import React from "react";
import { StyleSheet, Image, View, Platform, Dimensions } from "react-native";

const Header = () => {
  if (Dimensions.get("window").height < 600) {
    return <View />;
  } else {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("./PIG_money_ALT.png")} />
      </View>
    );
  }
};

export default Header;

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    paddingTop:
      Platform.OS === "ios" ? windowHeight * 0.015 : windowHeight * 0.03 + 6,
    alignItems: "center"
  },

  image: {
    width: 30,
    height: 23
  }
});

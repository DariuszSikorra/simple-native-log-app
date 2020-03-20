import React from "react";
import { StyleSheet, Image } from "react-native";

const HeaderImg = () => {
  return (
      <Image style={styles.image} source={require("./PIG_money_ALT.png")} />
  );
};

export default HeaderImg;

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 23,
  }
});

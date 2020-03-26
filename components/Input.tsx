import React from "react";
import { TextInput, StyleSheet, Dimensions } from "react-native";
import Colors from "../assets/theme/Colors";

const Input = props => {
  return (
    <TextInput
      placeholderTextColor={Colors.primary}
      {...props}
      style={{ ...styles.input, ...props.style }}
    />
  );
};

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 4,
    height: windowHeight * 0.035 + 25,
    padding: windowHeight * 0.01 + 5,
    fontSize: windowHeight * 0.015 + 4
  }
});

export default Input;

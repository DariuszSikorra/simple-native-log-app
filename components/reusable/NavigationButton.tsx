import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback,Platform, Dimensions } from "react-native";
import Colors from "../../assets/theme/Colors";

const NavigationButton = props => {
    let ButtonComponent: any = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
      ButtonComponent = TouchableNativeFeedback;
    }
  
    return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <Text style={styles.buttonText} >{props.children}</Text>
      </ButtonComponent>
    </View>
  );
};

export default NavigationButton;

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  buttonContainer: {
  },
  buttonText: {
    fontFamily: "quicksand",
    color: Colors.primary,
    fontSize: windowHeight * 0.015 + 8,
    margin: windowHeight * 0.015 + 10,
    marginTop: Platform.OS === "ios" ?  windowHeight * 0.01 : 48 - windowHeight * 0.025
  }
});

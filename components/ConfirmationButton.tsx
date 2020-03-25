import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Dimensions
} from "react-native";
import Colors from "../assets/theme/Colors";

const ConfirmationButton = props => {
  let ButtonComponent: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...styles.buttonContainer, ...props.style }}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <Text style={{ ...styles.buttonText, ...props.textProps }}>
          {props.children}
        </Text>
      </ButtonComponent>
    </View>
  );
};

export default ConfirmationButton;

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.button,
    // borderRadius: 25,
    borderRadius: windowHeight * 0.025 + 8,
    // minWidth: 170,
    minWidth: windowWidth * 0.3 + 50,
    // marginBottom: 49
    marginBottom: windowHeight * 0.05
  },
  buttonText: {
    fontFamily: "quicksand-bold",
    color: "white",
    // fontSize: 20,
    fontSize: windowHeight * 0.015 + 7,
    // margin: 15,
    margin: windowHeight * 0.01 + 4,
    textAlign: "center"
  }
});

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import Colors from "../../assets/theme/Colors";

const ConfirmationButton = props => {
  let ButtonComponent: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={{...styles.buttonContainer, ...props.style}}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <Text style={{...styles.buttonText, ...props.textProps}}>{props.children}</Text>
      </ButtonComponent>
    </View>
  );
};

export default ConfirmationButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.button,
    borderRadius: 25,
    minWidth: 170,
    marginBottom: 49
  },
  buttonText: {
    fontFamily: "quicksand-bold",
    color: "white",
    fontSize: 20,
    margin: 15,
    textAlign: "center"
  }
});

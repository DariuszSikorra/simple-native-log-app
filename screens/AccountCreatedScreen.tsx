import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import ConfirmationButton from "../components/PersonForm/ConfirmationButton";
import Colors from "../assets/theme/Colors";

const AccountCreatedScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/AccountCreatedScreen/IMG.png")} />
      </View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Account created!</Text>
      </View>
      <View style={styles.nextButtonContainer}>
        <ConfirmationButton onPress={() => navigation.popToTop()}>
          Continue
        </ConfirmationButton>
      </View>
    </View>
  );
};

export default AccountCreatedScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  imageContainer: {
    marginTop: 160
  },
  image: {
    width: 232,
    height: 232
  },
  mainTextContainer: { width: "80%", marginTop: 50 },
  mainText: {
    fontFamily: "quicksand-bold",
    fontSize: 48,
    textAlign: "center",
    color: Colors.primary
  },
  nextButtonContainer: { flex: 1, justifyContent: "flex-end" }
});

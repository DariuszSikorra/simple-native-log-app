import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../assets/theme/Colors";
import Header from "../assets/Header";
import LayoutWrapper from "../assets/LayoutWrapper";
import ConfirmationButton from "../components/ConfirmationButton";

const AccountCreatedScreen = ({ navigation }) => {
  return (
    <LayoutWrapper>
      <Header />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/AccountCreatedScreen/IMG.png")}
        />
      </View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Account created!</Text>
      </View>
      <View style={styles.nextButtonContainer}>
        <ConfirmationButton onPress={() => navigation.navigate("TakeAPhotoScreen")}>
          Continue
        </ConfirmationButton>
      </View>
    </LayoutWrapper>
  );
};

export default AccountCreatedScreen;

const styles = StyleSheet.create({
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

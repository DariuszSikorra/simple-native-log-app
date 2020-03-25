import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

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
        <ConfirmationButton
          onPress={() => navigation.navigate("TakeAPhotoScreen")}
        >
          Continue
        </ConfirmationButton>
      </View>
    </LayoutWrapper>
  );
};

export default AccountCreatedScreen;

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  imageContainer: {
    // marginTop: 160
    marginTop: windowHeight * 0.2
  },
  image: {
    width: windowWidth * 0.55,
    height: windowWidth * 0.55
  },
  mainTextContainer: {
    width: "80%",
    // marginTop: 50
    marginTop: windowHeight * 0.06
  },
  mainText: {
    fontFamily: "quicksand-bold",
    // fontSize: 48,
    fontSize: windowHeight * 0.045 + 10,
    textAlign: "center",
    color: Colors.primary
  },
  nextButtonContainer: { flex: 1, justifyContent: "flex-end" }
});

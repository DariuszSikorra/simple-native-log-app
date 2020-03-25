import React from "react";
import { StyleSheet, Text, View, Alert, Image, Dimensions } from "react-native";

import Colors from "../assets/theme/Colors";
import Header from "../assets/Header";
import LayoutWrapper from "../assets/LayoutWrapper";
import ConfirmationButton from "../components/ConfirmationButton";

const WelcomeScreen = props => {
  return (
    <LayoutWrapper>
      <Header />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Lower my bills</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/WelcomeScreen/IMG.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Let's get started</Text>
        <Text style={styles.secText}>
          Create a new account or log in to an exsisting one.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ConfirmationButton
          style={styles.createNewAccountButton}
          onPress={() => props.navigation.navigate("CreateAccount")}
          textProps={styles.textProps}
        >
          Create a new account
        </ConfirmationButton>
        <ConfirmationButton
          onPress={() => {
            Alert.alert("Log In to my account", "Coming soon...", [
              { text: "Sorry!", style: "cancel" }
            ]);
          }}
        >
          Log In to my Account
        </ConfirmationButton>
      </View>
    </LayoutWrapper>
  );
};

export default WelcomeScreen;

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  headerTextContainer: {
    // marginTop: 22
    marginTop: windowHeight * 0.01 + 16
  },
  headerText: {
    fontFamily: "quicksand-bold",
    // fontSize: 20,
    fontSize: windowHeight * 0.012 + 10,
    textAlign: "center",
    color: Colors.primary
  },
  imgContainer: { marginTop: windowHeight * 0.03 + 10 },
  img: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5
  },
  textContainer: {
    // marginTop: 100,
    marginTop: windowHeight * 0.14 - 20,
    width: "80%"
  },
  mainText: {
    fontFamily: "quicksand-bold",
    // fontSize: 39,
    fontSize: windowHeight * 0.035 + 10,
    textAlign: "center",
    color: Colors.primary
  },
  secText: {
    fontFamily: "quicksand",
    // fontSize: 16,
    fontSize: windowHeight * 0.012 + 5,
    textAlign: "center",
    color: Colors.primary,
    // marginTop: 40
    marginTop: windowHeight * 0.037 + 5
  },
  buttonContainer: { flex: 1, justifyContent: "flex-end" },
  createNewAccountButton: {
    marginBottom: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: Colors.button
  },
  textProps: {
    color: Colors.button
  }
});

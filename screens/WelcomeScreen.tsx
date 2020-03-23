import React from "react";
import { StyleSheet, Text, View, Alert, Image } from "react-native";
import ConfirmationButton from "../components/components/ConfirmationButton";
import Colors from "../assets/theme/Colors";

const WelcomeScreen = props => {
  return (
    <View style={styles.screen}>
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
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  headerTextContainer: {},
  headerText: {
    fontFamily: "quicksand-bold",
    fontSize: 20,
    textAlign: "center",
    color: Colors.primary
  },
  imgContainer: { marginTop: 40 },
  img: {},
  textContainer: { marginTop: 130, width: "80%" },
  mainText: {
    fontFamily: "quicksand-bold",
    fontSize: 39,
    textAlign: "center",
    color: Colors.primary
  },
  secText: {
    fontFamily: "quicksand",
    fontSize: 16,
    textAlign: "center",
    color: Colors.primary,
    marginTop: 40
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

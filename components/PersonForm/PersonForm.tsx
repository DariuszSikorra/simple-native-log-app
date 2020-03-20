import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Input from "./Input";
import Colors from "../../assets/theme/Colors";
import ConfirmationButton from "./ConfirmationButton";

const PersonForm = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          autoCapitalize="off"
          autoCorrect={false}
          placeholder="Email"
          onChangeText={inputText => setUserName(inputText)}
          value={userName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          autoCapitalize="off"
          autoCorrect={false}
          placeholder="Password"
          onChangeText={inputText => setPassword(inputText)}
          value={password}
        />
      </View>
      <View style={styles.agreementContainer}>
        <Text style={styles.agreement}>
          By activating my account, I agree to the{" "}
          <Text
            style={{
              fontFamily: "quicksand-bold",
              textDecorationLine: "underline"
            }}
          >
            terms and conditions
          </Text>
        </Text>
      </View>
      <View style={styles.nextButtonContainer}>
        <ConfirmationButton
          title="Next"
          onPress={() => navigation.navigate("AccountCreated")}
        >
          Next
        </ConfirmationButton>
      </View>
    </View>
  );
};

export default PersonForm;

const styles = StyleSheet.create({
  container: { width: "90%", flex: 1 },
  inputContainer: {
    height: 56,
    marginBottom: 30
  },
  agreementContainer: {
    width: "75%"
  },
  agreement: {
    fontFamily: "quicksand",
    color: Colors.primary,
    textAlign: "center",
    fontSize: 16
  },
  nextButtonContainer: {
    justifyContent: "flex-end",
    flex: 1
  }
});

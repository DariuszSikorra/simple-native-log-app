import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../assets/theme/Colors";

import PersonForm from "../components/components/PersonForm";
import NavigationButton from "../components/components/NavigationButton";

const CreateAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.backButtonContainer}>
        <NavigationButton onPress={() => navigation.goBack()}>
          {"< back"}
        </NavigationButton>
      </View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Create your account</Text>
      </View>
      <View style={styles.personImgContainer}>
        <Image
          source={require("../assets/CreateAccountScreen/PERSON.png")}
          style={styles.personImg}
        />
      </View>
      <PersonForm navigation={navigation} />
    </View>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white"
  },
  backButtonContainer: {
    alignSelf: "flex-start"
  },
  mainTextContainer: {
    width: "80%",
    marginTop: 20,
    marginBottom: 120
  },
  mainText: {
    fontFamily: "quicksand-bold",
    color: Colors.primary,
    fontSize: 39,
    lineHeight: 49,
    textAlign: "center"
  },
  personImgContainer: {
    marginBottom: 30
  },
  personImg: {}
});

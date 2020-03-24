import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import Colors from "../assets/theme/Colors";

import PersonForm from "../components/PersonForm";
import Header from "../assets/Header";
import LayoutWrapper from "../assets/LayoutWrapper";
import NavigationButton from "../components/NavigationButton";

const CreateAccountScreen = ({ navigation }) => {
  return (
    <LayoutWrapper style={styles.screen}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <View style={styles.wrapperContainer}>
          <Header />
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
      </TouchableWithoutFeedback>
    </LayoutWrapper>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  screen: {
    justifyContent: "flex-start"
  },
  wrapperContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  backButtonContainer: {
    alignSelf: "flex-start"
  },
  mainTextContainer: {
    width: "80%",
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

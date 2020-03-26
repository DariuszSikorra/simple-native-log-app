import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions
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

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    justifyContent: "flex-start"
  },
  wrapperContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth
  },
  backButtonContainer: {
    alignSelf: "flex-start"
  },
  mainTextContainer: {
    width: "80%",
    marginBottom: windowHeight * 0.15,
  },
  mainText: {
    fontFamily: "quicksand-bold",
    color: Colors.primary,
    fontSize: windowHeight * 0.035 +10 ,
    textAlign: "center"
  },
  personImgContainer: {
    marginBottom: windowHeight * 0.06 - 10
  },
  personImg: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.11
  }
});

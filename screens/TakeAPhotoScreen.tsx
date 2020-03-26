import React, { useState } from "react";
import { StyleSheet, Image, View, Dimensions, Alert, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import LayoutWrapper from "../assets/LayoutWrapper";
import ConfirmationButton from "../components/ConfirmationButton";
import { SAVE_USER_PICTURE } from "../store/actions";
import Header from "../assets/Header";
import NavigationButton from "../components/NavigationButton";
import Colors from "../assets/theme/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const TakeAPhotoScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userData);
  const [picture, setPicture] = useState(null);
  const [error, setError] = useState(false);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const handleTakePicture = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image: any = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5
    });

    setPicture(image.uri);
    setError(false);
  };

  const handleContinue = () => {
    dispatch({ type: SAVE_USER_PICTURE, payload: picture });

    if (picture) {
      navigation.popToTop();
    }

    if (!picture) {
      setError(true);
    }
  };

  return (
    <LayoutWrapper style={styles.screen}>
      <Header />
      <View style={styles.backButtonContainer}>
        <NavigationButton onPress={() => navigation.goBack()}>
          {"< back"}
        </NavigationButton>
      </View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Take a profile photo</Text>
      </View>
      <View style={styles.minorTextContainer}>
        <Text style={styles.minorText}>
          First, let’s see if we can make this easy. Take and cut your picture
          to required format:
        </Text>
      </View>
      {!picture ? (
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={handleTakePicture}
            style={styles.previewImage}
          >
            <View style={styles.prevImageTextContainer}>
              <Text style={styles.minorText}>Take a picture</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handleTakePicture}>
            <Image style={styles.previewImage} source={{ uri: picture }} />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.noticeContainer}>
        {error && (
          <Text style={styles.noticeText}>
            To go further please take a picture.
          </Text>
        )}
      </View>
      <ConfirmationButton onPress={handleContinue}>Continue</ConfirmationButton>
    </LayoutWrapper>
  );
};

export default TakeAPhotoScreen;

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    justifyContent: "flex-start"
  },
  backButtonContainer: { alignSelf: "flex-start" },
  mainTextContainer: {
    width: "80%"
  },
  mainText: {
    fontFamily: "quicksand-bold",
    color: Colors.primary,
    fontSize: windowHeight * 0.035 + 10,
    textAlign: "center"
  },
  minorTextContainer: {
    alignItems: "center",
    width: "90%"
  },
  minorText: {
    fontFamily: "quicksand",
    textAlign: "center",
    color: Colors.primary,
    fontSize: windowHeight * 0.015 + 5,
    width: windowWidth * 0.85,
    marginTop: windowHeight * 0.02 + 5
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  previewImage: {
    width: windowWidth * 0.6,
    height: windowWidth * 0.6,
    borderRadius: windowWidth * 0.4,
    borderColor: Colors.button,
    borderWidth: 1,
    backgroundColor: "lightgray"
  },
  prevImageTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  imageButton: {},
  noticeContainer: {
    margin: windowHeight * 0.04 - 10,
    height: windowHeight * 0.01 + 6
  },
  noticeText: {
    textAlign: "center",
    fontFamily: "quicksand",
    fontSize: windowHeight * 0.01 + 6,
    color: Colors.messages
  }
});

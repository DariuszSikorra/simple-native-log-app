import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ConfirmationButton from "./ConfirmationButton";

const ImgPicker = props => {
  const [pickedImage, setPickedImage] = useState("");

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL); //Gallery is CAMERA_ROLL
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
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });

    setPickedImage(image.uri);
    props.onImageTaken(image.uri);
  };

  return (
    <View>
      <View>
        {!pickedImage ? (
          <Text>No image picked yet</Text>
        ) : (
          <Image
            style={{ width: 400, height: 300 }}
            source={{ uri: pickedImage }}
          />
        )}
      </View>
      <ConfirmationButton onPress={handleTakePicture}>
        take picture
      </ConfirmationButton>
    </View>
  );
};

export default ImgPicker;

const styles = StyleSheet.create({});

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LayoutWrapper from "../assets/LayoutWrapper";
import ConfirmationButton from "../components/ConfirmationButton";
import ImgPicker from "../components/ImgPicker";

const TakeAPhotoScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState()
  
const handleImageTaken = (imagePath) => {
    setSelectedImage(imagePath)
}

    return (
    <LayoutWrapper>
      <ImgPicker onImageTaken={handleImageTaken} />
      <ConfirmationButton onPress={() => navigation.popToTop()}>
        Continue
      </ConfirmationButton>
    </LayoutWrapper>
  );
};

export default TakeAPhotoScreen;

const styles = StyleSheet.create({});

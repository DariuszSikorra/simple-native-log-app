import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Controller } from "react-hook-form";
import Input from "./Input";
import Colors from "../../assets/theme/Colors";

const FormField = ({
  name,
  placeholder,
  autoCapitalize,
  keyboardType,
  blurOnSubmit,
  secureTextEntry,
  control,
  onChangeText,
  rules,
  value,
  errors
}) => {
  return (
    <View style={styles.inputContainer}>
      <Controller
        name={name}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        blurOnSubmit={blurOnSubmit}
        secureTextEntry={secureTextEntry}
        as={Input}
        control={control}
        onChangeText={onChangeText}
        rules={rules}
        value={value}
      />
      <View style={styles.validationErrorContainer}>
        {errors && <Text style={styles.validationError}>{errors.message}</Text>}
      </View>
    </View>
  );
};

export default FormField;

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  inputContainer: {
    height: windowHeight * 0.04 + 15,
    marginBottom: windowHeight * 0.01 + 30
  },
  validationErrorContainer: {
    marginTop: windowHeight * 0.015 - 4
  },
  validationError: {
    textAlign: "center",
    fontFamily: "quicksand",
    fontSize: windowHeight * 0.01 + 6,
    color: Colors.messages
  }
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Controller } from "react-hook-form";
import Input from "./Input";

const FormField = ({
  name,
  placeholder,
  autoCapitalize,
  keyboardType,
  control,
  onChangeText,
  rules,
  value
}) => {
  return (
    <View>
      <Controller
        name={name}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        as={Input}
        control={control}
        onChangeText={onChangeText}
        rules={rules}
        value={value}
      />
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({});

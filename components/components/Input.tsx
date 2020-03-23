import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../../assets/theme/Colors";

const Input = props => {
  return <TextInput placeholderTextColor={Colors.primary} {...props} style={{...styles.input, ...props.style}}  />;
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 4,
        height: 50,
        padding: 13
    }
})

export default Input;
 
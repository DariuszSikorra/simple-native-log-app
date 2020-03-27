import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import ConfirmationButton from "./reusable/ConfirmationButton";
import Colors from "../assets/theme/Colors";
import { SAVE_EMAIL_PASSWORD } from "../store/actions";
import FormField from "./reusable/FormField";

type defaultValuesType = {
  email: string;
  password: string;
};

const defaultValues: defaultValuesType = {
  email: "",
  password: ""
};

const PersonForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const { handleSubmit, setValue, watch, errors, control } = useForm({
    defaultValues,
    validateCriteriaMode: "all"
  });
  const values = watch();

  const onSubmit = data => {
    navigation.navigate("AccountCreated");
    dispatch({
      type: SAVE_EMAIL_PASSWORD,
      payload: { email: data.email, password: data.password }
    });
  };

  const emailRules = {
    required: "Email address is required",
    pattern: {
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Email in not valid"
    }
  };

  const passwordRules = {
    required: "Password is required",
    pattern: {
      value: /^(?=.*\d)[A-Za-z\d].*$/,
      message: "Password is to short"
    },
    minLength: { value: 6, message: "Password require at least 1 digit." }
  };

  return (
    <View style={styles.container}>
      <FormField
        name="email"
        placeholder="email"
        autoCapitalize="none"
        keyboardType="email-address"
        secureTextEntry={false}
        blurOnSubmit={false}
        control={control}
        onChangeText={(text: string) => {
          setValue("email", text);
        }}
        rules={emailRules}
        value={values.email}
        errors={errors.email}
      />

      <FormField
        name="password"
        placeholder="password"
        autoCapitalize="none"
        keyboardType="default"
        secureTextEntry={true}
        blurOnSubmit={false}
        control={control}
        onChangeText={(text: string) => {
          setValue("password", text);
        }}
        value={values.password}
        rules={passwordRules}
        errors={errors.password}
      />

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
        <ConfirmationButton title="Next" onPress={handleSubmit(onSubmit)}>
          Next
        </ConfirmationButton>
        {/* <ConfirmationButton title="Next" onPress={onSubmit}>
          Next
        </ConfirmationButton> */}
      </View>
    </View>
  );
};

export default PersonForm;

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: { width: windowWidth * 0.9, flex: 1 },

  validationErrorContainer: {
    marginTop: windowHeight * 0.015 - 4
  },
  validationError: {
    textAlign: "center",
    fontFamily: "quicksand",
    fontSize: windowHeight * 0.01 + 6,
    color: Colors.messages
  },
  agreementContainer: {
    alignItems: "center"
  },
  agreement: {
    fontFamily: "quicksand",
    textAlign: "center",
    color: Colors.primary,
    fontSize: windowHeight * 0.013 + 5,
    width: "90%",
    marginTop: windowHeight * 0.025
  },
  nextButtonContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    marginTop: windowHeight * 0.02
  }
});

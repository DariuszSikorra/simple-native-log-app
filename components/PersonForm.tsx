import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";

import Input from "./reusable/Input";
import ConfirmationButton from "./ConfirmationButton";
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
    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  };

  const passwordRules = {
    required: "Password is required",
    pattern: /^(?=.*\d)[A-Za-z\d].*$/,
    minLength: 6
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FormField
          name="email"
          placeholder="email"
          autoCapitalize="none"
          keyboardType="email-address"
          control={control}
          onChangeText={(text: string) => {
            setValue("email", text);
          }}
          rules={emailRules}
          value={values.email}
        />
        <View style={styles.validationErrorContainer}>
          {errors.email &&
            //@ts-ignore
            errors.email.types.required && (
              <Text style={styles.validationError}>Email is required</Text>
            )}
          {errors.email &&
            //@ts-ignore
            errors.email.types.pattern && (
              <Text style={styles.validationError}>Email in not valid</Text>
            )}
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Controller
          name="password"
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry={true}
          blurOnSubmit={false}
          as={Input}
          control={control}
          onChangeText={(text: string) => {
            setValue("password", text);
          }}
          blurOn
          value={values.password}
          rules={passwordRules}
        />
        <View style={styles.validationErrorContainer}>
          {errors.password &&
            //@ts-ignore
            errors.password.types.required && (
              <Text style={styles.validationError}>Password is required</Text>
            )}
          {errors.password &&
            //@ts-ignore
            errors.password.types.minLength && (
              <Text style={styles.validationError}>Password is to short</Text>
            )}
          {errors.password &&
            //@ts-ignore
            errors.password.types.pattern && (
              <Text style={styles.validationError}>
                Password require at least 1 digit.
              </Text>
            )}
        </View>
      </View>

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

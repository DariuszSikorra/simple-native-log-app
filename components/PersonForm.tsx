import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useForm } from "react-hook-form";

import Input from "./Input";
import ConfirmationButton from "./ConfirmationButton";
import Colors from "../assets/theme/Colors";

type defaultValuesType = {
  email: string;
  password: string;
};

const defaultValues: defaultValuesType = {
  email: "",
  password: ""
};

const PersonForm = ({ navigation }) => {
  const { register, handleSubmit, setValue, watch, errors } = useForm({
    defaultValues,
    validateCriteriaMode: "all"
  });
  const values = watch();

  const onSubmit = data => {
    console.log(data);
    navigation.navigate("AccountCreated");
  };

  useEffect(() => {
    register(
      { name: "email" },
      {
        required: "Email address is required",
        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      }
    );

    register(
      { name: "password" },
      {
        required: "Password is required",
        pattern: /^(?=.*\d)[A-Za-z\d].*$/,
        minLength: 6
      }
    );
  }, [register]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          blurOnSubmit={true}
          autoCapitalize="none"
          placeholder="email"
          textContentType="emailAddress"
          onChangeText={text => {
            setValue("email", text);
          }}
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
        <Input
          secureTextEntry={true}
          autoCapitalize="none"
          blurOnSubmit={false}
          placeholder="password"
          textContentType="password"
          onChangeText={text => {
            setValue("password", text);
          }}
          value={values.password}
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
      {/* <ConfirmationButton title="Next" onPress={handleSubmit(onSubmit)}>
          Next
        </ConfirmationButton>         */}
        <ConfirmationButton title="Next" onPress={onSubmit}>
          Next
        </ConfirmationButton>
      </View>
    </View>
  );
};

export default PersonForm;

const styles = StyleSheet.create({
  container: { width: "90%", flex: 1 },
  inputContainer: {
    height: 56,
    marginBottom: 40
  },
  validationErrorContainer: {
    marginTop: 10
  },
  validationError: {
    textAlign: "center",
    fontFamily: "quicksand",
    fontSize: 13,
    color: Colors.messages
  },
  agreementContainer: {
    alignItems: "center"
  },
  agreement: {
    fontFamily: "quicksand",
    textAlign: "center",
    color: Colors.primary,
    fontSize: 16,
    width: "90%",
    marginTop: 30
  },
  nextButtonContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1
  }
});

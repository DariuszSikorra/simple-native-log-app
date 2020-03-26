import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import AccountCreatedScreen from "../screens/AccountCreatedScreen";
import TakeAPhotoScreen from "../screens/TakeAPhotoScreen";
import PersonalInformation from "../screens/PersonalInformation";

const Stack = createStackNavigator();

const NavigatorStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            title: "Welcome",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{
            title: "Create Account",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="AccountCreated"
          component={AccountCreatedScreen}
          options={{
            title: "Account created!",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="TakeAPhotoScreen"
          component={TakeAPhotoScreen}
          options={{
            title: "Take a Photo",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
          options={{
            title: "Set personal info",
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorStack;

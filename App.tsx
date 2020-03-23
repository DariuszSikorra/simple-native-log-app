import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import AccountCreatedScreen from "./screens/AccountCreatedScreen";
import HeaderImg from "./assets/HeaderImg";

const fetchFonts = () => {
  return Font.loadAsync({
    "quicksand": require("./assets/fonts/Quicksand-Medium.ttf"),
    "quicksand-bold": require("./assets/fonts/Quicksand-Bold.ttf")
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            title: "Welcome",
            headerTitle: () => <HeaderImg />,
            headerLeft: null
          }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{
            title: "Create account",
            headerTitle: () => <HeaderImg />,
            headerLeft: null,
            headerTransparent: true
          }}
        />
        <Stack.Screen
          name="AccountCreated"
          component={AccountCreatedScreen}
          options={{
            title: "Account created!",
            headerTitle: () => <HeaderImg />,
            headerLeft: null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

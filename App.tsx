import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import NavigatorStack from "./components/NavigatorStack";

const fetchFonts = () => {
  return Font.loadAsync({
    quicksand: require("./assets/fonts/Quicksand-Medium.ttf"),
    "quicksand-bold": require("./assets/fonts/Quicksand-Bold.ttf")
  });
};


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
    <NavigatorStack />
  );
}

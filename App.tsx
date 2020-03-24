import React, { useState } from "react";
import { AppLoading } from "expo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as Font from "expo-font";

import NavigatorStack from "./components/NavigatorStack";
import reducer from "./store/reducers";

const fetchFonts = () => {
  return Font.loadAsync({
    quicksand: require("./assets/fonts/Quicksand-Medium.ttf"),
    "quicksand-bold": require("./assets/fonts/Quicksand-Bold.ttf")
  });
};

const store = createStore(reducer);

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
    <Provider store={store} >
      <NavigatorStack />
    </Provider>
  );
}

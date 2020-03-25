import React from "react";
import { StyleSheet, ScrollView, Dimensions, View, SafeAreaView, Platform } from "react-native";

const LayoutWrapper = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ ...props.styles, ...styles.screen }}>
          {props.children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LayoutWrapper;

const styles = StyleSheet.create({
  safeAreaView: { flex: 1, paddingHorizontal: 20 },
  screen: {
    flex: 1,
    minHeight: Platform.OS === "ios" ? Dimensions.get("window").height * 0.9 : Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  }
});

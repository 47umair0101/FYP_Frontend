import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomNavigator from "../bottom-tabs/BottomNavigator";

const Main = () => {
  return (
    <View style={styles.container}>
      <BottomNavigator />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppBootstrap } from "./components/index";
import Navigator from "./config/Navigator";
import { colors } from "./utils/colors";

export default function App() {
  return (
    <AppBootstrap>
      <StatusBar
        // style="auto"
        backgroundColor={colors.yellow} // Set the background color to F7A538
        barStyle="light-content" // Set the text color to white (#FFF)
      />
      <Navigator />
    </AppBootstrap>
  );
}

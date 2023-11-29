import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { colors } from "../../utils/colors";
import { UserLocationContext } from "../../config/UserLocationContext";
import * as Location from "expo-location";

const AppBootstrap = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Inter: require("../../../assets/fonts/Inter-Regular.ttf"),
        InterBold: require("../../../assets/fonts/Inter-Bold.ttf"),
        InterMedium: require("../../../assets/fonts/Inter-Medium.ttf"),
        InterLight: require("../../../assets/fonts/Inter-Light.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      // console.log("You Current Location: ", location);
    })();
  }, []);

  if (fontsLoaded) {
    return (
      <UserLocationContext.Provider value={{ location, setLocation }}>
        {children}
      </UserLocationContext.Provider>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.yellow} />
        <Text>Loading...</Text>
      </View>
    );
  }
};

export default AppBootstrap;

import { StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  TestHome,
  OnboardingScreen,
  Login,
  SignupOption,
  ServiceUserSignup,
  ServiceProviderSignup,
  ServiceUser,
  FuelAnalytics,
  CarWash,
  FuelDelivery,
  CarBooking,
  NearestPump,
  HireMechanic,
  Orders,
  ServiceProvider,
  FuelAnalytics1,
  CarWash1,
  FuelDelivery1,
  CarBooking1,
  NearestPump1,
  HireMechanic1,
} from "../screens/index";
import { getItem } from "../utils/asyncStorage";
import { colors } from "../utils/colors";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [showOnboarding, setShowOnboarding] = useState(null);

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem("onborded");

    if (onboarded === "1") {
      // hide onboarding
      setShowOnboarding(false);
    } else {
      // show onboarding
      setShowOnboarding(true);
    }
  };

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  if (showOnboarding === null) {
    return <ActivityIndicator color={colors.yellow} size={"large"} />;
  }

  if (showOnboarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"OnboardingScreen"}
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"Login"}
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"SignupOption"}
            component={SignupOption}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"ServiceUserSignup"}
            component={ServiceUserSignup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"ServiceProviderSignup"}
            component={ServiceProviderSignup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ServiceUser"
            component={ServiceUser}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FuelAnalytics"
            component={FuelAnalytics}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CarWash"
            component={CarWash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FuelDelivery"
            component={FuelDelivery}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CarBooking"
            component={CarBooking}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NearestPump"
            component={NearestPump}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HireMechanic"
            component={HireMechanic}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Orders"
            component={Orders}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ServiceProvider"
            component={ServiceProvider}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FuelAnalytics1"
            component={FuelAnalytics1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CarWash1"
            component={CarWash1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FuelDelivery1"
            component={FuelDelivery1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CarBooking1"
            component={CarBooking1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NearestPump1"
            component={NearestPump1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HireMechanic1"
            component={HireMechanic1}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"TestHome"}
            component={TestHome}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default Navigator;

const styles = StyleSheet.create({});

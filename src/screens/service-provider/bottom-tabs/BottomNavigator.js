import React from "react";
import { Text } from "../../../components/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home/Home";
import Screen2 from "./screen2/Screen2";
import Screen3 from "./screen3/Screen3";
import Profile from "./profile/Profile";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../../utils/colors";

const Bottom = createBottomTabNavigator();

const CustomTabLabel = ({ focused, icon, label }) => (
  <React.Fragment>
    <Icon
      name={icon}
      size={20}
      style={{
        color: focused ? colors.yellow : colors.primary,
      }}
    />
    <Text
      style={{
        color: focused ? colors.yellow : colors.primary,
        fontSize: 12,
        fontFamily: "InterMedium",
      }}
    >
      {label}
    </Text>
  </React.Fragment>
);

const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;
          let label;

          if (route.name === "Home") {
            icon = "home";
            label = "Home";
          } else if (route.name === "Screen2") {
            icon = "planet";
            label = "Screen2";
          } else if (route.name === "Screen3") {
            icon = "airplane";
            label = "Screen3";
          } else if (route.name === "Profile") {
            icon = "person";
            label = "Profile";
          }

          return <CustomTabLabel focused={focused} icon={icon} label={label} />;
        },
        tabBarLabel: () => null, // Hide the default label
      })}
    >
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name="Screen2"
        component={Screen2}
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name="Screen3"
        component={Screen3}
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

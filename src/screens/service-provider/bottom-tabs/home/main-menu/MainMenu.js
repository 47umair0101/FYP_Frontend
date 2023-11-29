import { View, ScrollView, Pressable } from "react-native";
import { Text } from "../../../../../components";
import React from "react";
import styles from "./styles";
import MenuItem from "./MenuItem";
import FuelAnalyticsIcon from "../../../../../../assets/images/fuel-analytics.png";
import CarWashIcon from "../../../../../../assets/images/car-wash.png";
import FuelDeliveryIcon from "../../../../../../assets/images/fuel-delivery.png";
import NearestPetrolPump from "../../../../../../assets/images/nearest-petrol-pump.png";
import CarBookingIcon from "../../../../../../assets/images/car-booking.png";
import MechanicIcon from "../../../../../../assets/images/mechanic.png";
import { useNavigation } from "@react-navigation/native";

const MainMenu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text headingType={2} style={styles.mainHeading}>
        Our Services
      </Text>
      <ScrollView contentContainerStyle={styles.menuItemsContainer}>
        <Pressable onPress={() => navigation.navigate("FuelAnalytics1")}>
          <MenuItem heading={"Fuel Analytics"} icon={FuelAnalyticsIcon} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("CarWash1")}>
          <MenuItem heading={"Car Wash"} icon={CarWashIcon} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("FuelDelivery1")}>
          <MenuItem heading={"Fuel Delivery"} icon={FuelDeliveryIcon} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("NearestPump1")}>
          <MenuItem heading={"Nearest Pump"} icon={NearestPetrolPump} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("CarBooking1")}>
          <MenuItem heading={"Car Booking"} icon={CarBookingIcon} />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("HireMechanic1");
          }}
        >
          <MenuItem heading={"Hire Mechanic"} icon={MechanicIcon} />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default MainMenu;

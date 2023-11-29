import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../../utils/colors";
import { Text } from "../../../components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { horizontalScale, scaleFontSize, verticalScale } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import CarWash from "../bottom-tabs/car-wash/CarWash";

const CustomDrawer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading} headingType={3}>
        Vechicle Care
      </Text>
      <View style={styles.listContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NearestPump");
          }}
          style={styles.listItem}
        >
          <Text style={styles.listText}>Nearest Pump</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FuelDelivery");
          }}
          style={styles.listItem}
        >
          <Text style={styles.listText}>Fuel Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate(CarWash);
          }}
          style={styles.listItem}
        >
          <Text style={styles.listText}>Car Wash</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ServiceUser");
          }}
          style={styles.listItem}
        >
          <Text style={styles.listText}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ServiceUser");
          }}
          style={styles.listItem}
        >
          <Text style={styles.listText}>Feedback</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.listItem}
        >
          <Text style={styles.listText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.yellow,
  },
  heading: {
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 2,
  },
  listContainer: {
    marginTop: verticalScale(5),
  },
  listItem: {
    borderWidth: 1,
    borderBottomWidth: 4,
    borderColor: colors.lightYellow,
    backgroundColor: colors.darkYellow,
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
    marginVertical: verticalScale(5),
    borderRadius: scaleFontSize(6),
  },
  listText: {
    color: colors.white,
    fontSize: scaleFontSize(18),
    textAlign: "center",
    fontFamily: "InterMedium",
    letterSpacing: 1,
  },
});

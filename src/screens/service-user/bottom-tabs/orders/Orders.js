import { StyleSheet, View, ScrollView } from "react-native";
import { BackButton, Text } from "../../../../components";
import React, { useEffect, useState } from "react";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../../../utils";
import { colors } from "../../../../utils/colors";
import { networkIP } from "../../../../helpers";

const Orders = () => {
  const [carwash, setCarWash] = useState([]);
  const [fuelBooking, setFuelBooking] = useState([]);

  useEffect(() => {
    const apiUrl = `${networkIP}/carwash`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setCarWash(result);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    const apiUrl = `${networkIP}/fuel-booking`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setFuelBooking(result);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <BackButton />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "#fff" }}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.contentHeading} headingType={3}>
            Car Wash
          </Text>
          {carwash.map((item, index) => {
            return (
              <View key={item._id} style={styles.dataWrapper}>
                <Text style={styles.textHeading}>
                  Car Type: <Text style={styles.text}>{item.cartype}</Text>
                </Text>
                <Text style={styles.textHeading}>
                  Location: <Text style={styles.text}>{item.location}</Text>
                </Text>
                <Text style={styles.textHeading}>
                  Price: <Text style={styles.text}>{item.price}</Text>
                </Text>
                <Text style={styles.textHeading}>
                  Service Type:{" "}
                  <Text style={styles.text}>{item.servicetype}</Text>
                </Text>
                <Text style={styles.textHeading}>
                  Status: <Text style={styles.text}>{item.status}</Text>
                </Text>
              </View>
            );
          })}
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.contentHeading} headingType={3}>
            Fuel Booking
          </Text>
          {fuelBooking.map((item, index) => {
            return (
              <View key={item._id} style={styles.dataWrapper}>
                <Text style={styles.textHeading}>
                  Fuel Type: <Text style={styles.text}>{item.fueltype}</Text>
                </Text>
                <Text style={styles.textHeading}>
                  Litre: <Text style={styles.text}>{item.litre}</Text>
                </Text>
                <Text style={styles.textHeading}>
                  Location: <Text style={styles.text}>{item.location}</Text>
                </Text>
                <Text style={styles.textHeading}>
                  Payment Method:
                  <Text style={styles.text}>{item.paymentMethod}</Text>
                </Text>
                <Text style={styles.textHeading}>
                  Status: <Text style={styles.text}>{item.status}</Text>
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(25),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: colors.white,
    paddingTop: verticalScale(55),
  },
  contentHeading: {
    color: colors.yellow,
    fontSize: scaleFontSize(16),
    marginTop: verticalScale(15),
  },
  dataWrapper: {
    backgroundColor: "#fafafa",
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    shadowColor: "#000",
    elevation: 5,
    borderRadius: scaleFontSize(8),
    marginVertical: verticalScale(5),
  },
  textHeading: {
    fontSize: scaleFontSize(16),
    fontWeight: "bold",
  },
  text: {
    fontSize: scaleFontSize(16),
    color: colors.primary,
  },
});

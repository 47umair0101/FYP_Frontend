import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../../../utils/colors";
import {
  BackButton,
  Text,
  TextInput,
  Button,
  ErrorMessage,
  BackendErrorMessage,
} from "../../../../components";
import { getItem } from "../../../../utils/asyncStorage";
import { networkIP } from "../../../../helpers";
import { horizontalScale, verticalScale } from "../../../../utils";

const imagesFolderPath = "../../../../../assets/images";

const FuelDelivery = () => {
  const navigation = useNavigation();

  const [location, setLocation] = useState("");
  const [fuelType, setFueyType] = useState("REGULAR");
  const [litre, setLitre] = useState();
  const [locationError, setLocationError] = useState();
  const [litreError, setLitreError] = useState();
  const [price, setPrice] = useState();
  const [userId, setUserId] = useState();

  const [backendMessage, setBackendMessage] = useState(null);
  const clearBackendMessage = () => {
    setBackendMessage(null);
  };

  const validator = () => {
    let error = false;
    if (!location) {
      setLocationError("Please enter your location");
      error = true;
    }
    if (location.length < 5) {
      setLocationError("Please enter correct location, it seems very short!");
      error = true;
    }
    if (/^\d+$/.test(location)) {
      setLocationError("Invalid location");
      error = true;
    }
    if (!litre) {
      setLitreError("Please enter your required litre");
      error = true;
    } else {
      error = false;
    }
    return error;
  };
  const handlePostRequest = () => {
    const hasErrors = validator();
    if (hasErrors) {
      return;
    }

    const data = {
      location: location,
      fueltype: fuelType,
      litre: litre,
      paymentMethod: "Cash on delivery",
      price: price,
      userId: userId,
      status: "incompleted",
    };

    console.log("Frontend---->", data);

    fetch(`${networkIP}/fuel-booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Request Posted Successfully:", data);
        setBackendMessage("Request Posted Successfully");
        setTimeout(clearBackendMessage, 3000);
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        setBackendMessage("Error While Posting Request");
        setTimeout(clearBackendMessage, 3000);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataJSON = await getItem("userData");
        if (userDataJSON) {
          const userData = JSON.parse(userDataJSON);

          // console.log(userData.user._id);
          setUserId(userData.user._id);
        }
      } catch (error) {
        console.log("Error retrieving user data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let result = 0;
    if (fuelType === "REGULAR") {
      result = litre * 200;
      setPrice(200);
    } else if (fuelType === "SUPER_GASOLINE") {
      result = litre * 250;
    } else if (fuelType === "HIGH_OCTANE_FUEL") {
      result = litre * 300;
    }
    setPrice(result);
  }, [litre, fuelType]);

  return (
    <View style={styles.container}>
      {backendMessage && (
        <BackendErrorMessage
          style={{ left: horizontalScale(75), top: verticalScale(150) }}
          error={backendMessage}
        />
      )}
      <BackButton />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text style={styles.headerText} headingType={2}>
            Fuel Delivery
          </Text>
          <Image
            resizeMode={"contain"}
            style={styles.headerImage}
            source={require("../../../../../assets/images/fuel-delivery.png")}
          />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
              Enter your current loaction here:
            </Text>
            <TextInput
              inputValue={(input) => {
                setLocation(input);
                setLocationError("");
              }}
              style={styles.input}
              placeholder={"Enter location"}
            />
          </View>
          {locationError && <ErrorMessage content={locationError} />}
          {/* Fuel Type */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Select your fuel type:</Text>
            <View style={styles.fuelTypesContainer}>
              <TouchableOpacity
                onPress={() => {
                  setFueyType("REGULAR");
                }}
                style={
                  fuelType === "REGULAR"
                    ? styles.fuelTypeButtonSelected
                    : styles.fuelTypeButton
                }
              >
                <Text style={styles.fuelTypeButtonText}>Regular</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setFueyType("SUPER_GASOLINE");
                }}
                style={
                  fuelType === "SUPER_GASOLINE"
                    ? styles.fuelTypeButtonSelected
                    : styles.fuelTypeButton
                }
              >
                <Text style={styles.fuelTypeButtonText}>Super Gasoline</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setFueyType("HIGH_OCTANE_FUEL");
                }}
                style={
                  fuelType === "HIGH_OCTANE_FUEL"
                    ? styles.fuelTypeButtonSelected
                    : styles.fuelTypeButton
                }
              >
                <Text style={styles.fuelTypeButtonText}>High Octane Fuel</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
              Enter your required litre here:
            </Text>
            <TextInput
              inputValue={(input) => {
                setLitre(input);
                setLitreError("");
              }}
              keyboardType={"numeric"}
              style={styles.input}
              placeholder={"Enter litre"}
            />
            <Image
              style={styles.fuelLitreIcon}
              resizeMode={"contain"}
              source={require(`${imagesFolderPath}/volume.png`)}
            />
          </View>
          {litreError && <ErrorMessage content={litreError} />}
          {/* Payment Type */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Payment Method:</Text>
            <View style={styles.fuelTypesContainer}>
              <TouchableOpacity
                disabled={true}
                style={styles.cashOnDeliveryButton}
              >
                <Image
                  style={styles.fuelTypeIcon}
                  resizeMode={"contain"}
                  source={require(`${imagesFolderPath}/cash-on-delivery.png`)}
                />
                <Text style={styles.fuelTypeButtonText}>Cash on delivery</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Service Charges Container */}
          <Text style={styles.inputLabel}>Service Charges:</Text>
          <View style={styles.serviceChargesContainer}>
            <Text headingType={2} style={styles.serviceChargesText}>
              PKR. {price ? price : "000"}
            </Text>
            <Image
              resizeMode={"contain"}
              style={styles.serviceChargesIcon}
              source={require(`${imagesFolderPath}/cash.png`)}
            />
          </View>
          <Button
            onPress={handlePostRequest}
            style={styles.formSubmitButton}
            title={"Post Request"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FuelDelivery;

// Fuel Delivery
// ---------------------------
// Location
// Fuel Type (Regular, Super Gasoline, High Octane Fuel)
// Liter
// Payment Method only one option cash on delivery
// Pump

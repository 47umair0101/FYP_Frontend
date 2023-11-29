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
import { networkIP } from "../../../../helpers";
import { getItem } from "../../../../utils/asyncStorage";
import { horizontalScale, verticalScale } from "../../../../utils";

const imagesFolderPath = "../../../../../assets/images";

const CarWash = () => {
  const navigation = useNavigation();
  const [vehicleTypeButton, setVehicleTypeButton] = useState("BIKE");
  const [serviceType, setServiceType] = useState("EXTERIOR");
  const [serviceTypeButtonDisable, setServiceTypeButtonDisable] =
    useState(true);
  const [location, setLocation] = useState();
  const [locationError, setLocationError] = useState(false);
  const [price, setPrice] = useState(200);
  const [userId, setUserId] = useState();

  const [backendMessage, setBackendMessage] = useState(null);
  const clearBackendMessage = () => {
    setBackendMessage(null);
  };

  const handlePostRequest = () => {
    if (!location) {
      setLocationError("Please enter your loaction");
      return;
    }
    if (/^\d+$/.test(location)) {
      setLocationError("Invalid location");
      return;
    }
    if (location.length < 5) {
      setLocationError("Please enter correct location, it seems very short!");
      return;
    }

    const data = {
      location: location,
      cartype: vehicleTypeButton,
      servicetype: serviceType,
      price: price,
      userId: userId,
      status: "incompleted",
    };

    // console.log(data);

    fetch(`${networkIP}/carwash`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Request Posted Successfully:", data);
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
    if (vehicleTypeButton === "BIKE") {
      setPrice(200);
    } else if (vehicleTypeButton === "LV" && serviceType === "EXTERIOR") {
      setPrice(1000);
    } else if (vehicleTypeButton === "LV" && serviceType === "INTERIOR") {
      setPrice(1200);
    } else if (vehicleTypeButton === "LV" && serviceType === "BOTH") {
      setPrice(2000);
    } else if (vehicleTypeButton === "HV" && serviceType === "EXTERIOR") {
      setPrice(2000);
    } else if (vehicleTypeButton === "HV" && serviceType === "INTERIOR") {
      setPrice(2500);
    } else if (vehicleTypeButton === "HV" && serviceType === "BOTH") {
      setPrice(4500);
    }
  }, [vehicleTypeButton, serviceType]);

  return (
    <View style={styles.container}>
      {backendMessage && (
        <BackendErrorMessage
          style={{ left: horizontalScale(75), top: verticalScale(150) }}
          error={backendMessage}
        />
      )}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <BackButton />
        <View style={styles.header}>
          <Text style={styles.headerText} headingType={2}>
            Car Wash
          </Text>
          <Image
            resizeMode={"contain"}
            style={styles.headerImage}
            source={require("../../../../../assets/images/car-wash.png")}
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
                setLocationError(false);
              }}
              style={styles.input}
              placeholder={"Enter location"}
            />
          </View>
          {locationError && <ErrorMessage content={locationError} />}
          {/* Vehicle Type */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Select your vehicle type:</Text>
            <View style={styles.vehicleTypesContainer}>
              <TouchableOpacity
                onPress={() => {
                  setVehicleTypeButton("BIKE");
                  setServiceTypeButtonDisable(true);
                }}
                style={
                  vehicleTypeButton === "BIKE"
                    ? styles.vehicleTypeButtonSelected
                    : styles.vehicleTypeButton
                }
              >
                <Image
                  style={styles.vehicleTypeIcon}
                  resizeMode={"contain"}
                  source={require(`${imagesFolderPath}/motorcycle.png`)}
                />
                <Text style={styles.vehicleTypeButtonText}>Bike</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setVehicleTypeButton("LV");
                  setServiceTypeButtonDisable(false);
                }}
                style={
                  vehicleTypeButton === "LV"
                    ? styles.vehicleTypeButtonSelected
                    : styles.vehicleTypeButton
                }
              >
                <Image
                  style={styles.vehicleTypeIcon}
                  resizeMode={"contain"}
                  source={require(`${imagesFolderPath}/car.png`)}
                />
                <Text style={styles.vehicleTypeButtonText}>L-V</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setVehicleTypeButton("HV");
                  setServiceTypeButtonDisable(false);
                }}
                style={
                  vehicleTypeButton === "HV"
                    ? styles.vehicleTypeButtonSelected
                    : styles.vehicleTypeButton
                }
              >
                <Image
                  style={styles.vehicleTypeIcon}
                  resizeMode={"contain"}
                  source={require(`${imagesFolderPath}/truck.png`)}
                />
                <Text style={styles.vehicleTypeButtonText}>H-V</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Service Type */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Select your service type:</Text>
            <View style={styles.vehicleTypesContainer}>
              <TouchableOpacity
                disabled={serviceTypeButtonDisable}
                onPress={() => setServiceType("EXTERIOR")}
                style={
                  serviceType === "EXTERIOR" && vehicleTypeButton !== "BIKE"
                    ? styles.serviceTypeButtonSelected
                    : serviceTypeButtonDisable
                    ? styles.serviceTypeButtonDisabled
                    : styles.serviceTypeButton
                }
              >
                <Image
                  style={[
                    styles.vehicleTypeIcon,
                    {
                      tintColor: serviceTypeButtonDisable
                        ? colors.red
                        : "black",
                    },
                  ]}
                  resizeMode={"contain"}
                  source={require(`${imagesFolderPath}/exterior-cleaning.png`)}
                />
                <Text
                  style={
                    serviceTypeButtonDisable
                      ? styles.vehicleTypeButtonTextDisabled
                      : styles.vehicleTypeButtonText
                  }
                >
                  Exterior
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={serviceTypeButtonDisable}
                onPress={() => setServiceType("INTERIOR")}
                style={
                  serviceType === "INTERIOR" && vehicleTypeButton !== "BIKE"
                    ? styles.serviceTypeButtonSelected
                    : serviceTypeButtonDisable
                    ? styles.serviceTypeButtonDisabled
                    : styles.serviceTypeButton
                }
              >
                <Image
                  style={[
                    styles.vehicleTypeIcon,
                    {
                      tintColor: serviceTypeButtonDisable
                        ? colors.red
                        : "black",
                    },
                  ]}
                  resizeMode={"contain"}
                  source={require(`${imagesFolderPath}/interior-cleaning.png`)}
                />
                <Text
                  style={
                    serviceTypeButtonDisable
                      ? styles.vehicleTypeButtonTextDisabled
                      : styles.vehicleTypeButtonText
                  }
                >
                  Interior
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={serviceTypeButtonDisable}
                onPress={() => setServiceType("BOTH")}
                style={
                  serviceType === "BOTH" && vehicleTypeButton !== "BIKE"
                    ? styles.serviceTypeButtonSelected
                    : serviceTypeButtonDisable
                    ? styles.serviceTypeButtonDisabled
                    : styles.serviceTypeButton
                }
              >
                <Image
                  style={[
                    styles.vehicleTypeIcon,
                    {
                      tintColor: serviceTypeButtonDisable
                        ? colors.red
                        : "black",
                    },
                  ]}
                  resizeMode={"contain"}
                  source={require(`${imagesFolderPath}/both-cleaning.png`)}
                />
                <Text
                  style={
                    serviceTypeButtonDisable
                      ? styles.vehicleTypeButtonTextDisabled
                      : styles.vehicleTypeButtonText
                  }
                >
                  Both
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Service Charges Container */}
          <Text style={styles.inputLabel}>Service Charges:</Text>
          <View style={styles.serviceChargesContainer}>
            <Text headingType={2} style={styles.serviceChargesText}>
              PKR. {price}
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

export default CarWash;

// Car Wash
// ---------------------------
// Location --> GPS/Text
// Car type --> Heavy/Light/Bike
// Service Type --> Two Options (Full/Half Service)

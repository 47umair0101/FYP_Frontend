import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
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
} from "../../../../components";

const imagesFolderPath = "../../../../../assets/images";

const FuelAnalytics = () => {
  const navigation = useNavigation();
  const [vehicleTypeButton, setVehicleTypeButton] = useState("BIKE");
  const [fuelTypeButton, setFuelTypeButton] = useState("REGULAR");
  const [fuelTypeButtonDisable, setFuelTypeButtonDisable] = useState(true);
  const [amount, setAmount] = useState();
  const [amountError, setAmountError] = useState();

  const [distance, setDistance] = useState(0);
  const [fuelConsumption, setFuelConsumption] = useState(0);

  const handleCalculateButton = () => {
    if (!amount) {
      setAmountError("Please enter amount");
    } else {
      setAmountError(""); // Clear any previous errors

      // Fuel cost constants
      const regularFuelCost = 200;
      const superGasolineFuelCost = 250;
      const highOctaneFuelCost = 300;

      // Convert the amount to a number
      const amountValue = parseFloat(amount);

      if (vehicleTypeButton === "BIKE") {
        const fuelCost = amountValue;
        const fuelConsumed = fuelCost / regularFuelCost;
        const calculatedDistance = fuelConsumed * 2; // 2 km per 1 liter
        setDistance(calculatedDistance.toFixed(2)); // Set distance with 2 decimal places
        setFuelConsumption(fuelConsumed.toFixed(2));
      } else if (vehicleTypeButton === "LV" && fuelTypeButton === "REGULAR") {
        const fuelCost = amountValue;
        const fuelConsumed = fuelCost / regularFuelCost;
        const calculatedDistance = fuelConsumed * 10; // Adjust as needed
        setDistance(calculatedDistance.toFixed(2));
        setFuelConsumption(fuelConsumed.toFixed(2));
      } else if (
        vehicleTypeButton === "LV" &&
        fuelTypeButton === "SUPER_GASOLINE"
      ) {
        const fuelCost = amountValue;
        const fuelConsumed = fuelCost / superGasolineFuelCost;
        const calculatedDistance = fuelConsumed * 10; // Adjust as needed
        setDistance(calculatedDistance.toFixed(2));
        setFuelConsumption(fuelConsumed.toFixed(2));
      } else if (
        vehicleTypeButton === "LV" &&
        fuelTypeButton === "HIGH_OCTANE_FUEL"
      ) {
        const fuelCost = amountValue;
        const fuelConsumed = fuelCost / highOctaneFuelCost;
        const calculatedDistance = fuelConsumed * 10; // Adjust as needed
        setDistance(calculatedDistance.toFixed(2));
        setFuelConsumption(fuelConsumed.toFixed(2));
      } else if (vehicleTypeButton === "HV" && fuelTypeButton === "REGULAR") {
        const fuelCost = amountValue;
        const fuelConsumed = fuelCost / regularFuelCost;
        const calculatedDistance = fuelConsumed * 5; // Adjust as needed
        setDistance(calculatedDistance.toFixed(2));
        setFuelConsumption(fuelConsumed.toFixed(2));
      } else if (
        vehicleTypeButton === "HV" &&
        fuelTypeButton === "SUPER_GASOLINE"
      ) {
        const fuelCost = amountValue;
        const fuelConsumed = fuelCost / superGasolineFuelCost;
        const calculatedDistance = fuelConsumed * 5; // Adjust as needed
        setDistance(calculatedDistance.toFixed(2));
        setFuelConsumption(fuelConsumed.toFixed(2));
      } else if (
        vehicleTypeButton === "HV" &&
        fuelTypeButton === "HIGH_OCTANE_FUEL"
      ) {
        const fuelCost = amountValue;
        const fuelConsumed = fuelCost / highOctaneFuelCost;
        const calculatedDistance = fuelConsumed * 5; // Adjust as needed
        setDistance(calculatedDistance.toFixed(2));
        setFuelConsumption(fuelConsumed.toFixed(2));
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <BackButton />
        <View style={styles.header}>
          <Text style={styles.headerText} headingType={2}>
            Fuel Analytics
          </Text>
          <Image
            resizeMode={"contain"}
            style={styles.headerImage}
            source={require("../../../../../assets/images/fuel-analytics.png")}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formHeading}>Select your vehicle type:</Text>
          {/* Vehicle Type */}
          <View style={styles.vehicleTypesContainer}>
            <TouchableOpacity
              onPress={() => {
                setFuelTypeButtonDisable(true);
                setVehicleTypeButton("BIKE");
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
                setFuelTypeButtonDisable(false);
                setVehicleTypeButton("LV");
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
                setFuelTypeButtonDisable(false);
                setVehicleTypeButton("HV");
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
          {/* Fuel Types */}
          <Text style={styles.formHeading}>Select your oil type:</Text>
          <View style={styles.fuelTypesContainer}>
            <TouchableOpacity
              disabled={fuelTypeButtonDisable}
              onPress={() => setFuelTypeButton("REGULAR")}
              style={
                fuelTypeButton === "REGULAR" && vehicleTypeButton !== "BIKE"
                  ? styles.fuelTypeButtonSelected
                  : styles.fuelTypeButton
              }
            >
              <Text
                style={
                  fuelTypeButtonDisable
                    ? styles.fuelTypeButtonTextDisable
                    : styles.fuelTypeButtonText
                }
              >
                Regular
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={fuelTypeButtonDisable}
              onPress={() => setFuelTypeButton("SUPER_GASOLINE")}
              style={
                fuelTypeButton === "SUPER_GASOLINE" &&
                vehicleTypeButton !== "BIKE"
                  ? styles.fuelTypeButtonSelected
                  : styles.fuelTypeButton
              }
            >
              <Text
                style={
                  fuelTypeButtonDisable
                    ? styles.fuelTypeButtonTextDisable
                    : styles.fuelTypeButtonText
                }
              >
                Super Gasoline
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={fuelTypeButtonDisable}
              onPress={() => setFuelTypeButton("HIGH_OCTANE_FUEL")}
              style={
                fuelTypeButton === "HIGH_OCTANE_FUEL" &&
                vehicleTypeButton != "BIKE"
                  ? styles.fuelTypeButtonSelected
                  : styles.fuelTypeButton
              }
            >
              <Text
                style={
                  fuelTypeButtonDisable
                    ? styles.fuelTypeButtonTextDisable
                    : styles.fuelTypeButtonText
                }
              >
                High Octane Fuel
              </Text>
            </TouchableOpacity>
          </View>
          {/* Fuel Amount */}
          <Text style={styles.formHeading}>
            Calculate Distance and Fuel Consumption:
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType={"numeric"}
              placeholder={"Enter your amount here..."}
              inputValue={(input) => {
                setAmount(input);
                setAmountError(false);
              }}
            />
            {amountError && <ErrorMessage content={amountError} />}
          </View>
          <Text style={styles.formHeading}>Result:</Text>
          <View style={styles.resultContainer}>
            <View style={styles.result}>
              <Text headingType={2} style={styles.resultText}>
                {fuelConsumption}
              </Text>
              <Image
                style={styles.resultTypeIcon}
                resizeMode={"contain"}
                source={require(`${imagesFolderPath}/volume.png`)}
              />
            </View>
            <View style={styles.verticleLine}></View>
            <View style={styles.result}>
              <Text headingType={2} style={styles.resultText}>
                {distance}
              </Text>
              <Image
                style={styles.resultTypeIcon}
                resizeMode={"contain"}
                source={require(`${imagesFolderPath}/distance.png`)}
              />
            </View>
          </View>
          <Button
            onPress={handleCalculateButton}
            style={styles.calculateButton}
            title={"Calculate"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FuelAnalytics;

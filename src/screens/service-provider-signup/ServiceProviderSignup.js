import { View, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  Button,
  ErrorMessage,
  CheckBoxOption,
} from "../../components/index";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { pickImage, formValidator, networkIP } from "../../helpers/index";
import DateTimePicker from "@react-native-community/datetimepicker";

const ServiceProviderSignup = () => {
  const navigation = useNavigation();

  const [profileImage, setProfileImage] = useState(null);
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  // -- DOB Controller Starts [Date Picker and Helper Function for Date Picker]--
  const minDate = new Date(1920, 0, 1); // Minimum date: January 1, 1920
  const maxDate = new Date(2023, 11, 31); // Maximum date: December 31, 2023

  const [date, setDate] = useState(null);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };
  const showDatepicker = () => {
    setMode("date");
    setShow(true);
    setDateError(null);
  };
  // -- DOB Controller Ends
  const [cnic, setCnic] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [isPasswordVisible, setIsPasswordVisible] = useState();
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Service Provider Options
  const [services, setServices] = useState([]);
  const handleOptionPress = (service) => {
    if (services.includes(service)) {
      setServices(services.filter((item) => item !== service));
    } else {
      setServices([...services, service]);
    }
    setServicesError(null);
  };

  // Input Errors:
  const [fullNameError, setFullNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [dateError, setDateError] = useState(null);
  const [cnicError, setCnicError] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const [addressError, setAddressError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [servicesError, setServicesError] = useState(null);

  const handleSignup = () => {
    clearAllError();
    const result = formValidator({
      fullName,
      email,
      date,
      cnic,
      phoneNumber,
      address,
      password,
    });

    const [
      hasErrors,
      {
        fullNameError,
        emailError,
        dateError,
        cnicError,
        phoneNumberError,
        addressError,
        passwordError,
      },
    ] = result;

    if (services.length === 0) {
      setServicesError("You have to choose at least service");
    }
    if (hasErrors || services.length === 0) {
      setFullNameError(fullNameError);
      setEmailError(emailError);
      setDateError(dateError);
      setCnicError(cnicError);
      setPhoneNumberError(phoneNumberError);
      setAddressError(addressError);
      setPasswordError(passwordError);
      // setServicesError("You have to choose at least service");
    } else {
      const signupData = {
        profileImage,
        fullName,
        email,
        date,
        cnic,
        phoneNumber,
        address,
        password,
        services,
      };
      console.log(signupData);
      fetch(`${networkIP}/auth/signUpProviderDto`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("----------------------->Signup successful:", data);
        })
        .catch((error) => {
          console.error("Error signing up:", error);
        });
    }
  };

  const clearAllError = () => {
    setFullNameError(null);
    setEmailError(null);
    setDateError(null);
    setCnicError(null);
    setPhoneNumberError(null);
    setAddressError(null);
    setPasswordError(null);
    setServicesError(null);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Text style={styles.heading} headingType={2}>
          Sign Up as Service Provider
        </Text>
        <Text style={styles.subHeading}>
          Join our vehicle services network for unmatched convenience and growth
        </Text>
        <View style={styles.inputsContainer}>
          <View style={styles.profileImageContainer}>
            {profileImage ? (
              <Image
                resizeMode="contain"
                source={{ uri: profileImage }}
                style={styles.profileImage}
              />
            ) : (
              <Image
                resizeMode="contain"
                style={styles.profileImage}
                source={require("../../../assets/images/profile.png")}
              />
            )}
            <TouchableOpacity
              onPress={async () => {
                const imageURI = await pickImage();
                setProfileImage(imageURI);
              }}
            >
              <View style={styles.editImageButton}>
                <Icon name={"camera"} size={30} color={colors.primary} />
              </View>
            </TouchableOpacity>
          </View>
          {/* Full Name */}
          <TextInput
            style={styles.input}
            placeholder={"Full Name"}
            inputValue={(input) => {
              setFullNameError(null);
              setFullName(input);
            }}
          />
          {fullNameError && <ErrorMessage content={fullNameError} />}
          {/* Email */}
          <TextInput
            inputValue={(input) => {
              setEmailError(null);
              setEmail(input);
            }}
            style={styles.input}
            placeholder={"Email"}
          />
          {emailError && <ErrorMessage content={emailError} />}
          {/* DOB */}
          <View style={styles.dobTextInputContainer}>
            <TextInput
              style={styles.input}
              placeholder={"DOB"}
              value={date ? date.toLocaleDateString() : ""}
              editable={false}
            />
            <TouchableOpacity
              style={styles.dateButton}
              onPress={showDatepicker}
            >
              <Icon name={"calendar"} size={25} color={colors.primary} />
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date || new Date()}
                mode={mode}
                display="default"
                minimumDate={minDate}
                maximumDate={maxDate}
                onChange={onChange}
              />
            )}
          </View>
          {dateError && <ErrorMessage content={dateError} />}
          {/* CNIC */}
          <TextInput
            style={styles.input}
            placeholder={"CNIC"}
            inputValue={(input) => {
              setCnicError(null);
              setCnic(input);
            }}
          />
          {cnicError && <ErrorMessage content={cnicError} />}
          {/* Phone Number */}
          <TextInput
            style={styles.input}
            placeholder={"Phone Number"}
            inputValue={(input) => {
              setPhoneNumberError(null);
              setPhoneNumber(input);
            }}
          />
          {phoneNumberError && <ErrorMessage content={phoneNumberError} />}
          {/* Address */}
          <TextInput
            style={styles.input}
            placeholder={"Address"}
            inputValue={(input) => {
              setAddressError(null);
              setAddress(input);
            }}
          />
          {addressError && <ErrorMessage content={addressError} />}
          {/* Password */}
          <View style={styles.passwordTextInputContainer}>
            <TextInput
              inputValue={(input) => {
                setPasswordError(null);
                setPassword(input);
              }}
              secureTextEntry={isPasswordVisible}
              style={styles.input}
              placeholder={"Password"}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={togglePasswordVisibility}
            >
              <Icon
                name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                size={20}
                color={colors.grey}
                style={{ paddingHorizontal: 10 }}
              />
            </TouchableOpacity>
          </View>
          {passwordError && <ErrorMessage content={passwordError} />}
          {/* Services */}
          <View style={styles.servicesOptionContainer}>
            <Text style={styles.servicesHeading}>
              Choose services you are providing
            </Text>
            <CheckBoxOption
              option="Car Wash"
              isSelected={services.includes("Car Wash")}
              onPress={() => handleOptionPress("Car Wash")}
            />
            <CheckBoxOption
              option="Fuel Delivery"
              isSelected={services.includes("Fuel Delivery")}
              onPress={() => handleOptionPress("Fuel Delivery")}
            />
            <CheckBoxOption
              option="Vehicle Mechanic"
              isSelected={services.includes("Vehicle Mechanic")}
              onPress={() => handleOptionPress("Vehicle Mechanic")}
            />
            <CheckBoxOption
              option="Car Rental"
              isSelected={services.includes("Car Rental")}
              onPress={() => handleOptionPress("Car Rental")}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder={"Your Selected Services"}
            value={services.length > 0 ? services.join(", ") : ""}
            editable={false}
          />
          {servicesError && <ErrorMessage content={servicesError} />}
        </View>
        <Button
          onPress={handleSignup}
          style={styles.button}
          title={"Sign Up"}
        />
        <View style={styles.linkContainer}>
          <Text style={styles.text}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.link}
          >
            <Text style={styles.linkText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceProviderSignup;

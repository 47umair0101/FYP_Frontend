import { View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react"; // Import useEffect
import {
  Text,
  TextInput,
  Button,
  ErrorMessage,
  Radio,
  BackendErrorMessage,
} from "../../components/index";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { loginValidator, networkIP } from "../../helpers/index";
import { verticalScale } from "../../utils";
import { setItem } from "../../utils/asyncStorage";

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [signInDisabled, setSignInDisabled] = useState(true);

  const [backendError, setBackendError] = useState(null);
  const clearBackendError = () => {
    setBackendError(null);
  };

  useEffect(() => {
    // Use useEffect to update signInDisabled based on input errors
    if (!emailError && !passwordError && selectedAccount) {
      setSignInDisabled(false); // Enable the button when there are no errors
    } else {
      setSignInDisabled(true);
    }
  }, [emailError, passwordError, selectedAccount]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [selectedAccountError, setSelectedAccountError] = useState(null);

  const handleAccountSelection = (choosedOption) => {
    setSelectedAccountError(null);
    setSelectedAccount(choosedOption);
  };

  const handleLogin = () => {
    clearAllError();
    const result = loginValidator({
      email,
      password,
      selectedAccount,
    });

    const [hasErrors, { emailError, passwordError, selectedAccountError }] =
      result;

    if (hasErrors) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      setSelectedAccountError(selectedAccountError);
    } else {
      // Call your API or navigate to the next screen here
      // Service User
      if (selectedAccount === "SERVICE_USER") {
        fetch(`${networkIP}/auth/UserLogin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              setBackendError(data.error);
              // Clear the error message after 3 seconds
              setTimeout(clearBackendError, 3000);
            }
            if (!data.error) {
              console.log("storing this info in local storage: ", data);
              setItem("userData", JSON.stringify(data));
              navigation.navigate("ServiceUser");
            }
          })
          .catch((error) => {
            console.error("Error signing up:", error);
          });
      }

      // Service Provider
      if (selectedAccount === "SERVICE_PROVIDER") {
        fetch(`${networkIP}/auth/providerlogin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              setBackendError(data.error);
              // Clear the error message after 3 seconds
              setTimeout(clearBackendError, 3000);
            }
            if (!data.error) {
              console.log("storing this info in local storage: ", data);
              setItem("userData", JSON.stringify(data));
              navigation.navigate("ServiceProvider");
            }
          })
          .catch((error) => {
            console.error("Error signing up:", error);
          });
      }
    }
  };

  const clearAllError = () => {
    setEmailError(null);
    setPasswordError(null);
    setSelectedAccountError(null);
  };

  return (
    <View style={styles.container}>
      {/* Error From Backend */}
      {backendError && <BackendErrorMessage error={backendError} />}
      {/*  */}
      <Text style={styles.heading} headingType={1}>
        Login
      </Text>
      <Text style={styles.subHeading}>Welcome back,</Text>
      <Text style={styles.subHeading}>
        Sign in to effortlessly manage your vehicle needs, all in one place
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          inputValue={(input) => {
            setEmailError(null);
            setEmail(input);
          }}
          style={styles.input}
          placeholder={"Email"}
        />
        {emailError && <ErrorMessage content={emailError} />}
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
        <View style={styles.radioButtonsContainer}>
          <Text style={styles.radioOptionsHeading}>
            Select your account type:
          </Text>
          <View style={styles.radioButtonsOption}>
            <Radio
              title={"Service User"}
              active={selectedAccount === "SERVICE_USER"}
              onPress={() => handleAccountSelection("SERVICE_USER")}
            />
            <Radio
              title={"Service Provider"}
              active={selectedAccount === "SERVICE_PROVIDER"}
              onPress={() => handleAccountSelection("SERVICE_PROVIDER")}
            />
          </View>
        </View>
        {selectedAccountError && (
          <ErrorMessage
            content={selectedAccountError}
            style={{ marginTop: verticalScale(8) }}
          />
        )}
      </View>
      <Button
        disabled={signInDisabled} // Use the state to enable/disable the button
        onPress={handleLogin}
        style={styles.button}
        title={"Sign In"}
      />
      <View style={styles.linkContainer}>
        <Text style={styles.text}>Don’t have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignupOption")}
          style={styles.link}
        >
          <Text style={styles.linkText}>Create account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

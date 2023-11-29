import { View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, Button } from "../../components";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import Option from "./Option";
import styles from "./styles";
import { colors } from "../../utils/colors";

const SignupOption = () => {
  const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState(0);

  const handleNext = () => {
    if (selectedOption === 1) {
      navigation.navigate("ServiceProviderSignup");
    } else {
      navigation.navigate("ServiceUserSignup");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../../assets/images/onboard-img-4.png")}
      />
      <Text headingType={2}>Choose your profile type</Text>
      <Text style={styles.subHeading}>
        Please select one of the following options for a streamlined service
        experience
      </Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => {
            setSelectedOption(1);
          }}
        >
          {selectedOption === 1 ? (
            <Icon
              name={"checkmark-circle"}
              size={26}
              color={colors.yellow}
              style={styles.selectedIcon}
            />
          ) : null}
          <Option
            style={styles.option}
            iconName={"cog-outline"}
            label={"Service Provider"}
            selectedOption={selectedOption}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedOption(2);
          }}
        >
          {selectedOption === 2 ? (
            <Icon
              name={"checkmark-circle"}
              size={26}
              color={colors.yellow}
              style={styles.selectedIcon}
            />
          ) : null}
          <Option
            style={styles.option}
            iconName={"person-outline"}
            label={"Service User"}
            selectedOption={selectedOption}
          />
        </TouchableOpacity>
      </View>
      <Button
        onPress={handleNext}
        disabled={selectedOption === 0 ? true : false}
        style={styles.nextButton}
        title={"Next"}
      />
    </View>
  );
};

export default SignupOption;

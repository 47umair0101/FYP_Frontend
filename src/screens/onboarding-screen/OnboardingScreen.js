import { View, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../../utils/asyncStorage";

const onboardImagePath = "../../../assets/images";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    // setItem("onboarded", "1");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        containerStyles={styles.onboarding}
        pages={[
          {
            backgroundColor: "#FFFFE0",
            image: (
              <Image
                resizeMode="contain"
                source={require(`${onboardImagePath}/onboard-img-1.png`)}
                style={styles.onboardImage}
              />
            ),
            title: "Discover service near you",
            subtitle:
              "Discover service near you lorem ipsum dolor is amet  near you lorem  ",
          },
          {
            backgroundColor: "#CAF1DE",
            image: (
              <Image
                resizeMode="contain"
                source={require(`${onboardImagePath}/onboard-img-2.png`)}
                style={styles.onboardImage}
              />
            ),
            title: "Discover service near you",
            subtitle:
              "Discover service near you lorem ipsum dolor is amet  near you lorem  ",
          },
          {
            backgroundColor: "#FFE6C4",
            image: (
              <Image
                resizeMode="contain"
                source={require(`${onboardImagePath}/onboard-img-3.png`)}
                style={styles.onboardImage}
              />
            ),
            title: "Discover service near you",
            subtitle:
              "Discover service near you lorem ipsum dolor is amet  near you lorem  ",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

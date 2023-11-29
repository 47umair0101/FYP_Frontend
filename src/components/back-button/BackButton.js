import { StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import React, { useState, useEffect } from "react";
import { horizontalScale, verticalScale } from "../../utils";
import { colors } from "../../utils/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const BackButton = ({ style }) => {
  const navigation = useNavigation();
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
    }
  );

  useEffect(() => {
    return () => {
      // Clean up the animation listener
      scrollY.removeAllListeners();
    };
  }, []);

  const translateY = scrollY.interpolate({
    inputRange: [0, 100], // Adjust the range as needed
    outputRange: [0, -50], // Adjust the offset as needed
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.backButton,
        style,
        {
          transform: [{ translateY }],
        },
      ]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name={"arrow-back"} size={25} color={colors.white} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: colors.yellow,
    padding: 10,
    borderRadius: 100,
    position: "absolute",
    top: horizontalScale(35),
    left: verticalScale(8),
    zIndex: 10,
  },
});

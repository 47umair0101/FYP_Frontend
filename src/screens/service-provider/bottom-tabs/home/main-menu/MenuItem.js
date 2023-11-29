import { StyleSheet, View, Image } from "react-native";
import { Text } from "../../../../../components";
import React from "react";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../../../../utils";
import { colors } from "../../../../../utils/colors";

const MenuItem = ({ heading, icon }) => {
  return (
    <View style={styles.container}>
      <Image resizeMode={"contain"} style={styles.image} source={icon} />
      <Text style={styles.text}>{heading}</Text>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    width: horizontalScale(80),
    height: verticalScale(110),
    shadowColor: colors.primary,
    elevation: 5,
    borderRadius: 12,
    marginHorizontal: horizontalScale(6),
    marginBottom: verticalScale(12),
    paddingHorizontal: horizontalScale(2),
    // borderWidth: 1,
    // borderColor: "#f1f1f1",
  },
  image: {
    width: horizontalScale(70),
    height: verticalScale(70),
  },
  text: {
    // backgroundColor: "#f1f1f1",
    color: colors.primary,
    borderRadius: 6,
    fontSize: scaleFontSize(16),
    fontFamily: "InterMedium",
    paddingVertical: verticalScale(1),
    textAlign: "center",
    marginBottom: verticalScale(10),
  },
});

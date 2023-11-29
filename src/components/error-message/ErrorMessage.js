import { StyleSheet, View } from "react-native";
import Text from "../text/Text";
import React from "react";
import { colors } from "../../utils/colors";
import { horizontalScale, scaleFontSize, verticalScale } from "../../utils";
import Icon from "react-native-vector-icons/Ionicons";

const ErrorMessage = ({ content, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Icon
        style={styles.alertIcon}
        name={"alert-circle-outline"}
        size={20}
        color={colors.red}
      />
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    position: "relative",
    // borderWidth: 1,
  },
  alertIcon: {
    position: "absolute",
    top: verticalScale(-5),
    left: horizontalScale(0),
  },
  text: {
    color: colors.red,
    fontFamily: "InterMedium",
    marginTop: verticalScale(-5),
    alignSelf: "flex-start",
    fontSize: scaleFontSize(16),
    marginLeft: horizontalScale(18),
  },
});

export default ErrorMessage;

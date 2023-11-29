import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { horizontalScale, verticalScale } from "../../utils";
import { colors } from "../../utils/colors";
import Icon from "react-native-vector-icons/Ionicons";

const BackendErrorMessage = ({
  error = "",
  icon = "alert-circle",
  style = { style },
}) => {
  return (
    <View style={[styles.container, style]}>
      <Icon name={icon} size={20} color={colors.white} />
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

export default BackendErrorMessage;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: verticalScale(80),
    alignItems: "center",
    backgroundColor: colors.yellow,
    padding: 10,
    borderRadius: 8,
    zIndex: 10,
    shadowColor: "#000",
    elevation: 5,
    flexDirection: "row",
  },
  text: {
    fontFamily: "InterBold",
    color: colors.white,
    marginLeft: horizontalScale(3),
  },
});

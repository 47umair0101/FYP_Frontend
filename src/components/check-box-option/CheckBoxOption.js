import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Text from "../text/Text";
import { colors } from "../../utils/colors";
import { horizontalScale, scaleFontSize, verticalScale } from "../../utils";
import Icon from "react-native-vector-icons/Ionicons";

const CheckBoxOption = ({ option, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.option, isSelected && styles.selectedOption]}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {option + " "}
        {isSelected ? (
          <Icon
            style={styles.checkmarkCircle}
            name={"close-circle"}
            size={20}
            color={colors.primary}
          />
        ) : (
          <Icon
            style={styles.closeIcon}
            name={"checkmark-circle"}
            size={20}
            color={colors.grey}
          />
        )}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(5),
    borderRadius: 5,
    marginVertical: verticalScale(2),
    marginRight: horizontalScale(5),
  },
  selectedOption: {
    backgroundColor: colors.lightYellow,
  },
  text: {
    color: colors.grey,
    fontSize: scaleFontSize(16),
    textAlign: "center",
    fontFamily: "InterMedium",
  },
  selectedText: {
    fontSize: scaleFontSize(16),
    color: colors.primary,
    fontFamily: "InterMedium",
  },
});

export default CheckBoxOption;

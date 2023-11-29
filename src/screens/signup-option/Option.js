import { View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "../../components";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../utils/colors";
import { scaleFontSize } from "../../utils";

const Option = ({ iconName, label, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Icon
        name={iconName}
        size={36}
        color={colors.primary}
        style={{ paddingHorizontal: 0 }}
      />
      <Text style={styles.text} headingType={3}>
        {label}
      </Text>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.grey,
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  text: {
    fontSize: scaleFontSize(16),
    textAlign: "center",
  },
});

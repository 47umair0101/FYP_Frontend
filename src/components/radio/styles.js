import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../utils/scaling";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  radio: {
    borderWidth: 1.5,
    borderColor: colors.lightGrey,
    width: horizontalScale(20),
    height: horizontalScale(20),
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  radioBackground: {
    backgroundColor: colors.yellow,
    width: horizontalScale(12),
    height: horizontalScale(12),
    borderRadius: 20,
  },
  text: {
    color: colors.grey,
    fontSize: scaleFontSize(16),
    fontFamily: "InterMedium",
    marginLeft: horizontalScale(5),
  },
});

export default styles;

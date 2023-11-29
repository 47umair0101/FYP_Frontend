import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../../../../utils";
import { version } from "react";

const styles = StyleSheet.create({
  container: {
    marginTop: horizontalScale(65),
    flex: 1,
    paddingHorizontal: horizontalScale(16),
  },
  mainHeading: {
    fontSize: scaleFontSize(16),
  },
  menuItemsContainer: {
    marginTop: verticalScale(6),
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "center",
  },
});

export default styles;

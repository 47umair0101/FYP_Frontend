import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/colors";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(10),
  },
  carInfoContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(20),
    paddingHorizontal: horizontalScale(10),
    position: "relative",
    alignItems: "center",
    backgroundColor: "#fafafa",
    shadowColor: "#000",
    elevation: 5,
    borderRadius: 12,
  },
  sectionLeft: {
    marginRight: horizontalScale(10),
  },
  carImage: {
    width: horizontalScale(100),
    height: verticalScale(100),
  },
  sectionRight: {},
  carText: {
    fontSize: scaleFontSize(16),
    fontWeight: "bold",
  },
});

export default styles;

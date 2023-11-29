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
    flexWrap: "wrap",
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    marginBottom: verticalScale(10),
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
  text: {
    fontSize: scaleFontSize(16),
  },
  bookNowButton: {
    marginVertical: verticalScale(5),
  },
});

export default styles;

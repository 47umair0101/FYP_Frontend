import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../utils";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(25),
  },
  image: {
    width: horizontalScale(250),
    height: verticalScale(150),
  },
  subHeading: {
    fontSize: scaleFontSize(16),
    color: colors.grey,
    textAlign: "center",
    marginVertical: verticalScale(15),
  },
  optionsContainer: {
    marginTop: verticalScale(5),
    flexDirection: "row",
  },
  optionButton: {
    position: "relative",
  },
  selectedIcon: {
    position: "absolute",
    top: verticalScale(3),
    right: horizontalScale(15),
  },
  option: {
    marginHorizontal: horizontalScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
  nextButton: {
    marginVertical: verticalScale(20),
    width: "40%",
  },
});

export default styles;

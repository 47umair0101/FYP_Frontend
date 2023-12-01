import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { horizontalScale, scaleFontSize, verticalScale } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(30),
  },
  heading: {
    marginBottom: verticalScale(10),
  },
  subHeading: {
    textAlign: "center",
    fontSize: scaleFontSize(16),
    color: colors.grey,
  },
  inputContainer: {
    width: "100%",
    marginTop: verticalScale(30),
    paddingHorizontal: horizontalScale(10),
    position: "relative",
  },
  input: {
    marginVertical: verticalScale(7),
  },
  passwordTextInputContainer: {
    position: "relative",
    width: "100%",
  },
  eyeIcon: {
    position: "absolute",
    bottom: verticalScale(18),
    right: horizontalScale(0),
  },
  button: {
    marginVertical: verticalScale(20),
  },
  linkContainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: scaleFontSize(16),
    color: colors.grey,
  },
  link: {
    marginLeft: horizontalScale(3),
  },
  linkText: {
    color: colors.yellow,
    fontWeight: "bold",
    fontSize: scaleFontSize(16),
  },
  radioButtonsContainer: {
    marginTop: verticalScale(8),
  },
  radioOptionsHeading: {
    fontFamily: "InterBold",
    color: colors.grey,
    fontSize: scaleFontSize(16),
    marginBottom: verticalScale(5),
  },
  radioButtonsOption: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  providerTypeContainer: {
    alignItems: "flex-start",
    marginVertical: verticalScale(5),
    marginBottom: verticalScale(8),
  },
  providerTypeButtonsContainer: {
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: verticalScale(1),
  },
  providerTypeButton: {
    borderWidth: 1,
    borderColor: colors.grey,
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(3),
    borderRadius: 4,
    marginHorizontal: horizontalScale(2),
    marginVertical: verticalScale(2),
    flexDirection: "row",
  },
  providerTypeButtonSelected: {
    borderWidth: 1,
    borderColor: colors.yellow,
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(3),
    borderRadius: 4,
    marginHorizontal: horizontalScale(2),
    marginVertical: verticalScale(2),
    backgroundColor: colors.yellow,
    flexDirection: "row",
  },
  providerTypeButtonText: {
    fontSize: scaleFontSize(14),
    fontFamily: "InterMedium",
    marginRight: horizontalScale(4),
  },
  providerTypeButtonTextSelected: {
    fontSize: scaleFontSize(14),
    fontFamily: "InterMedium",
    color: colors.white,
    marginRight: horizontalScale(4),
  },
});

export default styles;

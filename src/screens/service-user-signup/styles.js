import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { horizontalScale, scaleFontSize, verticalScale } from "../../utils";

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(30),
    marginTop: 40,
  },
  heading: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(5),
  },
  subHeading: {
    textAlign: "center",
    fontSize: scaleFontSize(16),
    color: colors.grey,
  },
  inputContainer: {
    width: "100%",
    marginTop: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    position: "relative",
    alignItems: "center",
  },
  profileImageContainer: {
    position: "relative",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editImageButton: {
    position: "absolute",
    bottom: verticalScale(-5),
    right: horizontalScale(-5),
    backgroundColor: colors.yellow,
    borderRadius: 50,
    padding: 5,
    opacity: 0.8,
  },
  input: {
    marginVertical: verticalScale(7),
  },
  dobTextInputContainer: {
    width: "100%",
    position: "relative",
  },
  dateButton: {
    backgroundColor: colors.yellow,
    position: "absolute",
    bottom: verticalScale(12),
    right: horizontalScale(0),
    borderRadius: 50,
    padding: 5,
    opacity: 0.8,
  },
  passwordTextInputContainer: {
    position: "relative",
    width: "100%",
  },
  eyeIcon: {
    position: "absolute",
    bottom: verticalScale(15),
    right: horizontalScale(0),
  },
  button: {
    marginVertical: verticalScale(15),
  },
  linkContainer: {
    flexDirection: "row",
    marginBottom: verticalScale(15),
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
});

export default styles;

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
    backfaceVisibility: colors.white,
  },
  header: {
    backgroundColor: colors.yellow,
    marginTop: verticalScale(15),
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
    height: verticalScale(150),
    position: "relative",
    elevation: 5,
  },
  headerText: {
    color: colors.white,
  },
  headerImage: {
    width: 150,
    height: 150,
    position: "absolute",
    top: verticalScale(90),
    borderWidth: 8,
    borderColor: colors.yellow,
    borderRadius: 100,
  },
  formContainer: {
    backgroundColor: "#fafafa",
    marginTop: verticalScale(58),
    marginHorizontal: horizontalScale(25),
    elevation: 2,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(20),
    borderRadius: 8,
    marginBottom: verticalScale(25),
  },
  inputContainer: {
    marginBottom: verticalScale(6),
  },
  inputLabel: {
    fontSize: scaleFontSize(16),
    color: colors.grey,
    marginBottom: verticalScale(1),
    position: "relative",
  },
  input: {},
  fuelTypesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: verticalScale(0),
  },
  fuelTypeButton: {
    borderWidth: 1,
    borderBottomWidth: 4,
    borderColor: colors.grey,
    width: horizontalScale(70),
    height: verticalScale(60),
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: verticalScale(3),
    marginHorizontal: horizontalScale(5),
  },
  fuelTypeButtonSelected: {
    borderWidth: 1,
    borderBottomWidth: 4,
    borderColor: colors.yellow,
    width: horizontalScale(70),
    height: verticalScale(60),
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: verticalScale(3),
    marginHorizontal: horizontalScale(5),
  },
  cashOnDeliveryButton: {
    borderWidth: 1,
    borderBottomWidth: 4,
    borderColor: colors.yellow,
    width: "100%",
    height: verticalScale(50),
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: verticalScale(3),
    marginHorizontal: horizontalScale(5),
  },
  fuelLitreIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: verticalScale(6),
    right: horizontalScale(0),
  },
  fuelTypeIcon: {
    width: 35,
    height: 35,
    marginBottom: 2,
  },
  fuelTypeButtonText: {
    fontSize: scaleFontSize(16),
    fontWeight: "bold",
    textAlign: "center",
  },
  serviceChargesContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: verticalScale(-12),
  },
  serviceChargesText: {
    color: colors.grey,
  },
  serviceChargesIcon: {
    width: 60,
    height: 60,
    marginLeft: horizontalScale(10),
  },
  formSubmitButton: {
    marginTop: verticalScale(5),
  },
});

export default styles;

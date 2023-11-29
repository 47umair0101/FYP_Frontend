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
    paddingVertical: verticalScale(10),
    borderRadius: 8,
  },
  formHeading: {
    fontSize: scaleFontSize(16),
    color: colors.grey,
  },
  vehicleTypesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: verticalScale(0),
  },
  vehicleTypeButton: {
    borderWidth: 1,
    borderBottomWidth: 4,
    borderColor: colors.grey,
    width: horizontalScale(70),
    height: verticalScale(60),
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: verticalScale(5),
    marginHorizontal: horizontalScale(5),
  },
  vehicleTypeButtonSelected: {
    borderWidth: 1,
    borderBottomWidth: 4,
    borderColor: colors.yellow,
    width: horizontalScale(70),
    height: verticalScale(60),
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: verticalScale(5),
    marginHorizontal: horizontalScale(5),
  },
  vehicleTypeIcon: {
    width: 35,
    height: 35,
    marginBottom: 2,
  },
  vehicleTypeButtonText: {
    fontSize: scaleFontSize(16),
    fontWeight: "bold",
  },
  fuelTypesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: verticalScale(2),
    marginBottom: verticalScale(4),
  },
  fuelTypeButton: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    paddingHorizontal: horizontalScale(4),
    paddingVertical: verticalScale(2),
    borderRadius: 4,
    marginHorizontal: horizontalScale(5),
    marginBottom: verticalScale(4),
  },
  fuelTypeButtonSelected: {
    borderWidth: 2,
    borderColor: colors.yellow,
    paddingHorizontal: horizontalScale(4),
    paddingVertical: verticalScale(2),
    borderRadius: 4,
    marginHorizontal: horizontalScale(5),
    marginBottom: verticalScale(4),
  },
  fuelTypeButtonText: {
    fontSize: scaleFontSize(16),
    fontFamily: "Inter",
  },
  fuelTypeButtonTextDisable: {
    fontSize: scaleFontSize(16),
    fontFamily: "Inter",
    textDecorationLine: "line-through",
    color: colors.red,
  },
  inputContainer: {},
  input: {
    marginTop: verticalScale(2),
    marginBottom: verticalScale(6),
  },
  resultContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  result: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    color: colors.grey,
    marginRight: horizontalScale(5),
  },
  resultTypeIcon: {
    width: 50,
    height: 50,
  },
  verticleLine: {
    borderRightWidth: 2,
    borderRightColor: colors.yellow,
  },
  calculateButton: {
    marginTop: verticalScale(14),
    marginBottom: verticalScale(7),
  },
});

export default styles;

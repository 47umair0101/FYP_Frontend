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
    zIndex: 2,
  },
  mapContainer: {
    marginVertical: verticalScale(10),
    marginTop: verticalScale(60),
    alignSelf: "center",
    width: horizontalScale(300),
    height: verticalScale(150),
    justifyContent: "center",
    alignItems: "center",
  },
  nearBySearchButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: verticalScale(8),
  },
  nearBySearchButton: {
    borderWidth: 2,
    borderBottomWidth: 5,
    borderColor: colors.grey,
    width: horizontalScale(80),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 5,
    marginHorizontal: horizontalScale(5),
    backgroundColor: "#f8f8f8",
  },
  nearBySearchButtonSelected: {
    borderWidth: 2,
    borderBottomWidth: 5,
    borderColor: colors.yellow,
    width: horizontalScale(80),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 5,
    marginHorizontal: horizontalScale(5),
    backgroundColor: "#f8f8f8",
  },

  nearBySearchIcon: {
    width: horizontalScale(40),
    height: verticalScale(30),
  },
  nearBySearchButtonText: {
    marginTop: verticalScale(0.8),
    fontFamily: "InterMedium",
    fontSize: scaleFontSize(14),
    textAlign: "center",
  },
});

export default styles;

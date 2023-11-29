import { StyleSheet } from "react-native";
import { colors } from "../../../../../utils/colors";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../../../../utils";

const styles = StyleSheet.create({
  // --- Header Container Styling Starts ---
  headerContainer: {
    // marginTop: verticalScale(25),
    marginTop: verticalScale(-15),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(30),
    paddingBottom: verticalScale(60),
    width: "100%",
    alignSelf: "center",
    // borderRadius: 8,
    backgroundColor: colors.yellow,
    position: "relative",
  },
  sectionLeft: {
    marginTop: verticalScale(20),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerImageButton: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: colors.white,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  headerTextContainer: {
    marginLeft: horizontalScale(10),
  },
  textHello: {
    fontFamily: "Inter",
    letterSpacing: 0.5,
    fontSize: scaleFontSize(16),
    color: colors.white,
  },
  helloHand: {
    fontSize: scaleFontSize(20),
  },
  userName: {
    fontFamily: "InterBold",
    fontSize: scaleFontSize(16),
    letterSpacing: 0.5,
    color: colors.white,
  },
  sectionRight: {
    marginTop: verticalScale(20),
  },
  // Header Banner
  headerBanner: {
    backgroundColor: "#fff",
    width: "95%",
    position: "absolute",
    height: verticalScale(80),
    top: verticalScale(105),
    left: horizontalScale(18),
    shadowColor: "#000",
    elevation: 5,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(20),
  },
  col1: {
    borderRightWidth: 2,
    borderColor: colors.darkYellow,
    paddingRight: horizontalScale(3),
    marginRight: horizontalScale(6),
  },
  col2: {
    paddingHorizontal: horizontalScale(3),
    alignItems: "center",
  },
  completedOrdersText: {
    fontFamily: "Inter",
    color: colors.grey,
    fontSize: scaleFontSize(14),
    // fontWeight: "bold",
  },
  ordersCount: {
    fontFamily: "Inter",
    color: colors.grey,
    fontSize: scaleFontSize(16),
    // fontWeight: "bold",
  },
  linkContainer: {
    marginTop: verticalScale(3),
    borderWidth: 1,
    borderColor: colors.yellow,
    paddingHorizontal: horizontalScale(2),
    paddingVertical: verticalScale(2),
    borderRadius: 6,
  },
  linkText: {
    fontFamily: "Inter",
    color: colors.yellow,
    fontSize: scaleFontSize(14),
    // fontWeight: "bold",
  },
  col3: {
    borderLeftWidth: 2,
    borderColor: colors.darkYellow,
    paddingLeft: horizontalScale(3),
    marginLeft: horizontalScale(6),
    alignItems: "center",
  },
  lastOrderDateHeading: {
    fontFamily: "Inter",
    fontSize: scaleFontSize(14),
    // fontWeight: "bold",
    color: colors.grey,
  },
  lastOrderDate: {
    fontFamily: "Inter",
    fontSize: scaleFontSize(16),
    // fontWeight: "bold",
    color: colors.grey,
    padding: 5,
    textAlign: "center",
  },
});

export default styles;

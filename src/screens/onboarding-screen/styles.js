import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  onboarding: {
    paddingHorizontal: horizontalScale(20),
  },
  onboardImage: {
    width: horizontalScale(286),
    height: verticalScale(210),
  },
});

export default styles;

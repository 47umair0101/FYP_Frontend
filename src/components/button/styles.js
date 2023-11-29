import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { scaleFontSize } from "../../utils/scaling";

const styles = StyleSheet.create({
  button: {
    width: "100%",

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 12,

    backgroundColor: colors.yellow,
    height: 56,
  },
  buttonText: {
    color: colors.white,
    fontFamily: "InterMedium",
    fontSize: scaleFontSize(17),
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 0.7,
    borderBottomColor: colors.lightGrey,

    width: "100%",
    paddingBottom: 10,

    fontSize: 16,
    fontFamily: "InterMedium",
    color: colors.primary,
  },
});

export default styles;

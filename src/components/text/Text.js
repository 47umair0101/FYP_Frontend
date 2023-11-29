import { Text as NativeText } from "react-native";
import React from "react";
import { scaleFontSize } from "../../utils";

const heading = (type) => {
  switch (type) {
    case 1:
      return {
        fontFamily: "InterBold",
        fontSize: scaleFontSize(28),
      };
    case 2:
      return {
        fontFamily: "InterBold",
        fontSize: scaleFontSize(24),
      };
    case 3:
      return {
        fontFamily: "InterBold",
        fontSize: scaleFontSize(20),
      };
    default:
      return {
        fontFamily: "InterBold",
        fontSize: scaleFontSize(28),
      };
  }
};

const Text = ({ children, headingType, style }) => {
  let headingStyle;
  if (headingType) {
    headingStyle = heading(headingType);
  }

  return (
    <NativeText style={[{ fontFamily: "Inter" }, headingStyle, style]}>
      {children}
    </NativeText>
  );
};

export default Text;

import { TouchableOpacity, View } from "react-native";
import React from "react";
import Text from "../text/Text";
import styles from "./styles";

const Radio = ({ title, active, onPress = () => {}, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.radio}>
        {active ? <View style={styles.radioBackground}></View> : null}
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Radio;

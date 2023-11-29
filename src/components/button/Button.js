import { Pressable } from "react-native";
import Text from "../text/Text";
import React from "react";
import styles from "./styles";

const Button = ({ title, onPress = () => {}, disabled = false, style }) => {
  return (
    <Pressable
      disabled={disabled}
      style={[styles.button, style, disabled && { opacity: 0.5 }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;

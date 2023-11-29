import { TextInput as NativeTextInput } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { colors } from "../../utils/colors";

const TextInput = ({
  placeholder,
  inputValue = (input) => console.log(input),
  secureTextEntry = false,
  editable = true,
  style,
  value,
  keyboardType = undefined,
}) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (value !== undefined) {
      setText(value);
    }
  }, [value]);

  const onChangeText = (input) => {
    setText(input);
    inputValue(input);
  };

  return (
    <NativeTextInput
      style={[styles.input, style]}
      editable={editable}
      placeholder={placeholder}
      placeholderTextColor={colors.lightGrey}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={text}
      keyboardType={keyboardType}
    />
  );
};

export default TextInput;

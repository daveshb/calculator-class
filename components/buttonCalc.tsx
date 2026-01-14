import { colors } from "@/constants/theme";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  text: string;
  color?: string;
  colorText?: string;
  size?: string;
  func?: () => void | undefined;
}

export const ButtonCalc = ({
  text,
  color = colors.darkGray,
  colorText = colors.textPrmary,
  size = "md",
  func,
}: Props) => {
  return (
    <Pressable
      onPress={func}
      style={{
        ...styles.button,
        backgroundColor: color,
        width: size === "lg" ? 180 : 80,
      }}
    >
      <Text
        style={{
          ...styles.text,
          color: colorText,
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});

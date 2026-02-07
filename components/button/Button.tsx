import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  name: String;
};

export default function Button({ name }: Props) {
  return (
    <View>
      <View>
        <Pressable style={styles.button}>Logo</Pressable>
      </View>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 120,
    justifyContent: "center",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#dcddddff",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
});

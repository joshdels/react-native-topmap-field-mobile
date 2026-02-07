import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  name?: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
};

export default function Button({ name, icon }: Props) {
  return (
    <View style={{ alignItems: "center" }}>
      <Pressable style={styles.button}>
        <Ionicons name={icon} size={40} color="black" />
      </Pressable>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}

export function AddButton() {
  return (
    <Pressable style={styles.addButton}>
      <Ionicons name="add-circle" size={50} color="green" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#dcddddff",
  },
  title: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
  addButton: {
    alignItems: "flex-end",
  },
});

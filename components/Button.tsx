import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type Props = {
  name?: string;
  path?: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
};

export default function Button({ name, icon, path }: Props) {
  return (
    <View style={{ alignItems: "center" }}>
      <Pressable
        style={styles.button}
        onPress={() => path && router.push(path)}
      >
        <Ionicons name={icon} size={40} color="black" />
      </Pressable>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}

export function AddButton({ path }: Props) {
  return (
    <Pressable
      style={styles.addButton}
      onPress={() => path && router.push(path)}
    >
      <Ionicons name="add-circle" size={30} color="green" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#dcddddff",
  },
  title: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 10,
  },
  addButton: {
    alignItems: "flex-end",
  },
});

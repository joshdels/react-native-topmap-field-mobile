import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const ICONS = {
  ion: Ionicons,
  feather: Feather,
  fontAwesome5: FontAwesome5
} as const;

type IconType = keyof typeof ICONS;

type Props = {
  name?: string;
  path?: string;
  type?: IconType;
  icon?: any;
};

export default function Button({ name, icon, path, type= "ion" }: Props) {
  const IconComponent = ICONS[type];

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

export function MapButton({ name, icon, path, type="ion" }: Props) {
  const IconComponent = ICONS[type];
  return (
    <View style={{ alignItems: "center" }}>
      <Pressable
        style={styles.mapButton}
        onPress={() => path && router.push(path)}
      >
        <IconComponent name={icon} size={25} color="white" />
      </Pressable>
      <Text style={styles.mapTitle}>{name}</Text>
    </View>
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
  mapButton: {
    justifyContent: "center",
  },
  mapTitle: {
    color: "#ffff",
    fontSize: 12,
    textAlign: "center",
    marginTop: 1,
  },
});

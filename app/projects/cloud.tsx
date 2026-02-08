import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import Table from "../../components/Table";

type Props = {
  name?: string;
};

export default function ProjectManager({ name = "User" }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>TopMapSync Projects</Text>
        <Text style={styles.subTitle}>Good Day! {name}</Text>
      </View>
      <Table />
      <Pressable style={styles.refresh} onPress={() => alert("This is refreshing")}>
        <Text>Refresh Project/s List</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginVertical: 40,
  },
  headerTitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  subTitle: {
    textAlign: "left",
    marginBottom: 10,
  },
  folderContainer: {
    borderWidth: 2,
    borderColor: "#e4e4e4ff",
    borderStyle: "solid",
  },
  refresh: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    height: 40,
    backgroundColor: "#e4e4e4ff",
    justifyContent: "center",
    alignItems: "center",
  },
});

import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

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
      <View style={styles.folderContainer}>
        <Text style={styles.tableHeader}>Folders</Text>
        <View style={styles.tableContent}>
          {/* Needs for loop */}
          {/* Mobile having hardtime in the view/text, for text make it text */}
          <View style={styles.tableRow}>
            {/*list go here :)*/}
            <Text>1</Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.refresh}>
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
    marginBottom: 50,
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
  tableHeader: {
    backgroundColor: "#e4e4e4ff",
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  tableContent: {
    gap: 5,
  },
  tableRow: {
    padding: 10,
    borderBottomColor: "#e4e4e4ff",
    borderStyle: "solid",
    borderBottomWidth: 2,
  },
  refresh: {
    bottom: 20,
    padding: 5,
    backgroundColor: "#e4e4e4ff",
    position: "absolute",
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: "98%",
    height: 40,
  },
});

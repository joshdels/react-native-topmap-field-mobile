import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

import { AddButton } from "../../../components/Button";

type Props = {
  name: string;
};

export default function ProjectManager() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Project Title</Text>
        <Text style={styles.subTitle}>Home {/*pathing nav*/}</Text>
      </View>
      <View style={styles.folderContainer}>
        <Text style={styles.tableHeader}>Folders</Text>
        <View style={styles.tableContent}>
          <View>
            {/*list go here :)*/}
            <Text>1</Text>
          </View>
        </View>
        <AddButton path="/projects/new" />
      </View>
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
    padding: 10,
    gap: 5,
  },
});

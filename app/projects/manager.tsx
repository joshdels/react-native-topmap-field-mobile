import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

import Table from "../../components/Table";

type Props = {
  name: string;
};

export default function ProjectManager() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Project and Source Data</Text>
      <Table title={"Home"}/>
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
});

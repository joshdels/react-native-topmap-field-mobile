import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

import Button from "../components/Button";

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>TopMapSolution Mobile</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon="cloud"
          name="Cloud Projects"
          path="/projects/cloud"
        ></Button>
        <Button
          icon="folder"
          name="Load Local Project/s"
          path="/projects/manager"
        ></Button>
        <Button
          icon="add"
          name="Create New Project"
          path="/projects/new_projects"
        ></Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button icon="person" name="Login Testing" path="/account/login"></Button>
        <Button icon="map" name="Map Testing" path="/map"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
});

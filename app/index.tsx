import { View, Text, StyleSheet } from "react-native";

import Button from "../components/Button";

type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>TopMapSolution Mobile</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button icon="cloud" name="Cloud Projects"></Button>
        <Button icon="folder" name="Load Local Project/s"></Button>
        <Button icon="add" name="Create New Project"></Button>
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
    gap: 30,
  },
});

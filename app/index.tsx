import { View, Text, StyleSheet } from "react-native";

import Button from "../components/button/Button";

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
        <Button name="hello1"></Button>
        <Button name="hello2"></Button>
        <Button name="hello3"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 30
  }
});

import { View, Text, Pressable, StyleSheet } from "react-native";

import { MapButton } from "./Button";

export default function MapNavigation() {
  return (
    <View style={styles.container}>
      <MapButton name={"Sync"} icon={"sync"} />
      <MapButton name={"Add"} icon={"add"} />
      <MapButton name={"Layers"} icon={"layers"} type={"feather"} />
      <MapButton name={"More"} icon={"more-horizontal"} type={"feather"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 40, 
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
});

import React from "react";
import { View, StyleSheet } from "react-native";
import { MapView } from "@maplibre/maplibre-react-native";

import MapNavigation from "../../components/MapNavigation";

export default function ExampleMap() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />

      <View style={styles.containerMapNavigation}>
        <MapNavigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  containerMapNavigation: {
    height: 110,
    width: "100%",
    backgroundColor: "#587725ff",
  },
});

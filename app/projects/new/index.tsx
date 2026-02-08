import { View, Text, StyleSheet } from 'react-native';

export default function NewProject() {
  return (
    <View style={styles.container}>
      <Text>
        Create a new Project
      </Text>
      <View>
        <Text>
          Select Your Basemap
        </Text>
        <Text>
          Choose your basemap of your project.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  }
})
import { View, Text, StyleSheet } from "react-native";

const tableData = {};

type Props = {
  title?: string;
};

export default function Table({ title }: Props) {
  return (
    <View>
      {title && <Text style={styles.subTitle}>{title}</Text>}
      <View style={styles.folderContainer}>
        <Text style={styles.tableHeader}>Folders</Text>
        <View>
          <View>
            <Text style={styles.tableContent}>1</Text>
            <Text style={styles.tableContent}>1</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    textAlign: "left",
    marginTop: 5,
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
    borderBottomColor: "#e4e4e4ff",
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
});

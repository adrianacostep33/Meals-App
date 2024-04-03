import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b490",
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    padding: 6,
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 24,
    padding: 6,
    textAlign: "center",
    borderBottomColor: "#e2b490",
    borderBottomWidth: 2,
  },
});

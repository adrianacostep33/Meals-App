import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetails = ({ duration, complexity, affordability, textStyle }) => {
  console.log(textStyle);
  return (
    <View style={styles.details}>
      <Text>AAAAA</Text>
      <Text style={styles.detailItem}>{duration}</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});

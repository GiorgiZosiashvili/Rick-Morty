import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Pagination = ({ setPageNumber, pageNumber }) => {
  const NextPage = () => {
    if (pageNumber === 42) return;
    setPageNumber(pageNumber + 1);
  };
  const PrevPage = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={PrevPage}>
        <Text style={styles.prevNextText}>Prev</Text>
      </TouchableOpacity>
      <View style={styles.touchableOpacity}>
        <Text style={styles.prevNextText}>Page: {pageNumber}</Text>
      </View>
      <TouchableOpacity style={styles.touchableOpacity} onPress={NextPage}>
        <Text style={styles.prevNextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  touchableOpacity: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    height: 35,
    marginRight: 20,
    backgroundColor: "#3792cb",
    borderRadius: 10,
  },
  prevNextText: {
    color: "white",
    fontSize: 20,
  },
});

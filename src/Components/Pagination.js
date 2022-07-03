import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Pagination = ({ setPageNumber, pageNumber }) => {
  const Next = () => {
    if (pageNumber === 42) return;
    setPageNumber((page) => page + 1);
  };
  const Prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((page) => page - 1);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={Prev}>
        <Text style={styles.prevNextText}>Prev</Text>
      </TouchableOpacity>
      <View style={styles.touchableOpacity}>
        <Text style={styles.prevNextText}>{pageNumber}</Text>
      </View>
      <TouchableOpacity style={styles.touchableOpacity} onPress={Next}>
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
    width: 60,
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

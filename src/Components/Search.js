import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import React, { useState } from "react";

const Search = ({ fetchDataHandler }) => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => {
          setSearch(text);
        }}
        style={styles.input}
        placeholder="Search for Characters"
        placeholderTextColor="#444444"
      />
      <TouchableOpacity
        onPress={() => fetchDataHandler(search)}
        style={styles.touchableOpacity}
      >
        <Text style={{ color: "white", fontSize: 17 }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3792cb",
    height: 30,
    marginRight: 2,
    flex: 1,
    paddingLeft: 5,
    shadowOpacity: 0.5,
    shadowColor: "#3792cb",
  },
  touchableOpacity: {
    height: 30,
    backgroundColor: "#3792cb",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 2,
  },
});

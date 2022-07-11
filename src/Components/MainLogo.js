import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const MainLogo = ({ refresh }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          marginBottom: 5,
        }}
        onPress={refresh}
      >
        <Text
          style={{
            fontSize: 35,
            fontFamily: "RickNMorty",
            color: "#83D2E4",
          }}
        >
          Rick
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "RickNMorty",
            color: "darkgreen",
          }}
        >
          and
        </Text>
        <Text
          style={{
            fontSize: 35,
            fontFamily: "RickNMorty",
            color: "#fdff10",
          }}
        >
          Morty
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainLogo;

const styles = StyleSheet.create({});

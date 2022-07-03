import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/Screens/HomeScreen";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
const API = `https://rickandmortyapi.com/api/character/`;

export default function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchData, updateFetchData] = useState([]);
  const { results, info } = fetchData;

  const fetchDataHandler = async (search) => {
    const data = await fetch(API + `?page=${pageNumber}&name=${search} `).then(
      (res) => res.json()
    );
    updateFetchData(data);
  };
  useEffect(() => {
    fetchDataHandler("");
  }, [pageNumber]);

  const [loaded] = useFonts({
    RickNMorty: require("./src/Assets/get_schwifty.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <HomeScreen
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        results={results}
        fetchDataHandler={fetchDataHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E5E5E5" },
});

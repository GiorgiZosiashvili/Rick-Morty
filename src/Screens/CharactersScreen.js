import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import Cards from "../Components/Cards";

import Pagination from "../Components/Pagination";
import Search from "../Components/Search";
const API = `https://rickandmortyapi.com/api/character/`;

const CharactersScreen = ({}) => {
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
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ width: "90%", alignSelf: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{ fontSize: 35, fontFamily: "RickNMorty", color: "#83D2E4" }}
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
            style={{ fontSize: 35, fontFamily: "RickNMorty", color: "#fdff10" }}
          >
            Morty
          </Text>
        </View>
        <Search fetchDataHandler={fetchDataHandler} />
        <Cards results={results} />
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </ScrollView>
    </View>
  );
};

export default CharactersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    flexDirection: "column",
    marginBottom: 20,
  },
});

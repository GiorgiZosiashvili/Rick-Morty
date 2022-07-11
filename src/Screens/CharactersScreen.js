import { ScrollView, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import Cards from "../Components/Cards";
import Pagination from "../Components/Pagination";
import Search from "../Components/Search";
import MainLogo from "../Components/MainLogo";
const API = `https://rickandmortyapi.com/api/character/`;

const CharactersScreen = ({}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchData, updateFetchData] = useState([]);
  const { results, info } = fetchData;
  const refresh = () => {
    setPageNumber(1);
  };
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
        <MainLogo refresh={refresh} />
        <Search fetchDataHandler={fetchDataHandler} />
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        <Cards results={results} />
      </ScrollView>
    </View>
  );
};

export default CharactersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
});

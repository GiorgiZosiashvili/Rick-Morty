import { ScrollView, StyleSheet, Text, View } from "react-native";

import Cards from "../Components/Cards";

import Pagination from "../Components/Pagination";
import Search from "../Components/Search";

const HomeScreen = ({
  results,
  setPageNumber,
  pageNumber,
  fetchDataHandler,
}) => {
  return (
    <View style={styles.container}>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Search fetchDataHandler={fetchDataHandler} />
        <Cards results={results} />
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 20,
  },
});

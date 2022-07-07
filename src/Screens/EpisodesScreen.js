import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import Cards from "../Components/Cards";

const EpisodesScreen = () => {
  const [id, setId] = useState(1);
  const PrevEpisode = () => {
    if (id === 1) return;
    setId((id) => id - 1);
  };
  const NextEpisode = () => {
    if (id === 51) return;
    setId((id) => id + 1);
  };
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  console.log([...Array(id).keys()]);
  const API = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(API).then((res) => res.json());
      setInfo(data);
      const episodes = await Promise.all(
        data.characters.map((episodes) => {
          return fetch(episodes).then((res) => res.json());
        })
      );
      setResults(episodes);
    })();
  }, [API]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ width: "90%", alignSelf: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
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
          </View>
          <Text style={{ fontSize: 30, marginTop: 5 }}>
            Episode:{" "}
            <Text style={{ color: "#3792cb" }}>
              {info.name === "" ? "Unknown" : info.name}
            </Text>
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={PrevEpisode}
              style={styles.touchableOpacity}
            >
              <Text style={styles.prevNextText}>Prev</Text>
            </TouchableOpacity>
            <View style={styles.touchableOpacity}>
              <Text style={styles.prevNextText}>{id}</Text>
            </View>
            <TouchableOpacity
              onPress={NextEpisode}
              style={styles.touchableOpacity}
            >
              <Text style={styles.prevNextText}>Next</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 18 }}>
            Air date: {info.air_date === "" ? "Unknown" : info.air_date}
          </Text>
        </View>
        <Cards results={results} />
      </ScrollView>
    </View>
  );
};

export default EpisodesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    flexDirection: "column",
    marginBottom: 20,
  },
  touchableOpacity: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 35,
    marginRight: 20,
    backgroundColor: "#3792cb",
    borderRadius: 10,
    marginVertical: 5,
  },
  prevNextText: {
    color: "white",
    fontSize: 20,
  },
});

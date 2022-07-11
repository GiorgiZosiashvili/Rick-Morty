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
import MainLogo from "../Components/MainLogo";

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
        <MainLogo />
        <View style={{ alignItems: "center" }}>
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
              <Text style={styles.prevNextText}>Page: {id}</Text>
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
    flexDirection: "column",

    backgroundColor: "white",
  },
  touchableOpacity: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
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

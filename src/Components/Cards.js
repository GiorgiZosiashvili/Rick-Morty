import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React, { useState } from "react";

const Cards = ({ results }) => {
  const [status, setStatus] = useState({});
  if (results) {
    return results.map((data) => {
      return (
        <View key={data.id} style={styles.container}>
          <ImageBackground
            kay={data.id}
            source={{ uri: data.image }}
            style={styles.image}
          >
            {(() => {
              if (data.status === "Dead") {
                return <Text style={styles.dead}>{data.status}</Text>;
              } else if (data.status === "Alive") {
                return <Text style={styles.alive}>{data.status}</Text>;
              } else {
                return <Text style={styles.unknown}>{data.status}</Text>;
              }
            })()}
          </ImageBackground>

          <View
            style={{ flex: 1, marginLeft: 8, justifyContent: "space-around" }}
          >
            <Text>
              <Text style={{ fontWeight: "600", fontSize: 20 }}>
                {data.name}
              </Text>
            </Text>
            <Text>
              <Text style={styles.description}>Species:</Text> {data.species}
            </Text>
            {(() => {
              if (data.gender === "Female") {
                return (
                  <Text style={styles.female}>
                    <Text style={styles.description}>Gender: </Text>
                    {data.gender}♀️
                  </Text>
                );
              } else if (data.gender === "Male") {
                return (
                  <Text style={styles.male}>
                    <Text style={styles.description}>Gender: </Text>
                    {data.gender}♂️
                  </Text>
                );
              } else {
                return (
                  <Text style={styles.unknownGender}>
                    <Text style={{ color: "black", fontSize: 13 }}>
                      Gender:{" "}
                    </Text>
                    {data.gender}❓
                  </Text>
                );
              }
            })()}
            <Text>From: {data.origin.name}</Text>
          </View>
        </View>
      );
    });
  } else {
    return (
      <View>
        <Text>Nothing was returned</Text>
      </View>
    );
  }
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: 355,
    flex: 1,
    flexDirection: "row",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#1c4966",
    marginVertical: 5,
  },
  image: {
    width: 170,
    height: 150,
    position: "relative",
    alignItems: "flex-end",
    borderTopStartRadius: 29,
    borderBottomStartRadius: 29,
    overflow: "hidden",
  },
  dead: {
    padding: 2,
    fontSize: 18,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e53935",
  },
  alive: {
    padding: 2,
    fontSize: 18,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4caf50",
  },
  unknown: {
    padding: 2,
    fontSize: 18,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
  },
  male: { color: "#4DC3E1", fontSize: 18 },
  female: { color: "#E36E7C", fontSize: 18 },
  unknownGender: { color: "gray", fontSize: 18 },
  description: { color: "black", fontSize: 14 },
  species: "",
});

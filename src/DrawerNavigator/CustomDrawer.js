import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffdbe0" }}>
      <DrawerContentScrollView contentContainerStyle={{ width: "100%" }}>
        <Image
          source={require("../Assets/Images/rickandmorty.png")}
          style={{ width: "100%", height: 130 }}
        />
        <Text
          style={{
            fontSize: 15,
            margin: 5,
            fontWeight: "300",
          }}
        >
          "Everything is fine in the end, Morty. And if it isn't, it's because
          it's not the end yet."
        </Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import DrawerNavigator from "./src/DrawerNavigator/DrawerNavigator";
export default function App() {
  const [loaded] = useFonts({
    RickNMorty: require("./src/Assets/get_schwifty.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

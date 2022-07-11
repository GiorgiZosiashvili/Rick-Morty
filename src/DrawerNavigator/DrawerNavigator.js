import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CharactersScreen from "../Screens/CharactersScreen";
import EpisodesScreen from "../Screens/EpisodesScreen";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

function DrawerNavigator({}) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen name="Characters" component={CharactersScreen} />
      <Drawer.Screen name="Episodes" component={EpisodesScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

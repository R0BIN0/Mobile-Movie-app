import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home/Home";
import FilmDetails from "../Pages/FilmDetails/FilmDetails";
import Favorites from "../Pages/Favorites/Favorites";

export type RouteParams = {
  Home: undefined;
  FilmDetails: undefined;
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<RouteParams>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FilmDetails" component={FilmDetails} />
        <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

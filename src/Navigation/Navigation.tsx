import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home/Home";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import Favorites from "../Pages/Favorites/Favorites";

import Header from "../Components/Header/Header";
import BottomBar from "../Components/BottomBar/BottomBar";

export type RouteParams = {
  Home: undefined;
  MovieDetails: undefined;
  Favorites: undefined;
};

const screenOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<RouteParams>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator
        initialRouteName="MovieDetails"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
      <BottomBar />
    </NavigationContainer>
  );
}

import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home/Home";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import Favorites from "../Pages/Favorites/Favorites";
import Profile from "../Pages/Profile/Profile";
import Settings from "../Pages/Settings/Settings";

import Header from "../Components/Header/Header";
import BottomBar from "../Components/BottomBar/BottomBar";
import RouteContextProvider from "../Context/RouteContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../Config/variables";

export type RouteParams = {
  Home: undefined;
  MovieDetails: { id: number };
  Favorites: undefined;
  Profile: undefined;
  Settings: undefined;
};

const screenOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<RouteParams>();

export default function Navigation() {
  const initializeLS = async (): Promise<void> => {
    const alreadySetup: string | null = await AsyncStorage.getItem("Movies");

    if (!alreadySetup) {
      return await AsyncStorage.setItem("Movies", JSON.stringify([]));
    }
  };

  useEffect(() => {
    initializeLS();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={colors.primaryBlue} style="light" />
      <RouteContextProvider>
        <NavigationContainer>
          <Header />
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
            <Stack.Screen name="Favorites" component={Favorites} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
          <BottomBar />
        </NavigationContainer>
      </RouteContextProvider>
    </>
  );
}

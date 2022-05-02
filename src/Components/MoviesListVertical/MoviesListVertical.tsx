// General
import { View, TouchableOpacity } from "react-native";
import { FC } from "react";

// Styles
import styles from "./MoviesListVertical.styles";

// Icons
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// Components
import MovieCard from "../MovieCard/MovieCard";

// Navigation
import { RouteParams } from "../../Navigation/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

// Types

import { Film } from "../../Config/types";

type Data = {
  data: Film[];
};

type Id = {
  id: number;
};

// ============================ Movie List Vertical ============================

const MoviesListVertical: FC<Data> = ({ data }) => {
  return (
    <View style={styles.container}>
      {data?.map((item) => (
        <View key={item.id} style={styles.film__container}>
          <MovieCard {...item} />
          <MoviesButton id={item.id} />
        </View>
      ))}
    </View>
  );
};

// ============================ Movies Button ============================

const MoviesButton: FC<Id> = ({ id }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const onPress = (): void => {
    navigation.navigate("MovieDetails", { id });
  };

  return (
    <TouchableOpacity {...{ onPress }} style={styles.button__container}>
      <MaterialIcons style={styles.icon} name="add" size={25} />
    </TouchableOpacity>
  );
};

export default MoviesListVertical;

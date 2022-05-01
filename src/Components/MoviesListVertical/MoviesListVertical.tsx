import { View, TouchableOpacity } from "react-native";
import { FC } from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesListVertical.styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { RouteParams } from "../../Navigation/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Film } from "../../Config/types";

type Data = {
  data: Film[];
};

type Id = {
  id: number;
};

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

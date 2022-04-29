import { View, TouchableOpacity } from "react-native";
import { FC } from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesListVertical.styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { RouteParams } from "../../Navigation/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type IdProps = {
  id: number;
};

type Props = {
  id: number;
  title: string;
  image: string;
  rating: number;
  categories: string[];
  description: string;
  like?: boolean;
};

type DataProps = {
  data: FavProps[];
};

type FavProps = {
  id: number;
  title: string;
  image: string;
  rating: number;
  description: string;
  categories: string[];
};

const MoviesListVertical: FC<DataProps> = ({ data }) => {
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

const MoviesButton: FC<IdProps> = ({ id }) => {
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

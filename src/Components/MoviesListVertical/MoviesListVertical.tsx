import { View, TouchableOpacity } from "react-native";
import { FC } from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesListVertical.styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
  data: Props[];
};

const MoviesListVertical: FC<DataProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View key={item.id} style={styles.film__container}>
          <MovieCard {...item} />
          <MoviesButton />
        </View>
      ))}
    </View>
  );
};

const MoviesButton = () => (
  <TouchableOpacity style={styles.button__container}>
    <MaterialIcons style={styles.icon} name="add" size={25} />
  </TouchableOpacity>
);

export default MoviesListVertical;

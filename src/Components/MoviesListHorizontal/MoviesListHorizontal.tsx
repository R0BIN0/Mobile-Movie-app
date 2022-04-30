import {
  View,
  Text,
  Image,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import { FC, useState, useEffect } from "react";
import styles from "./MoviesListHorizontal.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "../../Navigation/Navigation";
import { useNavigation } from "@react-navigation/native";
import { Film } from "../../Config/types";

type Picture = {
  id: number;
  poster_path: string;
};

type Info = {
  title: string;
};

const MoviesListHorizontal: FC = () => {
  const [popularMovies, setPopularMovies] = useState<Film[]>([]);

  const getPopularMovies = async (): Promise<void> => {
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  const renderItem: ListRenderItem<Film> = ({ item }) => {
    return (
      <View key={item.id}>
        <MoviePicture id={item.id} poster_path={item.poster_path} />
        <MovieInfo title={item.title} />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={popularMovies}
        {...{ renderItem }}
      />
    </View>
  );
};

const MoviePicture: FC<Picture> = ({ id, poster_path }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const onPress = (): void => {
    navigation.navigate("MovieDetails", { id });
  };

  return (
    <TouchableOpacity {...{ onPress }} style={styles.img__container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${poster_path}`,
        }}
        style={styles.img}
      />
    </TouchableOpacity>
  );
};

const MovieInfo: FC<Info> = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>
        {title.length >= 17 ? `${title.substring(0, 15)}...` : `${title}`}
      </Text>
    </View>
  );
};

export default MoviesListHorizontal;

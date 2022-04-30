import {
  View,
  Text,
  Image,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import { FC } from "react";
import styles from "./MoviesListHorizontal.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "../../Navigation/Navigation";
import { useNavigation } from "@react-navigation/native";
import { Film } from "../../Config/types";
import { useFetch } from "../../Hooks/useFetch";

type Picture = {
  id: number;
  poster_path: string;
};

type Info = {
  title: string;
};

const MoviesListHorizontal: FC = () => {
  const { moviesArr } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.API_KEY}`,
    "GET_ARR"
  );

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
        data={moviesArr}
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

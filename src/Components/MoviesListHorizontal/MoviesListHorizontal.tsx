// General
import {
  View,
  Text,
  Image,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import { FC } from "react";

// Styles
import styles from "./MoviesListHorizontal.styles";

// Navigation
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "../../Navigation/Navigation";
import { useNavigation } from "@react-navigation/native";

// Hooks
import { useFetch } from "../../Hooks/useFetch";

// Types

import { Film } from "../../Config/types";

type Picture = {
  id: number;
  poster_path: string;
};

type Info = {
  title: string;
};

// ============================ Movie List Horizontal ============================

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

// ============================ Movie Picture ============================

const MoviePicture: FC<Picture> = ({ id, poster_path }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const onPress = (): void => {
    navigation.navigate("MovieDetails", { id });
  };

  return (
    <TouchableOpacity {...{ onPress }} style={styles.img__container}>
      {poster_path ? (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${poster_path}`,
          }}
          style={styles.img}
        />
      ) : (
        <Image
          source={require("../../Assets/Images/noImage.png")}
          style={styles.img}
        />
      )}
    </TouchableOpacity>
  );
};

// ============================ Movie Info ============================

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

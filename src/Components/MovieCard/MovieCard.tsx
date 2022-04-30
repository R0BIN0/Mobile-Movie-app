import { View, Text, Image, TouchableOpacity } from "react-native";
import { FC } from "react";
import styles from "./MovieCard.styles";
import RatingStars from "../RatingStars/RatingStars";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "../../Navigation/Navigation";
import { useNavigation } from "@react-navigation/native";
import { Film } from "../../Config/types";

type Picture = {
  id: number;
  poster_path: string;
  like?: boolean;
};

type Info = {
  title: string;
  vote_average: number;
  overview: string;
};

const MovieCard: FC<Film> = ({
  id,
  title,
  poster_path,
  vote_average,
  overview,
  like,
}) => {
  return (
    <View style={styles.container}>
      <MoviePicture id={id} poster_path={poster_path} like={like} />
      <MovieInfo
        title={title}
        vote_average={vote_average}
        overview={overview}
      />
    </View>
  );
};

const MoviePicture: FC<Picture> = ({ id, poster_path, like }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const onPress = (): void => {
    navigation.navigate("MovieDetails", { id });
  };

  return (
    <TouchableOpacity {...{ onPress }} style={styles.img__container}>
      <Image
        style={styles.img}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${poster_path}`,
        }}
      />

      {like && (
        <TouchableOpacity style={styles.like__container}>
          <FontAwesome name="heart" size={16} style={styles.like} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const MovieInfo: FC<Info> = ({ title, vote_average, overview }) => (
  <View style={styles.info__container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.rating__container}>
      <RatingStars rating={vote_average} />
      <Text style={styles.rating}>{vote_average}</Text>
    </View>
    <Text style={styles.description}>{overview.substring(0, 100)}...</Text>
  </View>
);

export default MovieCard;

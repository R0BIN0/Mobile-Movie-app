import { View, Text, Image, TouchableOpacity } from "react-native";
import { FC } from "react";
import styles from "./MovieCard.styles";
import RatingStars from "../RatingStars/RatingStars";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "../../Navigation/Navigation";
import { useNavigation } from "@react-navigation/native";
import { Film } from "../../Config/types";

// type PictureProps = {
//   id: number;
//   image: string;
//   like?: boolean;
// };

// type InfoProps = {
//   title: string;
//   rating: number;
//   categories: string[];
//   description: string;
// };

// type Props = PictureProps & InfoProps;

type Picture = {
  id: number;
  backdrop_path: string;
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
  backdrop_path,
  vote_average,
  overview,
  like,
}) => {
  return (
    <View style={styles.container}>
      <MoviePicture id={id} backdrop_path={backdrop_path} like={like} />
      <MovieInfo
        title={title}
        vote_average={vote_average}
        overview={overview}
      />
    </View>
  );
};

const MoviePicture: FC<Picture> = ({ id, backdrop_path, like }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const onPress = (): void => {
    navigation.navigate("MovieDetails", { id });
  };

  return (
    <TouchableOpacity {...{ onPress }} style={styles.img__container}>
      <Image
        style={styles.img}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
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

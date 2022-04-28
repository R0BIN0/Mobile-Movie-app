import { View, Text, Image, TouchableOpacity } from "react-native";
import { FC } from "react";
import styles from "./MovieCard.styles";
import RatingStars from "../RatingStars/RatingStars";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "../../Navigation/Navigation";
import { useNavigation } from "@react-navigation/native";

type PictureProps = {
  id: number;
  image: string;
  like?: boolean;
};

type InfoProps = {
  title: string;
  rating: number;
  categories: string[];
  description: string;
};

type Props = PictureProps & InfoProps;

const MovieCard: FC<Props> = ({
  id,
  title,
  image,
  rating,
  categories,
  description,
  like,
}) => {
  return (
    <View style={styles.container}>
      <MoviePicture id={id} image={image} like={like} />
      <MovieInfo
        title={title}
        rating={rating}
        categories={categories}
        description={description}
      />
    </View>
  );
};

const MoviePicture: FC<PictureProps> = ({ id, image, like }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const onPress = (): void => {
    navigation.navigate("MovieDetails", { id });
  };

  return (
    <TouchableOpacity {...{ onPress }} style={styles.img__container}>
      <Image
        style={styles.img}
        source={{
          uri: image,
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

const MovieInfo: FC<InfoProps> = ({
  title,
  rating,
  categories,
  description,
}) => (
  <View style={styles.info__container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.rating__container}>
      <RatingStars rating={rating} />
      <Text style={styles.rating}>{rating}</Text>
    </View>
    <View style={styles.categories__container}>
      <Text style={styles.categories}>{categories[0]}</Text>
      <Text style={styles.categories}>{categories[1]}</Text>
    </View>
    <Text style={styles.description}>{description}</Text>
  </View>
);

export default MovieCard;

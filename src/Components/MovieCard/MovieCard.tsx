import { View, Text, Image, TouchableOpacity } from "react-native";
import { FC } from "react";
import styles from "./MovieCard.styles";
import RatingStars from "../RatingStars/RatingStars";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type PictureProps = {
  image: string;
  like?: boolean;
};

type InfoProps = {
  id?: number;
  title: string;
  rating: number;
  categories: string[];
  description: string;
};

type Props = PictureProps & InfoProps;

const MovieCard: FC<Props> = ({
  title,
  image,
  rating,
  categories,
  description,
  like,
}) => {
  return (
    <View style={styles.container}>
      <MoviePicture image={image} like={like} />
      <MovieInfo
        title={title}
        rating={rating}
        categories={categories}
        description={description}
      />
    </View>
  );
};

const MoviePicture: FC<PictureProps> = ({ image, like }) => (
  <View style={styles.img__container}>
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
  </View>
);

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

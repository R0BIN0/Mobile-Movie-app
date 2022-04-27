import { View, Text, Image } from "react-native";
import { FC } from "react";
import styles from "./MovieCard.styles";
import RatingStars from "../RatingStars/RatingStars";

type PictureProps = {
  image: string;
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
}) => {
  return (
    <View style={styles.container}>
      <MoviePicture image={image} />
      <MovieInfo
        title={title}
        rating={rating}
        categories={categories}
        description={description}
      />
    </View>
  );
};

const MoviePicture: FC<PictureProps> = ({ image }) => (
  <View style={styles.img__container}>
    <Image
      style={styles.img}
      source={{
        uri: image,
      }}
    />
  </View>
);

const MovieInfo: FC<InfoProps> = ({
  title,
  rating,
  categories,
  description,
}) => (
  <View>
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

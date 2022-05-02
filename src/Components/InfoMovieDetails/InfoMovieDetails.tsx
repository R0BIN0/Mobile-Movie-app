// General
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  Image,
  TouchableOpacity,
} from "react-native";
import { FC } from "react";

// Styles
import styles from "./InfoMovieDetails.styles";

// Icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// Types
import { CastingProps } from "../../Config/types";

type Description = {
  title?: string;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
};

type Casting = {
  casting: CastingProps[];
};

type Button = {
  title?: string;
  addToFavorites: () => void;
  removeFromFavorites: () => void;
  like: boolean;
};

type Info = Description & Casting & Button;

// ============================ Info Movie Details ============================

const InfoMovieDetails: FC<Info> = ({
  addToFavorites,
  removeFromFavorites,
  like,
  release_date,
  title,
  overview,
  casting,
}) => {
  const renderItem: ListRenderItem<CastingProps> = ({ item }) => (
    <CastingMovie key={item.id} {...item} />
  );

  return (
    <View style={styles.container}>
      <DescriptionMovie
        release_date={release_date}
        title={title}
        overview={overview}
      />
      <Text style={styles.title__section}>Casting</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={casting}
        {...{ renderItem }}
      />
      <ButtonsMovie
        title={title}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        like={like}
      />
    </View>
  );
};

// ============================ Description Movie ============================

const DescriptionMovie: FC<Description> = ({
  release_date,
  title,
  overview,
}) => (
  <View>
    <Text style={styles.year}>{release_date?.substring(0, 4)}</Text>
    <View style={styles.title__container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rating__container}>
        <FontAwesome style={styles.icon} name="star" size={12} />
        <Text style={styles.rating}>9.3</Text>
      </View>
    </View>
    <View>
      <Text style={styles.text}>
        <Text style={styles.strong__text}>Synopsis : </Text>
        {overview}
      </Text>
    </View>
  </View>
);

// ============================ Casting Movie ============================

const CastingMovie: FC<CastingProps> = ({ name, character, profile_path }) => (
  <View>
    <View style={styles.img__container}>
      {profile_path ? (
        <Image
          style={styles.img}
          source={{ uri: `https://image.tmdb.org/t/p/w500/${profile_path}` }}
        />
      ) : (
        <Image
          style={styles.img}
          source={require("../../Assets/Images/noImage.png")}
        />
      )}
    </View>
    <View>
      <Text style={styles.name}>
        {name.length >= 14 ? `${name.substring(0, 12)}...` : `${name}`}
      </Text>
      <Text style={styles.role}>
        {character.length >= 14
          ? `${character.substring(0, 12)}...`
          : `${character}`}
      </Text>
    </View>
  </View>
);

// ============================ Buttons Movie ============================

const ButtonsMovie: FC<Button> = ({
  title,
  addToFavorites,
  removeFromFavorites,
  like,
}) => {
  const onPress = (): void => {
    like ? removeFromFavorites() : addToFavorites();
  };
  return (
    <View style={styles.buttons__container}>
      <TouchableOpacity {...{ onPress }} style={styles.button__secondary}>
        <Text style={styles.text__button}>
          {like ? "Retirer des favoris" : "Ajouter à mes favoris"}
        </Text>
        {like ? (
          <FontAwesome
            name="heart"
            size={16}
            style={styles.icon__button__like}
          />
        ) : (
          <FontAwesome5 name="heart" size={16} style={styles.icon__button} />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button__primary}>
        <Text style={styles.text__button}>
          Regarder{" "}
          <Text style={styles.strong__text__button}>
            {(title?.length as number) >= 23
              ? `${title?.substring(0, 25)}...`
              : title}
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InfoMovieDetails;

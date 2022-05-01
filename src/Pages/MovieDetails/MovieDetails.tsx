import { View, Image } from "react-native";
import { FC, useContext, useEffect, useState } from "react";
import styles from "./MovieDetails.styles";
import InfoMovieDetails from "../../Components/InfoMovieDetails/InfoMovieDetails";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../Config/variables";
import { ScrollView } from "react-native-gesture-handler";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RouteParams } from "../../Navigation/Navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RouteContext } from "../../Context/RouteContext";
import { Film, CastingProps } from "../../Config/types";
import { useFetch } from "../../Hooks/useFetch";

type Picture = {
  backdrop_path?: string;
};

const MovieDetails: FC = () => {
  const route = useRoute<RouteProp<RouteParams>>();
  const { setRouteName } = useContext(RouteContext);

  const [like, setLike] = useState<boolean>(false);
  const [LS, setLS] = useState<Film[]>([]);

  const { movieObj } = useFetch(
    `https://api.themoviedb.org/3/movie/${route.params?.id}?api_key=${process.env.API_KEY}`,
    "GET_OBJ"
  );

  const { castingArr } = useFetch(
    `https://api.themoviedb.org/3/movie/${route.params?.id}/credits?api_key=${process.env.API_KEY}`,
    "GET_CASTING_ARR"
  );

  useEffect(() => {
    alreadyLiked();
    setRouteName("MoviesDetails");
  }, []);

  useEffect(() => {
    getCurrentLS();
  }, [like]);

  const getCurrentLS = async (): Promise<void> => {
    const getLS = await AsyncStorage.getItem("Movies");
    const currentLS = JSON.parse(getLS as string);
    setLS(currentLS);
  };

  const alreadyLiked = async (): Promise<void> => {
    const getLS = await AsyncStorage.getItem("Movies");
    const currentLS = JSON.parse(getLS as string);

    const itemAlreadyHere = currentLS.findIndex(
      (item: Film) => item.id === route.params?.id
    );

    if (itemAlreadyHere !== -1) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const addToFavorites = async (): Promise<void> => {
    try {
      const itemAlreadyHere = LS.findIndex(
        (item: Film) => item.id === route.params?.id
      );
      if (itemAlreadyHere === -1) {
        await AsyncStorage.setItem("Movies", JSON.stringify([...LS, movieObj]));
        setLike(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromFavorites = async (): Promise<void> => {
    try {
      const newLS = LS.filter((item: Film) => item.id !== route.params?.id);
      await AsyncStorage.setItem("Movies", JSON.stringify(newLS));
      setLike(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ backgroundColor: "red" }}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <PictureMovieDetails backdrop_path={movieObj?.backdrop_path} />
        <InfoMovieDetails
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          release_date={movieObj?.release_date}
          title={movieObj?.title as string}
          overview={movieObj?.overview}
          genre_ids={movieObj?.genre_ids}
          casting={castingArr as CastingProps[]}
          like={like}
        />
      </ScrollView>
    </View>
  );
};

const PictureMovieDetails: FC<Picture> = ({ backdrop_path }) => (
  <View style={styles.img__container}>
    <Image
      style={styles.img}
      source={{
        uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
      }}
    />
    <LinearGradient
      colors={["rgba(0, 0, 0, .0)", `${colors.primaryBlue}`]}
      style={styles.img__linear}
    ></LinearGradient>
  </View>
);

export default MovieDetails;

// General
import { View, Text } from "react-native";
import { FC, useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Styles
import styles from "./Favorites.styles";

// Components
import MoviesListVertical from "../../Components/MoviesListVertical/MoviesListVertical";

// Context
import { RouteContext } from "../../Context/RouteContext";

// Types
import { Film } from "../../Config/types";

// ============================ Favorites ============================

const Favorites: FC = () => {
  const { routeName } = useContext(RouteContext);

  const [moviesArr, setMoviesArr] = useState<Film[]>([]);

  useEffect(() => {
    getMovies();
  }, [routeName]);

  const getMovies = async (): Promise<void> => {
    try {
      const values = await AsyncStorage.getItem("Movies");
      if (values !== null) {
        setMoviesArr(JSON.parse(values));
      } else {
        throw "Error";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {moviesArr.length === 0 ? (
        <View style={styles.container__no__favorites}>
          <Text style={styles.text__no__favorites}>
            Vous n&apos;avez pas de favoris
          </Text>
        </View>
      ) : (
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.section}>
            <Text style={styles.title}>Mes films favoris</Text>
            <MoviesListVertical data={moviesArr} />
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Favorites;

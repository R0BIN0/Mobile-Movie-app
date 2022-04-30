import { View, Text } from "react-native";
import { FC, useContext, useEffect, useState } from "react";
import styles from "./Favorites.styles";
import { ScrollView } from "react-native-gesture-handler";
import MoviesListVertical from "../../Components/MoviesListVertical/MoviesListVertical";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RouteContext } from "../../Context/RouteContext";
import { Film } from "../../Config/types";

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
  );
};

export default Favorites;

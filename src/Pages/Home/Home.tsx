import { View, Text, ScrollView } from "react-native";
import { FC } from "react";
import styles from "./Home.styles";
import SearchBar from "../../Components/SearchBar/SearchBar";
import MoviesListHorizontal from "../../Components/MoviesListHorizontal/MoviesListHorizontal";
import MoviesListVertical from "../../Components/MoviesListVertical/MoviesListVertical";
import { useFetch } from "../../Hooks/useFetch";

const Home: FC = () => {
  const { moviesArr } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=${process.env.API_KEY}`,
    "GET_ARR"
  );

  return (
    <>
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.section}>
          <Text style={styles.title}>Les plus populaires</Text>
          <MoviesListHorizontal />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Films dramatiques du moment</Text>
          <MoviesListVertical data={moviesArr} />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

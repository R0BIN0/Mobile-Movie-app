import { View, Text, ScrollView } from "react-native";
import { FC, useState } from "react";
import styles from "./Home.styles";
import SearchBar from "../../Components/SearchBar/SearchBar";
import MoviesListHorizontal from "../../Components/MoviesListHorizontal/MoviesListHorizontal";
import MoviesListVertical from "../../Components/MoviesListVertical/MoviesListVertical";
import { useFetch } from "../../Hooks/useFetch";
import { Film } from "../../Config/types";

const Home: FC = () => {
  const { moviesArr } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=${process.env.API_KEY}`,
    "GET_ARR"
  );

  const [searchData, setSearchData] = useState<Film[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  const handleKeyword = async (): Promise<void | null> => {
    if (!keyword) {
      return null;
    }

    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
    )
      .then((res) => res.json())
      .then((data) => setSearchData(data.results));
  };

  return (
    <>
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        setSearchData={setSearchData}
        handleKeyword={handleKeyword}
      />
      {searchData.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={styles.section}>
            <Text style={styles.title}>Recherche :</Text>
            <MoviesListVertical data={searchData} />
          </View>
        </ScrollView>
      ) : (
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
      )}
    </>
  );
};

export default Home;

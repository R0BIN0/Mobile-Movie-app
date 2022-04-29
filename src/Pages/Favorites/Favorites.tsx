import { View, Text } from "react-native";
import { FC, useEffect, useState } from "react";
import styles from "./Favorites.styles";
// import useRouteName from "../../Hooks/useRouteName";
import { ScrollView } from "react-native-gesture-handler";
import MoviesListVertical from "../../Components/MoviesListVertical/MoviesListVertical";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Données obtenus du LS

type FavProps = {
  id: number;
  title: string;
  image: string;
  rating: number;
  description: string;
  categories: string[];
};

const data = [
  {
    id: 1,
    title: "Iron Man 3",
    image:
      "https://th.bing.com/th/id/OIP.YlmIPrX3FcLBoiDWSWMxlwHaLH?pid=ImgDet&rs=1",
    rating: 4.6,
    categories: ["Action", "Aventure"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus magni fuga, ratione cumque adipisci...",
    like: true,
  },
  {
    id: 2,
    title: "Iron Man 4",
    image:
      "https://th.bing.com/th/id/OIP.YlmIPrX3FcLBoiDWSWMxlwHaLH?pid=ImgDet&rs=1",
    rating: 7.3,
    categories: ["Action", "Aventure"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus magni fuga, ratione cumque adipisci...",
    like: true,
  },
  {
    id: 3,
    title: "Iron Man 5",
    image:
      "https://th.bing.com/th/id/OIP.YlmIPrX3FcLBoiDWSWMxlwHaLH?pid=ImgDet&rs=1",
    rating: 3.1,
    categories: ["Action", "Aventure"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus magni fuga, ratione cumque adipisci...",
    like: true,
  },
  {
    id: 4,
    title: "Iron Man 6",
    image:
      "https://th.bing.com/th/id/OIP.YlmIPrX3FcLBoiDWSWMxlwHaLH?pid=ImgDet&rs=1",
    rating: 3.1,
    categories: ["Action", "Aventure"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus magni fuga, ratione cumque adipisci...",
    like: true,
  },
];

const Favorites: FC = () => {
  const [moviesArr, setMoviesArr] = useState<FavProps[]>([]);

  console.log(moviesArr);

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

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <View style={styles.section}>
        <Text style={styles.title}>Mes films favoris</Text>
        <MoviesListVertical data={moviesArr} />
      </View>
    </ScrollView>
  );
};

export default Favorites;

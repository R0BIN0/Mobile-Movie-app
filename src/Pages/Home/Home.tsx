import { View, Text, ScrollView } from "react-native";
import { FC } from "react";
import styles from "./Home.styles";
import SearchBar from "../../Components/SearchBar/SearchBar";
import MoviesListHorizontal from "../../Components/MoviesListHorizontal/MoviesListHorizontal";
import MoviesListVertical from "../../Components/MoviesListVertical/MoviesListVertical";
import useRouteName from "../../Hooks/useRouteName";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

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
  },
];

const Home: FC<HomeProps> = () => {
  const { routeName } = useRouteName();

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
          <MoviesListVertical data={data} />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

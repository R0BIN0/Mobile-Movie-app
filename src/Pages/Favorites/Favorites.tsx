import { View, Text } from "react-native";
import { FC } from "react";
import styles from "./Favorites.styles";
// import useRouteName from "../../Hooks/useRouteName";
import { ScrollView } from "react-native-gesture-handler";
import MoviesListVertical from "../../Components/MoviesListVertical/MoviesListVertical";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FavoriteProps {}

// Données obtenus du LS

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

const Favorites: FC<FavoriteProps> = () => {
  // const { routeName } = useRouteName();

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <View style={styles.section}>
        <Text style={styles.title}>Mes films favoris</Text>
        <MoviesListVertical data={data} />
      </View>
    </ScrollView>
  );
};

export default Favorites;

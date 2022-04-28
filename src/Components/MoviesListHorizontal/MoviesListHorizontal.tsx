import {
  View,
  Text,
  Image,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import { FC } from "react";
import styles from "./MoviesListHorizontal.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "../../Navigation/Navigation";
import { useNavigation } from "@react-navigation/native";

type PictureProps = {
  id: number;
  image: string;
};

type InfoProps = {
  title: string;
  categories: string[];
};

type Props = PictureProps & InfoProps;

const data = [
  {
    id: 1,
    title: "Iron Man 3",
    image:
      "https://th.bing.com/th/id/OIP.6X5s7tF-4VRUPnCPJbSzmwHaLH?pid=ImgDet&rs=1",
    categories: ["Action", "Aventure"],
  },
  {
    id: 2,
    title: "Le Parrain",
    image:
      "https://th.bing.com/th/id/OIP.6X5s7tF-4VRUPnCPJbSzmwHaLH?pid=ImgDet&rs=1",
    categories: ["Action", "Drame"],
  },
  {
    id: 3,
    title: "Fight Club",
    image:
      "https://th.bing.com/th/id/OIP.6X5s7tF-4VRUPnCPJbSzmwHaLH?pid=ImgDet&rs=1",
    categories: ["Action", "Drame"],
  },
  {
    id: 4,
    title: "Je suis une légende",
    image:
      "https://th.bing.com/th/id/OIP.6X5s7tF-4VRUPnCPJbSzmwHaLH?pid=ImgDet&rs=1",
    categories: ["Action", "Drame"],
  },
  {
    id: 5,
    title: "Là-Haut",
    image:
      "https://th.bing.com/th/id/OIP.6X5s7tF-4VRUPnCPJbSzmwHaLH?pid=ImgDet&rs=1",
    categories: ["Action", "Drame"],
  },
];

const MoviesListHorizontal: FC = () => {
  const renderItem: ListRenderItem<Props> = ({ item }) => {
    return (
      <View key={item.id}>
        <MoviePicture id={item.id} image={item.image} />
        <MovieInfo title={item.title} categories={item.categories} />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        {...{ renderItem }}
      />
    </View>
  );
};

const MoviePicture: FC<PictureProps> = ({ id, image }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const onPress = (): void => {
    navigation.navigate("MovieDetails", { id });
  };

  return (
    <TouchableOpacity {...{ onPress }} style={styles.img__container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.img}
      />
    </TouchableOpacity>
  );
};

const MovieInfo: FC<InfoProps> = ({ title, categories }) => (
  <View>
    <Text style={styles.title}>
      {title.length >= 17 ? `${title.substring(0, 15)}...` : `${title}`}
    </Text>
    <View style={styles.categories__container}>
      <Text style={styles.categories}>{categories[0]}</Text>
      <Text style={styles.categories}>{categories[1]}</Text>
    </View>
  </View>
);

export default MoviesListHorizontal;

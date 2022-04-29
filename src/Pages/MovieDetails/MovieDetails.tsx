import { View, Image } from "react-native";
import { FC } from "react";
import styles from "./MovieDetails.styles";
import InfoMovieDetails from "../../Components/InfoMovieDetails/InfoMovieDetails";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../Config/variables";
import { ScrollView } from "react-native-gesture-handler";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RouteParams } from "../../Navigation/Navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { TOKEN } from "@env";

// eslint-disable-next-line @typescript-eslint/ban-types
type PictureProps = {
  image: string;
};

type FavProps = {
  id: number;
  title: string;
  image: string;
  rating: number;
  description: string;
  categories: string[];
};

const MovieDetails: FC = () => {
  const route = useRoute<RouteProp<RouteParams>>();
  console.log(route.params?.id);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const addToFavorites = async (): Promise<void> => {
    try {
      const alreadyLS: string | null = await AsyncStorage.getItem("Movies");
      const currentLS: FavProps[] = JSON.parse(alreadyLS as string);

      const test = currentLS.findIndex((item: FavProps) => item.id === data.id);

      if (test === -1) {
        const favoriteObj: FavProps = {
          id: data.id,
          title: data.title,
          image: data.image,
          rating: data.rating,
          description: data.description,
          categories: data.categories,
        };

        await AsyncStorage.setItem(
          "Movies",
          JSON.stringify([...currentLS, favoriteObj])
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const removeFromFavorites = (): void => {};

  const data = {
    id: 1,
    year: "2007",
    title: "Je suis une légende",
    image:
      "https://th.bing.com/th/id/OIP.C_5i4kYz0Nlq3DHvPTDofAHaEK?w=329&h=185&c=7&r=0&o=5&pid=1.7",
    rating: 3.4,
    description: "Robert Neville ",
    categories: ["Action", "Aventure", "Violence"],
    casting: [
      {
        id: 1,
        name: "Will Smith",
        role: "Actor",
        image:
          "https://th.bing.com/th/id/OIP.f0usiCvs4P7wEIizJmwLRAHaLJ?pid=ImgDet&rs=1",
      },
      {
        id: 2,
        name: "Will Smith",
        role: "Actor",
        image:
          "https://th.bing.com/th/id/OIP.f0usiCvs4P7wEIizJmwLRAHaLJ?pid=ImgDet&rs=1",
      },
    ],
  };

  return (
    <View style={{ backgroundColor: "red" }}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <PictureMovieDetails image={data.image} />
        <InfoMovieDetails
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          year={data.year}
          title={data.title}
          description={data.description}
          categories={data.categories}
          casting={data.casting}
        />
      </ScrollView>
    </View>
  );
};

const PictureMovieDetails: FC<PictureProps> = ({ image }) => (
  <View style={styles.img__container}>
    <Image
      style={styles.img}
      source={{
        uri: image,
      }}
    />
    <LinearGradient
      colors={["rgba(0, 0, 0, .0)", `${colors.primaryBlue}`]}
      style={styles.img__linear}
    ></LinearGradient>
  </View>
);

export default MovieDetails;

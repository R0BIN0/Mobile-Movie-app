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
  const { setRouteName } = useContext(RouteContext);
  console.log(route.params?.id);

  const [like, setLike] = useState<boolean>(false);
  const [LS, setLS] = useState<FavProps[]>([]);

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
      (item: FavProps) => item.id === data.id
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
        (item: FavProps) => item.id === data.id
      );

      if (itemAlreadyHere === -1) {
        const favoriteItem: FavProps = {
          id: data.id,
          title: data.title,
          image: data.image,
          rating: data.rating,
          description: data.description,
          categories: data.categories,
        };

        await AsyncStorage.setItem(
          "Movies",
          JSON.stringify([...LS, favoriteItem])
        );

        setLike(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromFavorites = async (): Promise<void> => {
    try {
      const newLS = LS.filter((item: FavProps) => item.id !== data.id);
      await AsyncStorage.setItem("Movies", JSON.stringify(newLS));
      setLike(false);
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    id: 2,
    year: "2007",
    title: "Je suis une légende 6",
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
          like={like}
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

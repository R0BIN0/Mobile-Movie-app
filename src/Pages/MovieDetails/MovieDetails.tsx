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

const MovieDetails: FC = () => {
  console.log("====================================");
  console.log(process.env.TOKEN);
  console.log("====================================");
  const route = useRoute<RouteProp<RouteParams>>();
  console.log(route.params?.id);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const addToFavorites = (): void => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const removeFromFavorites = (): void => {};

  const data = {
    id: 1,
    year: "2007",
    title: "Je suis une légende",
    image:
      "https://th.bing.com/th/id/OIP.C_5i4kYz0Nlq3DHvPTDofAHaEK?w=329&h=185&c=7&r=0&o=5&pid=1.7",
    description:
      "Robert Neville était un savant de haut niveau et de réputation mondiale, mais il en aurait fallu plus pour stopper les ravages de cet incurable et terrifiant virus d'origine humaine. Mystérieusement immunisé contre le mal, Neville est aujourd'hui le dernier homme à hanter les ruines de New York. Peut-être le dernier homme sur Terre... Depuis trois ans, il diffuse chaque jour des messages radio dans le fol espoir de trouver d'autres survivants. Nul n'a encore répondu. Mais Neville n'est pas seul. Des mutants, victimes de cette peste moderne - on les appelle les 'Infectés' - rôdent dans les ténèbres... observent ses moindres gestes, guettent sa première erreur. Devenu l ultime espoir de l humanité, Neville se consacre tout entier à sa mission : venir à bout du virus, en annuler les terribles effets en se servant de son propre sang.",
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

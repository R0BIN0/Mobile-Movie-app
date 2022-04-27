import { View, Image } from "react-native";
import { FC } from "react";
import styles from "./MovieDetails.styles";
import InfoMovieDetails from "../../Components/InfoMovieDetails/InfoMovieDetails";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../Config/variables";
import { ScrollView } from "react-native-gesture-handler";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FilmDetailsProps {}

const MovieDetails: FC<FilmDetailsProps> = () => {
  return (
    <View>
      <ScrollView>
        <PictureMovieDetails />
        <InfoMovieDetails />
      </ScrollView>
    </View>
  );
};

const PictureMovieDetails: FC = () => (
  <View style={styles.img__container}>
    <Image
      style={styles.img}
      source={{
        uri: "https://th.bing.com/th/id/OIP.LgX1Xsk4lmfk9R6WD7IiDgHaEK?pid=ImgDet&rs=1",
      }}
    />
    <LinearGradient
      colors={["rgba(0, 0, 0, .0)", `${colors.primaryBlue}`]}
      style={styles.img__linear}
    ></LinearGradient>
  </View>
);

export default MovieDetails;

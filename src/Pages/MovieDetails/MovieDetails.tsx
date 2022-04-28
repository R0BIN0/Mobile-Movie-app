import { View, Image } from "react-native";
import { FC } from "react";
import styles from "./MovieDetails.styles";
import InfoMovieDetails from "../../Components/InfoMovieDetails/InfoMovieDetails";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../Config/variables";
import { ScrollView } from "react-native-gesture-handler";
import useRouteName from "../../Hooks/useRouteName";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RouteParams } from "../../Navigation/Navigation";

// eslint-disable-next-line @typescript-eslint/ban-types
type IdProps = {};

const MovieDetails: FC<IdProps> = () => {
  const route = useRoute<RouteProp<RouteParams>>();
  console.log(route.params?.id);

  const { routeName } = useRouteName();

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
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

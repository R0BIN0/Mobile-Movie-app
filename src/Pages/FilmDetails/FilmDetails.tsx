import { View, Image } from "react-native";
import { FC } from "react";
import styles from "./FilmDetails.styles";
import InfoFilmDetails from "../../Components/InfoFilmDetails/infoFilmDetails";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../Config/variables";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FilmDetailsProps {}

const FilmDetails: FC<FilmDetailsProps> = () => {
  return (
    <View>
      <PictureFilmDetails />
      <InfoFilmDetails />
    </View>
  );
};

const PictureFilmDetails: FC = () => (
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

export default FilmDetails;

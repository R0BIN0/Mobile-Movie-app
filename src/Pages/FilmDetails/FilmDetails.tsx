import { View, Text } from "react-native";
import { FC } from "react";
import styles from "./FilmDetails.styles";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FilmDetailsProps {}

const FilmDetails: FC<FilmDetailsProps> = () => {
  return (
    <View>
      <Text>FilmDetails</Text>
    </View>
  );
};

export default FilmDetails;

import { View, Text } from "react-native";
import { FC } from "react";
import styles from "./Favorites.styles";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FavoriteProps {}

const Favorites: FC<FavoriteProps> = () => {
  return (
    <View>
      <Text>Favorites</Text>
    </View>
  );
};

export default Favorites;

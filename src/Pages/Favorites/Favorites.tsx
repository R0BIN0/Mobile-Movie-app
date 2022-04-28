import { View, Text } from "react-native";
import { FC } from "react";
import styles from "./Favorites.styles";
import useRouteName from "../../Hooks/useRouteName";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FavoriteProps {}

const Favorites: FC<FavoriteProps> = () => {
  const { routeName } = useRouteName();

  return (
    <View>
      <Text>Favorites</Text>
    </View>
  );
};

export default Favorites;

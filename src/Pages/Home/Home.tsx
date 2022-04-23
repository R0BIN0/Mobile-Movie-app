import { View, Text } from "react-native";
import { FC } from "react";
import styles from "./Home.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "../../Navigation/Navigation";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  return (
    <View>
      <Text onPress={() => navigation.navigate("FilmDetails")}>Home</Text>
    </View>
  );
};

export default Home;

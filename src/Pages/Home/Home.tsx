import { View, Text, ScrollView } from "react-native";
import { FC } from "react";
import styles from "./Home.styles";
import SearchBar from "../../Components/SearchBar/SearchBar";
import FilmsListHorizontal from "../../Components/FilmsListHorizontal/FilmsListHorizontal";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.title}>Les plus populaires</Text>
          <FilmsListHorizontal />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

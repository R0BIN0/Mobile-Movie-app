import { View, Text } from "react-native";
import { FC } from "react";
import styles from "./Home.styles";
import SearchBar from "../../Components/SearchBar/SearchBar";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <SearchBar />
      <Text>HOME</Text>
    </>
  );
};

export default Home;

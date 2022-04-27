import { View, TouchableOpacity } from "react-native";
import { FC } from "react";
import FilmCard from "../FilmCard/FilmCard";
import styles from "./FilmsListVertical.styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const data = [
  {
    id: 1,
    title: "Iron Man 3",
    image:
      "https://th.bing.com/th/id/OIP.YlmIPrX3FcLBoiDWSWMxlwHaLH?pid=ImgDet&rs=1",
    rating: 4.6,
    categories: ["Action", "Aventure"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus magni fuga, ratione cumque adipisci...",
  },
  {
    id: 2,
    title: "Iron Man 4",
    image:
      "https://th.bing.com/th/id/OIP.YlmIPrX3FcLBoiDWSWMxlwHaLH?pid=ImgDet&rs=1",
    rating: 7.3,
    categories: ["Action", "Aventure"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus magni fuga, ratione cumque adipisci...",
  },
  {
    id: 3,
    title: "Iron Man 5",
    image:
      "https://th.bing.com/th/id/OIP.YlmIPrX3FcLBoiDWSWMxlwHaLH?pid=ImgDet&rs=1",
    rating: 3.1,
    categories: ["Action", "Aventure"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus magni fuga, ratione cumque adipisci...",
  },
];

const FilmsListVertical: FC = () => {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View key={item.id} style={styles.film__container}>
          <FilmCard {...item} />
          <FilmsButton />
        </View>
      ))}
    </View>
  );
};

const FilmsButton = () => (
  <TouchableOpacity style={styles.button__container}>
    <MaterialIcons style={styles.icon} name="add" size={25} />
  </TouchableOpacity>
);

export default FilmsListVertical;

import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  Image,
  TouchableOpacity,
} from "react-native";
import { FC } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import styles from "./InfoMovieDetails.styles";

type Props = {
  id?: number;
  name: string;
  role: string;
  image: string;
};

const data = [
  {
    id: 1,
    name: "Edward Johnaaaaaaa",
    role: "Nate",
    image:
      "https://th.bing.com/th/id/OIP.6X5s7tF-4VRUPnCPJbSzmwHaLH?pid=ImgDet&rs=1",
  },
  {
    id: 2,
    name: "Edward Johns",
    role: "Nate",
    image:
      "https://th.bing.com/th/id/OIP.6X5s7tF-4VRUPnCPJbSzmwHaLH?pid=ImgDet&rs=1",
  },
  {
    id: 3,
    name: "Edward Johns",
    role: "Nate",
    image:
      "https://th.bing.com/th/id/OIP.6X5s7tF-4VRUPnCPJbSzmwHaLH?pid=ImgDet&rs=1",
  },
  {
    id: 4,
    name: "Edward Johns",
    role: "Nate",
    image:
      "https://th.bing.com/th/id/OIP.6X5s7tF-4VRUPnCPJbSzmwHaLH?pid=ImgDet&rs=1",
  },
  {
    id: 5,
    name: "Edward Johns",
    role: "Nate",
    image:
      "https://th.bing.com/th/id/OIP.6X5s7tF-4VRUPnCPJbSzmwHaLH?pid=ImgDet&rs=1",
  },
];

const InfoMovieDetails: FC = () => {
  const renderItem: ListRenderItem<Props> = ({ item }) => (
    <CastingMovie key={item.id} {...item} />
  );
  return (
    <View style={styles.container}>
      <DescriptionMovie />
      <Text style={styles.title__section}>Casting</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        {...{ renderItem }}
      />
      <ButtonsMovie />
    </View>
  );
};

const DescriptionMovie = () => (
  <View>
    <Text style={styles.year}>2021</Text>
    <View style={styles.title__container}>
      <Text style={styles.title}>Fight Club</Text>
      <View style={styles.rating__container}>
        <FontAwesome style={styles.icon} name="star" size={12} />
        <Text style={styles.rating}>9.3</Text>
      </View>
    </View>
    <View>
      <Text style={styles.text}>
        <Text style={styles.strong__text}>Synopsis : </Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        accusamus magni fuga, ratione cumque adipisci veritatis veniam modi
        numquam consectetur dolorum exercitationem unde doloremque blanditiis ex
        officia facilis. Velit vel distinctio placeat quam ullam.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.strong__text}>Catégories : </Text>
        Action, Aventure, Drame, Violence
      </Text>
    </View>
  </View>
);

const CastingMovie: FC<Props> = ({ name, role, image }) => (
  <View>
    <View style={styles.img__container}>
      <Image style={styles.img} source={{ uri: image }} />
    </View>
    <View>
      <Text style={styles.name}>
        {name.length >= 14 ? `${name.substring(0, 12)}...` : `${name}`}
      </Text>
      <Text style={styles.role}>
        {role.length >= 14 ? `${role.substring(0, 12)}...` : `${role}`}
      </Text>
    </View>
  </View>
);

const ButtonsMovie: FC = () => (
  <View style={styles.buttons__container}>
    <TouchableOpacity style={styles.button__secondary}>
      <Text style={styles.text__button}>Ajouter à mes favoris </Text>
      <FontAwesome5 name="heart" size={16} style={styles.icon__button} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.button__primary}>
      <Text style={styles.text__button}>
        Regarder <Text style={styles.strong__text__button}>Fight Club</Text>
      </Text>
    </TouchableOpacity>
  </View>
);

export default InfoMovieDetails;

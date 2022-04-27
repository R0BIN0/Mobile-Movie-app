import { View, Text } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./InfoFilmsDetails.styles";

const infoFilmDetails = () => {
  return (
    <View style={styles.container}>
      <DescriptionFilm />
      <CastingFilm />
      <ButtonsFilm />
    </View>
  );
};

const DescriptionFilm = () => (
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

const CastingFilm = () => (
  <View>
    <Text>A</Text>
  </View>
);

const ButtonsFilm = () => (
  <View>
    <Text>A</Text>
  </View>
);

export default infoFilmDetails;

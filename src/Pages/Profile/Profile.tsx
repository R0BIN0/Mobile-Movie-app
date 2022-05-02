import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./Profile.styles";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cette page n&apos;a pas été réalisée</Text>
      <Image
        style={styles.img}
        source={require("../../Assets/Images/NoPage.png")}
      />
    </View>
  );
}

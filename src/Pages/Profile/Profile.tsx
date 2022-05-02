// General
import { View, Text, Image } from "react-native";

// Styles
import styles from "./Profile.styles";

// ============================ Profile ============================

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

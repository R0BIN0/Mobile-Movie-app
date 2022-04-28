// General
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FC, useEffect } from "react";

// Styles
import styles from "./Header.styles";

// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Context
import { useContext } from "react";
import { RouteContext } from "../../Context/RouteContext";

const Header: FC = () => {
  const { routeName } = useContext(RouteContext);

  return (
    <SafeAreaView
      style={{ display: routeName === "MovieDetails" ? "none" : "flex" }}
    >
      <View style={styles.container}>
        <HeaderProfile />
        <HeaderNotification />
      </View>
    </SafeAreaView>
  );
};

const HeaderProfile: FC = () => (
  <View style={styles.header__left__container}>
    <TouchableOpacity>
      <Image
        style={styles.profile__img}
        source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
    </TouchableOpacity>
    <View style={styles.info__left}>
      <Text style={styles.subtitle}>Bonjour,</Text>
      <Text style={styles.title}>Sarah M.</Text>
    </View>
  </View>
);

const HeaderNotification: FC = () => (
  <View>
    <TouchableOpacity style={styles.notification__box}>
      <MaterialCommunityIcons name="bell" size={22.5} style={styles.icon} />
      <View style={styles.red__dot}></View>
    </TouchableOpacity>
  </View>
);

export default Header;

import { View, Text, TouchableOpacity, Platform } from "react-native";
import { FC, useContext } from "react";
import styles from "./BottomBar.styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "../../Navigation/Navigation";
import { RouteContext } from "../../Context/RouteContext";

type Props = {
  title?: string;
  icon: string;
  iconType?: string;
  to: string;
};

const Items = [
  {
    search: false,
    title: "Films",
    icon: "film",
    iconType: "FontAwesome5",
    to: "Home",
  },
  {
    search: false,
    title: "Favoris",
    icon: "heart",
    iconType: "FontAwesome5",
    to: "Favorites",
  },
  {
    search: true,
    icon: "search",
    iconType: "Feather",
    to: "Home",
  },
  {
    search: false,
    title: "Profil",
    icon: "user",
    iconType: "Feather",
    to: "",
  },
  {
    search: false,
    title: "Options",
    icon: "settings",
    iconType: "Feather",
    to: "",
  },
];

const BottomBar: FC = () => {
  return (
    <View style={styles.container}>
      {Items.map((item, i) => (
        <View key={i}>
          {item.search ? (
            <SearchItem
              title={item.title}
              icon={item.icon}
              iconType={item.iconType}
              to={item.to}
            />
          ) : (
            <MenuItems
              title={item.title}
              icon={item.icon}
              iconType={item.iconType}
              to={item.to}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const MenuItems: FC<Props> = ({ title, icon, iconType, to }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  const { setRouteName } = useContext(RouteContext);

  const onPress = () => {
    setRouteName(to);
    navigation.navigate(`${to}` as keyof RouteParams);
  };

  return (
    <TouchableOpacity {...{ onPress }} style={styles.menuItems__container}>
      {iconType === "Feather" ? (
        <Feather name={icon} size={20} style={styles.icon} />
      ) : (
        <FontAwesome5 name={icon} size={20} style={styles.icon} />
      )}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const SearchItem: FC<Props> = ({ icon, to }) => {
  const { setIsBottomButton, setRouteName } = useContext(RouteContext);
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const onPress = (): void => {
    // Avoid IOS transition page problem
    if (Platform.OS === "android") {
      setIsBottomButton(true);
      setRouteName(to);
      navigation.navigate(`${to}` as keyof RouteParams);
    } else {
      setIsBottomButton(true);
      setRouteName(to);
      setTimeout(() => {
        navigation.navigate(`${to}` as keyof RouteParams);
      }, 100);
    }
  };

  return (
    <View style={styles.menuItems__container}>
      <TouchableOpacity {...{ onPress }} style={styles.icon__container}>
        <Feather name={icon} size={25} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;

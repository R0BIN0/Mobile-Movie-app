import { View, Text, TouchableOpacity } from "react-native";
import { FC, useEffect } from "react";
import styles from "./BottomBar.styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";

const Items = [
  {
    search: false,
    title: "Films",
    icon: "film",
    iconType: "FontAwesome5",
  },
  {
    search: false,
    title: "Favoris",
    icon: "heart",
    iconType: "FontAwesome5",
  },
  {
    search: true,
    icon: "search",
    iconType: "Feather",
  },
  {
    search: false,
    title: "Profil",
    icon: "user",
    iconType: "Feather",
  },
  {
    search: false,
    title: "Options",
    icon: "settings",
    iconType: "Feather",
  },
];

type Props = {
  title?: string;
  icon: string;
  iconType?: string;
};

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
            />
          ) : (
            <MenuItems
              title={item.title}
              icon={item.icon}
              iconType={item.iconType}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const MenuItems: FC<Props> = ({ title, icon, iconType }) => (
  <TouchableOpacity style={styles.menuItems__container}>
    {iconType === "Feather" ? (
      <Feather name={icon} size={20} style={styles.icon} />
    ) : (
      <FontAwesome5 name={icon} size={20} style={styles.icon} />
    )}
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const SearchItem: FC<Props> = ({ icon }) => (
  <View style={styles.menuItems__container}>
    <TouchableOpacity style={styles.icon__container}>
      <Feather name={icon} size={25} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

export default BottomBar;

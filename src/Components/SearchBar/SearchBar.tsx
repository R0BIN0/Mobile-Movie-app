import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FC, useState } from "react";
import styles from "./SearchBar.styles";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../../Config/variables";

type Props = {
  value?: string;
  // eslint-disable-next-line no-unused-vars
  setValue: (txt: string) => void;
};

const SearchBar: FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <View style={styles.container}>
      <SearchInput value={value} setValue={setValue} />
      <SearchCancel setValue={setValue} />
    </View>
  );
};

const SearchInput: FC<Props> = ({ value, setValue }) => {
  const onChangeText = (txt: string) => setValue(txt);

  return (
    <View style={styles.input__container}>
      <TouchableOpacity style={styles.icon__container}>
        <Feather name="search" size={20} style={styles.icon} />
      </TouchableOpacity>
      <TextInput
        value={value}
        {...{ onChangeText }}
        style={styles.input}
        placeholder="Rechercher"
        placeholderTextColor={colors.secondaryGrey}
      />
    </View>
  );
};

const SearchCancel: FC<Props> = ({ setValue }) => {
  return (
    <TouchableOpacity
      style={styles.cancel__container}
      onPress={() => setValue("")}
    >
      <Text style={styles.cancel__text}>Annuler</Text>
    </TouchableOpacity>
  );
};

export default SearchBar;

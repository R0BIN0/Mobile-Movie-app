import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FC, useState, useRef, RefObject, useEffect, useContext } from "react";
import styles from "./SearchBar.styles";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../../Config/variables";

import { RouteContext } from "../../Context/RouteContext";

type Props = {
  value?: string;
  // eslint-disable-next-line no-unused-vars
  setValue: (txt: string) => void;
  inputRef?: RefObject<TextInput>;
};

const SearchBar: FC = () => {
  const { isBottomButton, setIsBottomButton } = useContext(RouteContext);

  const [firstRender, setFirstRender] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<TextInput>(null);

  const isBottomTabInput = () => {
    inputRef.current?.focus();
    setValue("");
    setIsBottomButton(false);
  };

  useEffect(() => {
    if (!firstRender) {
      setFirstRender(true);
    } else {
      isBottomTabInput();
    }
  }, [isBottomButton]);

  return (
    <View style={styles.container}>
      <SearchInput value={value} setValue={setValue} inputRef={inputRef} />
      <SearchCancel setValue={setValue} />
    </View>
  );
};

const SearchInput: FC<Props> = ({ value, setValue, inputRef }) => {
  const onChangeText = (txt: string) => setValue(txt);

  return (
    <View style={styles.input__container}>
      <TouchableOpacity style={styles.icon__container}>
        <Feather name="search" size={20} style={styles.icon} />
      </TouchableOpacity>
      <TextInput
        ref={inputRef}
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

import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FC, useState, useRef, RefObject, useEffect, useContext } from "react";
import styles from "./SearchBar.styles";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../../Config/variables";
import { Film } from "../../Config/types";

import { RouteContext } from "../../Context/RouteContext";

type Keyword = {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setSearchData: React.Dispatch<React.SetStateAction<Film[]>>;
  handleKeyword: () => Promise<void | null>;
};

type Search = {
  keyword: string;
  inputRef: RefObject<TextInput>;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  handleKeyword: () => Promise<void | null>;
};

type Cancel = {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setSearchData: React.Dispatch<React.SetStateAction<Film[]>>;
};

const SearchBar: FC<Keyword> = ({
  keyword,
  setKeyword,
  setSearchData,
  handleKeyword,
}) => {
  const { isBottomButton, setIsBottomButton } = useContext(RouteContext);
  const [firstRender, setFirstRender] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);

  const isBottomTabInput = () => {
    setKeyword("");
    inputRef.current?.focus();
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
      <SearchInput
        keyword={keyword}
        setKeyword={setKeyword}
        inputRef={inputRef}
        handleKeyword={handleKeyword}
      />
      <SearchCancel setKeyword={setKeyword} setSearchData={setSearchData} />
    </View>
  );
};

const SearchInput: FC<Search> = ({
  keyword,
  setKeyword,
  inputRef,
  handleKeyword,
}) => {
  const onChangeText = (txt: string) => setKeyword(txt);

  return (
    <View style={styles.input__container}>
      <TouchableOpacity
        onPress={() => handleKeyword()}
        style={styles.icon__container}
      >
        <Feather name="search" size={20} style={styles.icon} />
      </TouchableOpacity>
      <TextInput
        ref={inputRef}
        value={keyword}
        {...{ onChangeText }}
        style={styles.input}
        placeholder="Rechercher"
        placeholderTextColor={colors.secondaryGrey}
      />
    </View>
  );
};

const SearchCancel: FC<Cancel> = ({ setKeyword, setSearchData }) => {
  const onPress = () => {
    setKeyword("");
    setSearchData([]);
  };
  return (
    <TouchableOpacity style={styles.cancel__container} {...{ onPress }}>
      <Text style={styles.cancel__text}>Annuler</Text>
    </TouchableOpacity>
  );
};

export default SearchBar;

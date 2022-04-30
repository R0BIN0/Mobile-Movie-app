import { StyleSheet } from "react-native";
import { colors, padding, fontFamily, margin } from "../../Config/variables";

const styles = StyleSheet.create({
  // ============================= FILM LIST =============================

  // ============================= FILM PICTURE =============================

  img__container: {
    marginBottom: margin.sM,
    paddingRight: padding.sP,
  },

  img: {
    width: 130,
    height: 190,
    borderRadius: 10,
  },

  // ============================= FILM INFO =============================

  title: {
    color: colors.primaryGrey,
    fontFamily: fontFamily.pop500,
    lineHeight: 18,
  },
});

export default styles;

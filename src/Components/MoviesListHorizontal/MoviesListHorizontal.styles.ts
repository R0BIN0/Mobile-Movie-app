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

  // categories__container: {
  //   flexDirection: "row",
  // },

  // categories: {
  //   color: colors.secondaryGrey,
  //   fontFamily: fontFamily.pop400,
  //   fontSize: 11,
  //   marginRight: margin.xsM,
  //   lineHeight: 14,
  // },
});

export default styles;

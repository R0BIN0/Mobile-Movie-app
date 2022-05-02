// General
import { StyleSheet } from "react-native";

// Config
import { colors, padding, fontFamily, margin } from "../../Config/variables";

const styles = StyleSheet.create({
  // ============================= MOVIE LIST HORIZONTAL =============================

  // ============================= MOVIE PICTURE =============================

  img__container: {
    marginBottom: margin.sM,
    paddingRight: padding.sP,
  },

  img: {
    width: 130,
    height: 190,
    borderRadius: 10,
  },

  // ============================= MOVIE INFO =============================

  title: {
    color: colors.primaryGrey,
    fontFamily: fontFamily.pop500,
    lineHeight: 18,
  },
});

export default styles;

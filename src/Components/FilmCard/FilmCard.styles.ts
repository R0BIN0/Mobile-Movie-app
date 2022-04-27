import { StyleSheet } from "react-native";
import { colors, padding, fontFamily, margin } from "../../Config/variables";

const styles = StyleSheet.create({
  // ============================= FILM CARD =============================

  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  // ============================= FILM CARD PICTURE =============================

  img__container: {
    paddingRight: padding.sP,
  },

  img: {
    width: 90,
    height: 150,
    borderRadius: 10,
  },

  // ============================= FILM CARD INFO =============================

  title: {
    color: colors.primaryGrey,
    fontFamily: fontFamily.pop500,
    marginBottom: margin.xsM,
  },

  // ===== rating container =====

  rating__container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: margin.xsM,
  },

  rating: {
    marginLeft: margin.xsM,
    color: colors.secondaryCTA,
    fontSize: 12,
  },

  // ===== categories container =====

  categories__container: {
    flexDirection: "row",
    marginBottom: margin.xsM,
  },

  categories: {
    color: colors.secondaryGrey,
    fontSize: 11,
    marginRight: margin.xsM,
    fontFamily: fontFamily.pop400,
  },

  // ===== description container =====

  description: {
    fontSize: 10,
    maxWidth: 175,
    color: colors.tertiaryBlue,
    fontFamily: fontFamily.pop500,
    lineHeight: 15,
  },
});

export default styles;

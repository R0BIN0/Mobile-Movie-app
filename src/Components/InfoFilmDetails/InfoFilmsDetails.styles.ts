import { StyleSheet } from "react-native";
import {
  colors,
  padding,
  margin,
  fontFamily,
  fontSize,
} from "../../Config/variables";

const styles = StyleSheet.create({
  // ============================= INFO FILMS DETAILS =============================

  container: {
    paddingVertical: padding.sP,
    paddingHorizontal: padding.xlP,
    backgroundColor: colors.primaryBlue,
  },

  // ============================= DESCRIPTION FILM DETAILS =============================

  year: {
    color: colors.primaryGrey,
    fontFamily: fontFamily.pop400,
    fontSize: 12,
    lineHeight: 22.5,
  },

  // ===== title container =====

  title__container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: margin.lgM,
  },

  title: {
    // fontFamily: fontFamily.pop700,
    color: colors.primaryGrey,
    fontSize: fontSize.lgFS,
    lineHeight: 35,
    fontWeight: "bold",
  },

  // ===== rating container =====

  rating__container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  icon: {
    color: colors.secondaryCTA,
    fontSize: fontSize.sFS,
    marginRight: margin.xsM,
  },

  rating: {
    color: colors.secondaryCTA,
    fontSize: fontSize.sFS,
  },

  // ===== text container =====

  text: {
    color: colors.tertiaryBlue,
    fontFamily: fontFamily.pop500,
    lineHeight: 22.5,
    fontSize: 11,
    marginBottom: margin.sM,
  },

  strong__text: {
    fontFamily: fontFamily.pop700,
  },

  // ============================= CASTING FILM DETAILS =============================
  // ============================= BUTTONS FILM DETAILS =============================
});

export default styles;

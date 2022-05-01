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
    // height: "100%",
    flex: 1,
  },

  title__section: {
    color: colors.primaryGrey,
    fontFamily: fontFamily.pop500,
    fontSize: fontSize.sFS,
    marginVertical: margin.sM,
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
    color: colors.primaryGrey,
    fontSize: fontSize.xlFS,
    lineHeight: 35,
    fontWeight: "bold",
    maxWidth: 270,
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

  img__container: {
    marginBottom: margin.sM,
    paddingRight: padding.sP,
  },

  img: {
    width: 110,
    height: 170,
    borderRadius: 10,
  },

  name: {
    color: colors.primaryGrey,
  },

  role: {
    color: colors.secondaryGrey,
  },

  // ============================= BUTTONS FILM DETAILS =============================

  buttons__container: {
    marginTop: margin.xlM,
    marginBottom: margin.mdM,
  },

  button__primary: {
    backgroundColor: colors.primaryCTA,
    marginBottom: margin.mdM,
    alignItems: "center",
    padding: padding.mdP,
    borderRadius: 10,
  },

  button__secondary: {
    marginBottom: margin.mdM,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: padding.mdP,
    borderRadius: 10,
  },

  text__button: {
    color: colors.primaryGrey,
    fontFamily: fontFamily.pop500,
    fontSize: 13,
  },

  strong__text__button: {
    fontFamily: fontFamily.pop700,
  },

  icon__button: {
    marginLeft: margin.sM,
    color: colors.primaryGrey,
  },

  icon__button__like: {
    marginLeft: margin.sM,
    color: colors.tertiaryCTA,
  },
});

export default styles;

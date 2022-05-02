import { StyleSheet } from "react-native";
import {
  padding,
  fontFamily,
  colors,
  margin,
  fontSize,
} from "../../Config/variables";

const styles = StyleSheet.create({
  // ============================= NO FAVORITES =============================

  container__no__favorites: {
    backgroundColor: colors.primaryBlue,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  text__no__favorites: {
    color: colors.secondaryGrey,
    fontFamily: fontFamily.pop500,
  },

  // ============================= FAVORITES =============================

  container: {
    backgroundColor: colors.primaryBlue,
  },

  section: {
    paddingVertical: padding.lgP,
    paddingLeft: padding.xlP,
    justifyContent: "flex-start",
    backgroundColor: colors.primaryBlue,
  },

  title: {
    color: colors.primaryGrey,
    fontFamily: fontFamily.pop500,
    fontSize: fontSize.sFS,
    marginBottom: margin.lgM,
    textAlign: "center",
  },
});

export default styles;

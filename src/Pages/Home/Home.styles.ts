// General
import { StyleSheet } from "react-native";

// Config
import {
  colors,
  padding,
  fontFamily,
  fontSize,
  margin,
} from "../../Config/variables";

const styles = StyleSheet.create({
  // ============================= HOME =============================

  section: {
    paddingVertical: padding.lgP,
    paddingLeft: padding.xlP,
    justifyContent: "flex-start",
    backgroundColor: colors.primaryBlue,
  },

  title: {
    color: colors.primaryGrey,
    fontFamily: fontFamily.pop400,
    fontSize: fontSize.xsFS,
    marginBottom: margin.sM,
  },
});

export default styles;

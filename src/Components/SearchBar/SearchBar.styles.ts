// General
import { StyleSheet } from "react-native";

// Config
import { colors, padding, fontFamily } from "../../Config/variables";

const styles = StyleSheet.create({
  // ============================= SEARCHBAR =============================

  container: {
    paddingVertical: padding.mdP,
    paddingHorizontal: padding.xlP,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primaryBlue,
  },

  // ============================= SEARCHBAR-INPUT =============================

  input__container: {
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.secondaryBlue,
    borderRadius: 50,
    paddingLeft: padding.xxxlP,
    position: "relative",
  },

  icon__container: {
    width: padding.xxxlP,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 3,
  },

  icon: {
    color: colors.primaryGrey,
  },

  input: {
    padding: padding.mdP,
    paddingLeft: 0,
    color: colors.primaryGrey,
    fontFamily: fontFamily.pop400,
    width: "100%",
  },

  // ============================= SEARCHBAR-CANCEL =============================

  cancel__container: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },

  cancel__text: {
    fontFamily: fontFamily.pop400,
    color: colors.secondaryGrey,
  },
});

export default styles;

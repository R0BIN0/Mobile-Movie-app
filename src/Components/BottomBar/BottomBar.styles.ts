// General
import { StyleSheet } from "react-native";

// Config
import { colors, padding, fontFamily } from "../../Config/variables";

const styles = StyleSheet.create({
  // ============================= BOTTOM BAR =============================

  container: {
    backgroundColor: colors.secondaryBlue,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: padding.xxlP,
  },

  // ============================= MENU ITEMS =============================

  menuItems__container: {
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    color: colors.primaryGrey,
  },

  text: {
    color: colors.primaryGrey,
    fontFamily: fontFamily.pop500,
    fontSize: 12,
  },

  // ============================= SEARCH ITEM =============================

  icon__container: {
    backgroundColor: colors.primaryCTA,
    width: 75,
    height: 75,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: colors.secondaryBlue,
    justifyContent: "center",
    alignItems: "center",
    top: -20,
    zIndex: 20,
  },
});

export default styles;

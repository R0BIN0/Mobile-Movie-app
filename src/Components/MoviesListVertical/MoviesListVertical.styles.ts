// General
import { StyleSheet } from "react-native";

// Config
import { colors, padding, margin } from "../../Config/variables";

const styles = StyleSheet.create({
  // ============================= MOVIES LIST VERTICAL =============================

  container: {
    paddingRight: padding.xlP,
  },

  film__container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: margin.lgM,
  },

  // ============================= MOVIES BUTTON =============================

  button__container: {
    width: 42.5,
    height: 42.5,
    backgroundColor: colors.primaryCTA,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  icon: {
    color: colors.primaryGrey,
  },
});

export default styles;

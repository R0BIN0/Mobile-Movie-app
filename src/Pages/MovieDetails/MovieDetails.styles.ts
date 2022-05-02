// General
import { StyleSheet } from "react-native";

// Colors
import { colors } from "../../Config/variables";

const styles = StyleSheet.create({
  // ============================= MOVIE DETAILS =============================

  container: {
    backgroundColor: colors.primaryBlue,
    height: "100%",
  },
  // ============================= PCITURE MOVIE DETAILS =============================

  img__container: {
    position: "relative",
    backgroundColor: colors.primaryBlue,
  },

  img: {
    width: "100%",
    height: 250,
  },

  img__linear: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default styles;

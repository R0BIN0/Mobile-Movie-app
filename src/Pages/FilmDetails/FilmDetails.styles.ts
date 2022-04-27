import { StyleSheet } from "react-native";
import { colors, padding, margin } from "../../Config/variables";

const styles = StyleSheet.create({
  // ============================= FILM DETAILS =============================
  // ============================= FILM DETAILS PICTURE =============================

  img__container: {
    position: "relative",
  },

  img: {
    width: "100%",
    height: 225,
  },

  img__linear: {
    position: "absolute",
    width: "100%",
    height: "100%",
    // backgroundColor: colors.primaryBlue,
  },
});

export default styles;

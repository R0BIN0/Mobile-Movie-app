import { StyleSheet } from "react-native";
import { colors } from "../../Config/variables";

const styles = StyleSheet.create({
  // ============================= PROFILE =============================

  container: {
    backgroundColor: colors.primaryBlue,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: colors.secondaryGrey,
  },
});

export default styles;

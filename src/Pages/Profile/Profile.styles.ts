import { StyleSheet } from "react-native";
import { colors, fontFamily, margin } from "../../Config/variables";

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
    fontFamily: fontFamily.pop500,
    marginBottom: margin.xlM,
  },

  img: {
    width: 100,
    height: 100,
  },
});

export default styles;

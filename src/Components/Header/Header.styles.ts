// General
import { StyleSheet, StatusBar } from "react-native";

// Config
import {
  colors,
  padding,
  fontSize,
  fontFamily,
  margin,
} from "../../Config/variables";

const styles = StyleSheet.create({
  // ============================= HEADER =============================

  statusBar: {
    backgroundColor: colors.primaryBlue,
  },

  container: {
    marginTop: StatusBar.currentHeight,
    paddingVertical: padding.mdP,
    paddingHorizontal: padding.xlP,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primaryBlue,
  },

  // ============================= HEADER PROFILE =============================

  header__left__container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  profile__img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  info__left: {
    marginLeft: margin.mdM,
  },

  subtitle: {
    color: colors.primaryGrey,
    fontFamily: fontFamily.pop400,
    fontSize: 13,
  },
  title: {
    fontSize: fontSize.sFS,
    color: colors.primaryGrey,
    lineHeight: 22.5,
    fontFamily: fontFamily.pop700,
  },

  // ============================= HEADER NOTIFICATION =============================

  notification__box: {
    width: 40,
    height: 40,
    backgroundColor: colors.secondaryBlue,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  icon: {
    color: colors.primaryGrey,
  },

  red__dot: {
    width: 10,
    height: 10,
    backgroundColor: colors.primaryCTA,
    borderRadius: 50,
    position: "absolute",
    right: 8,
    top: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: colors.secondaryBlue,
  },
});

export default styles;

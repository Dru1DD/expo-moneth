import { StyleSheet } from "react-native";

export const navbarStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginBottom: 5,
  },
  navbarItem: {
    flex: 1,
    borderLeftWidth: 0.5,
    borderRightColor: 0.5,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  title: {
    fontSize: 18,
  },
  active: {
    backgroundColor: '#8e9b97'
  }
});

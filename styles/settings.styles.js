import { StyleSheet } from "react-native";

export const settingsStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignitems: "center",
  },
  headerText: {
    fontSize: 28,
  },
  footer: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  blockContainer: {
    width: "90%",
    margin: 15,
  },
  blockHeader: {
    fontSize: 20,
    textShadowColor: "black",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    marginBottom: 10,
  },
  itemContainer: {
    width: "100%",
    borderRadius: 15,
    backgroundColor: "#BCBABE",
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  line: {
    width: "100%",
    margin: 5,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  settingsContainer: {
    width: '50%',
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 5,
  },
  rightPart: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftPart: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

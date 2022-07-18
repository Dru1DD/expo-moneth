import { StyleSheet } from "react-native";

export const homeScreen = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  blockContainer: {
    width: "90%",
    margin: 15,
  },
  blockHeader: {
    fontSize: 20,
    textShadowOffset: { width: 2, height: 2 },
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
    width: "90%",
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: 'black'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16
  }
});

import { StyleSheet } from "react-native";

export const transactionStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  blockContainer: {
    width: "100%",
    margin: 15,
    padding: 10,
  },
  blockHeader: {
    fontSize: 20,
    textShadowOffset: { 
      width: 2, 
      height: 2 
    },
    marginBottom: 10,
  },
  itemContainer: {
    width: "90%",
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#BCBABE",
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "85%",
    padding: 10,
  },
  note: {
    height: 40,
    width: "100%",
    padding: 10,
  },
  inputIcon: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  borderInput: {
    borderWidth: 0.5,
    borderRadius: 15,
    flexDirection: "row",
  },
  buttonContainer: {
    padding: -10,
    left: -10,
    width: 120,
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "red",
    borderRadius: 15,
  },
  button: {
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  space: {
    margin: 50,
  },
  modalContainer: {
    padding: 10,
    height: 40,
    width: "100%",
    flexDirection: 'row'
  },
  modalIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalMain: {
    flex: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

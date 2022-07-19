import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    width: "100%",
    flexDirection: "row",
  },
  back: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerMain: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    padding: 10,
    backgroundColor: "#537072",
    width: "100%",
    marginTop: 10,
    borderRadius: 15,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  itemContainer: {
    padding: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  itemIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  itemBody: {
    flex: 4,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: 'row'
  },
  line: {
    borderWidth: 1,
    borderColor: "black",
  },
  settingsModalBody: {
    padding: 10,
    width: "100%",
    marginTop: 10,
  },
  textInput: {
    padding: 10,
    marginTop: 10,
    width: 250,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 15,
    shadowColor: "#7F5DF0",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 15,
    width: 100,
    height: 50,
    backgroundColor: '#e32f45',
    color: 'white'
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  iconContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
  iconItem: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    boderWidth: 1,
    borderRadius: 15,
    margin: 10,
    shadowColor: "#7F5DF0",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
  },
  activeIcon: {
    backgroundColor: 'grey'
  }
});

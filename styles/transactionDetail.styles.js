import { StyleSheet } from "react-native";

export const transactionDetail = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  priceContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {},
  headerText: {
    fontSize: 18,
  },
  price: {},
  priceText: {
    fontSize: 54,
  },
  bodyContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
  itemContainer: {
    margin: 2,
    padding: 10,
    width: "100%",
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  itemBox: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  itemText: {
    fontSize: 16
  },
  income: {
    color: "#32CD32",
  },
  exspense: {
    color: "#960018",
  },
  line: {
    borderWidth: 0.5,
    borderColor: "black",
    width: "90%",
  },
  noteContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

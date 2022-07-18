import { StyleSheet } from 'react-native'

export const navigationStyles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  customTabBarTouchableOpacity: {
    top: -30,
    justifyConrent: "center",
    alignItems: "center",
  },
  customTabBarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#e32f45",
  },
  tabBarStyle: {
    position: "absolute",
    bottom: 15,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: "#F1F1F2",
    borderRadius: 15,
    height: 70,
  },
})
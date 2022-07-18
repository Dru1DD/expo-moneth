import { StyleSheet } from "react-native"

export const itemStyles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 1,
    },
    iconContainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightContainer: {
        flex: 3,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    dataContainer: {
        padding: 5,
    },
    priceContainer: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    price: {
        fontSize: 14
    },
    catagory: {
      fontSize: 16
    },
    another: {
      fontSize: 12
    },
    line: {
        borderWidth: 0.5,
        borderColor: 'black',
    }
})
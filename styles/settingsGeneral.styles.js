import { StyleSheet } from "react-native";

export const settingsGeneralStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20
    },
    footer: {
        flex: 4,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    blockContainer: {
        width: '100%'
    },
    itemContainer: {
        width: '100%',
        alignSelf: 'center',
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
    item: {
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    line: {
        borderWidth: 0.5,
        borderColor: 'black',
        width: '90%',
        alignSelf: 'center'
    }
})
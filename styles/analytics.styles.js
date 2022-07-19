import { StyleSheet } from 'react-native'

export const analyticsScreen = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 42
    },
    headerSubTitle: {
        fontSize: 36
    },
    footer: {
        flex: 4,
        width: '100%',
        padding: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    }
})
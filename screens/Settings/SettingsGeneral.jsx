import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useStore } from '../../hooks'
import { settingsGeneralStyles as styles } from '../../styles'
import { currencyList } from '../../helpers/currencyList'

import { observer } from 'mobx-react-lite'

export const SettingsGeneral = (props) => {
    const { pageName } = props.route.params

    switch (pageName) {
        case 'CurrencySymbol':
            return <CurrencyList />
        case 'AccountPage':
            return <AccountsList />
        case 'CatagoryPage':
            return <CatagoriesList />
    }


}

const CurrencyList = observer(() => {
    const { accounts } = useStore()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Денежная единица: {accounts.activeCurrencyName} {accounts.activeCurrencySymbol}</Text>
            </View>
            <View style={styles.footer}>
                <View style={{ flex: 5 }}>
                    <View style={styles.blockContainer}>
                        <ScrollView styles={{ width: '100%' }}>
                            <View style={styles.itemContainer}>
                                {
                                    currencyList.map((item, index) => {
                                        return (
                                            <View key={index}>
                                                <TouchableOpacity onPress={() => accounts.updateCurrency(item)}>
                                                <View style={styles.item}>
                                                    <View>
                                                        <Text>{item.name}</Text>
                                                    </View>
                                                    <View>
                                                        <Text>{item.symbol}</Text>
                                                    </View>
                                                </View>
                                                </TouchableOpacity>
                                                {index + 1 !== currencyList.length && <View style={styles.line} />}
                                            </View>
                                        )
                                    })
                                }
                            </View>

                        </ScrollView>
                    </View>

                </View>
                <View style={{ flex: 1 }}>

                </View>

            </View>
        </View>
    )
})

const AccountsList = () => {
    return (
        <View style={styles.container}>
            <Text>AccountsList</Text>
        </View>
    )
}

const CatagoriesList = () => {
    return (
        <View style={styles.container}>
            <Text>CatagoriesList</Text>
        </View>
    )
}
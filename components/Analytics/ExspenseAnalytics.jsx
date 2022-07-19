import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useStore } from '../../hooks'
import { observer } from 'mobx-react-lite'
import { Item } from '../Item/Item'
import { analyticsComponentStyles as styles } from '../../styles/components/analyticsComponent.styles'


export const ExspenseAnalytics = observer(() => {
    const { transactions, accounts } = useStore()

    const { exspenseList, exspenseSum } = transactions

    return (
        <View style={styles.container}>
            {
                exspenseList.length > 0 ? (
                    <ScrollView>
                        <View style={styles.blockContainer}>
                            <Text style={styles.blockHeader}>- {exspenseSum} {accounts.activeCurrencySymbol}</Text>
                            <View style={styles.itemContainer}>
                                { exspenseList.map((elem, index) => {
                                    return (
                                        <View key={index} >
                                            <Item itemInfo={elem} />
                                            {index + 1 !== exspenseList.length && <View style={styles.line} />}
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    </ScrollView>
                ) : (
                    <View style={{ padding: 10 }}>
                        <Text>Упс... Нету транзакций.</Text>
                    </View>
                )
            }
        </View>
    )
})
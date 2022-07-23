import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useStore } from '../../hooks'
import { observer } from 'mobx-react-lite'
import { Item } from '../Item/Item'
import { analyticsComponentStyles as styles } from '../../styles/components/analyticsComponent.styles'
import $t from '../../locales/i18n'



export const IncomeAnalytics = observer(() => {
    const { transactions, accounts } = useStore()
    const { incomeList, incomeSum } = transactions

    return (
        <View style={styles.container}>
            {
                incomeList.length > 0 ? (
                    <ScrollView>
                        <View style={styles.blockContainer}>
                            <Text style={styles.blockHeader}> + { incomeSum } {accounts.activeCurrencySymbol}</Text>
                            <View style={styles.itemContainer}>
                                { incomeList.map((elem, index) => {
                                    return (
                                        <View key={elem.id}>
                                            <Item itemInfo={elem} />
                                            {index + 1 !== incomeList.length && <View style={styles.line} />}
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    </ScrollView>
                ) : (
                    <View style={{ padding: 10 }}>
                        <Text>{$t('EmptyTransactionList')}</Text>
                    </View>
                )
            }
        </View>
    )
})
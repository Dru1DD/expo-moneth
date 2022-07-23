import React from 'react'
import { View, Text } from 'react-native'
import { transactionDetail as styles } from '../styles'
import $t from '../locales/i18n'

export const TransactionDetail = (props) => {
    const { elem } = props.route.params

    return (
        <View style={styles.container}>
            <View style={styles.priceContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{elem.catagory}</Text>
                </View>
                <View style={styles.price}>
                    <Text
                        style={[styles.priceText, elem.isIncome ? styles.income : styles.exspense]}
                    >{elem.isIncome ? "+" : "-"} {elem.price} {elem.currencySymbol}</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.itemContainer}>


                    <Text style={styles.itemText}>{$t('Account')}</Text>
                    <Text style={styles.itemText}>{elem.account}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>{$t('Catagory')}</Text>
                    <Text style={styles.itemText}>{elem.catagory}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>{$t('Data')}</Text>
                    <Text style={styles.itemText}>{elem.addTime}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>{$t('Currancy')}</Text>
                    <Text style={styles.itemText}>{elem.currencySymbol}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.noteContainer}>
                    <Text style={styles.itemText}>{$t('Notes')}</Text>
                    <Text style={styles.itemText}>{elem.note}</Text>
                </View>
            </View>
        </View>
    )
}
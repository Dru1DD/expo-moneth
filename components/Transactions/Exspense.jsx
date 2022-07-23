import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, Pressable, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useStore, useTextInput } from '../../hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AntDesign } from '@expo/vector-icons';

import { transactionStyles as styles } from '../../styles'

import { dateFormater } from '../../helpers/dateHelper';

import { AccountModal } from '../Modals/AccountModal/AcccountModal';
import { CatagoryModal } from '../Modals/CatagoryModal/CatagoryModal';

import moment from 'moment'
import { Icon } from '../Icon/Icon';

import $t from '../../locales/i18n';

export const Exspense = () => {

    const [isAccountOpen, setIsAccountOpen] = useState(false)
    const [isCatagoryOpen, setIsCatagoryOpen] = useState(false)

    const sum = useTextInput('', '0 $', 'numeric', false)
    const note = useTextInput('', 'Notes...', 'decimal-pad', true)

    const navigation = useNavigation();
    const { transactions, accounts, catagories } = useStore()

    const activeCatagory = catagories.catagoryList[catagories.activeCatagory]
    const activeAccount = accounts.accountsList[accounts.activeAccount]

    const clickHandler = async () => {
        try {
            const formatedDate = dateFormater()

            const _id = moment();

            const item = {
                date: formatedDate.parentDate,
                transactions: [
                    {
                        id: _id,
                        iconName: activeCatagory.iconName,
                        vectorIcons: activeCatagory.vectorIcons,
                        catagory: activeCatagory.title,
                        account: activeAccount.title,
                        price: sum.value,
                        isIncome: false,
                        isTransfer: false,
                        currencySymbol: accounts.activeCurrencySymbol,
                        currencyName: accounts.activeCurrencyName,
                        currencyAbbreviation: accounts.activeCurrencyAbbreviation,
                        addTime: formatedDate.childDate,
                        budgetAfter: accounts.sum - sum.value,
                        note: note.value
                    }
                ]
            }

            const asyncList = await AsyncStorage.getItem('@MyStore:Transactions')
            const parseAsyncList = asyncList ? JSON.parse(asyncList):[]
            parseAsyncList.push(item)
            await AsyncStorage.setItem('@MyStore:Transactions', JSON.stringify(parseAsyncList))

            await transactions.addTransaction(item)
            await accounts.exspenseHandler(activeAccount.id, sum.value)
            await transactions.addExspenseItem(item.transactions[0])

            navigation.navigate('Home')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.blockContainer}>
                    <Text style={styles.blockHeader}>{$t('Sum')}</Text>
                    <View style={styles.itemContainer}>
                        <View style={styles.borderInput}>
                            <View style={styles.inputIcon}>
                                <AntDesign name="minuscircle" size={24} color="#e32f45" />
                            </View>
                            <TextInput
                                style={styles.input}
                                value={sum.value}
                                onChangeText={sum.textInputHandler}
                                {...sum}
                            />
                        </View>

                    </View>
                </View>
                <View style={styles.blockContainer}>
                    <Text style={styles.blockHeader}>{$t('From')}</Text>
                    <TouchableOpacity style={styles.itemContainer} onPress={() => setIsAccountOpen(!isAccountOpen)}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalIcon}>
                                <Icon iconName={activeAccount.iconName} vectorIcon={activeAccount.vectorIcons} color={'black'} />
                            </View>
                            <View style={styles.modalMain}>
                                <View>
                                    <Text>{activeAccount.title}</Text>
                                    <Text>{activeAccount.count} {activeAccount.currencySymbol}</Text>
                                </View>
                                <Icon iconName="right" color="black" vectorIcon={"AntDesign"} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.blockContainer}>
                    <Text style={styles.blockHeader}>{$t('Catagory')}</Text>
                    <TouchableOpacity style={styles.itemContainer} onPress={() => setIsCatagoryOpen(!isCatagoryOpen)}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalIcon}>
                                <Icon iconName={activeCatagory.iconName} vectorIcon={activeCatagory.vectorIcons} color={'black'} />
                            </View>
                            <View style={styles.modalMain}>
                                <View>
                                    <Text>{activeCatagory.title}</Text>
                                </View>
                                <Icon iconName="right" color="black" vectorIcon={"AntDesign"} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.blockContainer}>
                    <Text style={styles.blockHeader}>{$t('Note')}</Text>
                    <View style={styles.itemContainer}>
                        <View style={styles.borderInput}>
                            <TextInput
                                style={styles.note}
                                value={note.value}
                                onChangeText={note.textInputHandler}
                                numberOfLines={10}
                                {...note}
                            />
                        </View>

                    </View>
                </View>
                <View style={styles.blockContainer}>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={styles.button}
                            onPress={clickHandler}
                        >
                            <Text style={styles.buttonText}>{$t('Confirm')}</Text>
                        </Pressable>
                    </View>

                </View>
                <View style={styles.space} />
            </ScrollView>
            <AccountModal
                isVisible={isAccountOpen}
                setIsVisible={setIsAccountOpen}
            />
            <CatagoryModal
                isVisible={isCatagoryOpen}
                setIsVisible={setIsCatagoryOpen}
            />
        </View>
    )
}
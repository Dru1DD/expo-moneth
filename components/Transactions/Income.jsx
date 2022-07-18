import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { useStore } from '../../hooks';
import { useNavigation } from '@react-navigation/native';
import { useTextInput } from '../../hooks/useTextInput'

import { AntDesign } from '@expo/vector-icons';
import { Icon } from '../Icon/Icon';

import { AccountModal } from '../AccountModal/AcccountModal';
import { CatagoryModal } from '../CatagoryModal/CatagoryModal';

import { transactionStyles as styles } from '../../styles'
import { dateFormater } from '../../helpers/dateHelper';

export const Income = () => {

    const [isAccountOpen, setIsAccountOpen] = useState(false)
    const [isCatagoryOpen, setIsCatagoryOpen] = useState(false)

    const sum = useTextInput('', '0 $', 'numeric', false)
    const note = useTextInput('', 'Notes...', 'decimal-pad', true)

    const { transactions, accounts, catagories } = useStore()
    const navigation = useNavigation()


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
                        isIncome: true,
                        isTransfer: false,
                        currencySymbol: accounts.activeCurrencySymbol,
                        currencyName: accounts.activeCurrencyName,
                        currencyAbbreviation: accounts.activeCurrencyAbbreviation,
                        addTime: formatedDate.childDate,
                        note: note.value
                    }
                ]
            }

            await accounts.incomeHandler(activeAccount.id, sum.value)
            await transactions.addTransaction(item)

            navigation.navigate('Home')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.blockContainer}>
                    <Text style={styles.blockHeader}>Сумма</Text>
                    <View style={styles.itemContainer}>
                        <View style={styles.borderInput}>
                            <View style={styles.inputIcon}>
                                <AntDesign name="pluscircle" size={24} color="#e32f45" />
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
                    <Text style={styles.blockHeader}>Куда</Text>
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
                    <Text style={styles.blockHeader}>Категория</Text>
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
                    <Text style={styles.blockHeader}>Заметка</Text>
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
                        <TouchableOpacity
                            style={styles.button}
                            onPress={clickHandler}
                        >
                            <Text style={styles.buttonText}>Подтвердить</Text>
                        </TouchableOpacity>
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

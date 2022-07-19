import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { useTextInput } from '../../hooks/useTextInput'
import { useStore } from '../../hooks';

import { Icon } from '../Icon/Icon';
import { AccountModal } from '../Modals/AccountModal/AcccountModal';

import { dateFormater } from '../../helpers/dateHelper';
import { transactionStyles as styles } from '../../styles'

import moment from 'moment'

import { observer } from 'mobx-react-lite';

export const Transfer = observer(() => {
    const [ isFirstOpen, setIsFirstOpen ] = useState(false)
    const [ isSecondOpen, setIsSecondOpen ] = useState(false)

    const sum = useTextInput('', '0 $', 'numeric', false)
    const note = useTextInput('', 'Notes...', 'decimal-pad', true)

    const { transactions, accounts  } = useStore()

    const navigation = useNavigation()

    const { activeAccount, accountsList} = accounts

    const firstAccount = accountsList[activeAccount]
    const secondAccount  = activeAccount + 1 < accountsList.length ? accountsList[activeAccount + 1] : accountsList[1]
    
    const clickHandler = async () => {
        try {
            const formatedDate = dateFormater()

            const _id = moment();

            const item = {
                date: formatedDate.parentDate,
                transactions: [
                    {
                        id: _id,
                        iconName: 'compare-arrows',
                        vectorIcons: 'MaterialIcons',
                        catagory: firstAccount.title,
                        account: secondAccount.title,
                        price: sum.value,
                        isIncome: false,
                        isTransfer: true,
                        currencySymbol: accounts.activeCurrencySymbol,
                        currencyName: accounts.activeCurrencyName,
                        currencyAbbreviation: accounts.activeCurrencyAbbreviation,
                        addTime: formatedDate.childDate,
                        note: note.value
                    }
                ]
            }
            await transactions.addTransaction(item)
            await accounts.transferHandler(firstAccount.title, secondAccount.title, sum.value)

            navigation.navigation('Home')
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
                                <Icon iconName="compare-arrows"  vectorIcon={'MaterialIcons'} size={24} color="#e32f45" />
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
                    <Text style={styles.blockHeader}>Откуда</Text>
                    <TouchableOpacity style={styles.itemContainer} onPress={() => setIsFirstOpen(!isFirstOpen)}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalIcon}>
                                <Icon iconName={firstAccount.iconName} vectorIcon={firstAccount.vectorIcons} color={'black'} />
                            </View>
                            <View style={styles.modalMain}>
                                <View>
                                    <Text>{firstAccount.title}</Text>
                                </View>
                                <Icon iconName="right" color="black" vectorIcon={"AntDesign"}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.blockContainer}>
                    <Text style={styles.blockHeader}>Куда</Text>
                    <TouchableOpacity style={styles.itemContainer} onPress={() => setIsSecondOpen(!isSecondOpen)}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalIcon}>
                                <Icon iconName={secondAccount.iconName} vectorIcon={secondAccount.vectorIcons} color={'black'} />
                            </View>
                            <View style={styles.modalMain}>
                                <View>
                                    <Text>{secondAccount.title}</Text>
                                </View>
                                <Icon iconName="right" color="black" vectorIcon={"AntDesign"}/>
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
                isVisible={isFirstOpen}
                setIsVisible={setIsFirstOpen}
            />
            <AccountModal 
                 isVisible={isSecondOpen}
                 setIsVisible={setIsSecondOpen}
            />
        </View>
    )
})
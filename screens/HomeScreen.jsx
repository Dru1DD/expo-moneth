import React, { useEffect } from 'react'
import { useStore } from '../hooks'
import { useNavigation } from '@react-navigation/native'
import { View, Text, ScrollView, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import shortid from 'shortid'

import { Item } from '../components'

import { AntDesign } from '@expo/vector-icons';
import { homeScreen as styles } from '../styles'
import { observer } from 'mobx-react-lite'

import $t from '../locales/i18n'

export const HomeScreen = observer(() => {
    const navigation = useNavigation()
    const { transactions, accounts } = useStore()

    const buttonClickHandler = () => {
        navigation.navigate('AddTransaction')
    }

    useEffect(() => {
        const loadDefaultList = async() => {
            await  transactions.loadDefaultExspenseList()
            await transactions.loadDefaultIncomeList()
            await accounts.loadDefaultSum()
            await transactions.loadDefaultBalanceList()
        }

        loadDefaultList()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                onPress={buttonClickHandler}
                style={({ pressed }) => [
                    {
                      backgroundColor: pressed
                        ? 'rgb(241, 242, 242)'
                        : null,
                        width: '90%',
                        marginTop: 25
                    }
                  ]}
            >
                <View style={styles.buttonContainer}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                    <Text style={styles.buttonText}>{$t('AddTransaction')}</Text>
                </View>
            </Pressable>
            <ScrollView
                style={{ width: '100%' }}
            >
                {
                    transactions.transactionList.map((item) => {
                        return (
                            <View style={styles.blockContainer} key={shortid.generate()}>
                                <Text style={styles.blockHeader}>{item.date}</Text>
                                <View style={styles.itemContainer}>
                                    {item.transactions.map((elem, index) => {
                                        return (
                                            <Pressable 
                                                key={elem.id}
                                                onPress={() => {
                                                    navigation.navigate('TransactionDetail', {
                                                        elem: elem,
                                                    })
                                                }}
                                            >
                                                <Item itemInfo={elem}/>
                                                { index + 1 !== item.transactions.length && <View style={styles.line}/> }
                                            </Pressable>
                                        )   
                                    })}
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
})
import React, { useState, useCallback } from "react";
import { View, Text, Modal, TouchableOpacity, TextInput, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useStore } from "../../../hooks";
import { useTextInput } from "../../../hooks/useTextInput";

import { modalStyles as styles } from "../../../styles";
import { Icon } from "../../Icon/Icon";
import { observer } from 'mobx-react-lite';
import { iconsList } from "../../../helpers/iconsList";
import shortid from "shortid";
import { defaultAccounts, defaultCatagoryList, defaultIncomeCatagoryList } from "../../../constants/defaultValues";
import $t from "../../../locales/i18n";

export const SettingsModal = observer(({ isVisible, setIsVisible, isAccount, isIncomeCatagory }) => {

    const [activeSlide, setActiveSlide] = useState(0);
    const [icon, setIcon] = useState({
        iconName: 'book',
        vectorIcon: 'AntDesign',
        id: 0
    })
    const { accounts, catagories } = useStore();

    const title = useTextInput('', $t('TitlePlaceHolder'), 'default', false)
    const sum = useTextInput('', `${$t('Sum')}...`, 'number-pad', false)

    const onRequestClose = useCallback(
        () => setIsVisible(!isVisible),
        [isVisible]
    );

    const confirmHandler = async () => {
        if(isAccount) {
            const account = {
                id: shortid.generate(),
                iconName: icon.iconName,
                title: title.value,
                count: sum.value,
                currencySymbol: accounts.activeCurrencySymbol,
                currencyAbbreviation: accounts.activeCurrencyAbbreviation,
                currencyName: accounts.activeCurrencyName,
                vectorIcons: icon.vectorIcon
            }

            const accountsAsyncList = await AsyncStorage.getItem('@MyStore:Accounts')
            const accountsParsedList = accountsAsyncList != null ? JSON.parse(accountsAsyncList) : defaultAccounts
            accountsParsedList.push(account)
            
            await AsyncStorage.setItem('@MyStore:Accounts', JSON.stringify(accountsParsedList))
            await accounts.addAccount(account)
        } else if (isIncomeCatagory) {
            const catagory = {
                iconName: icon.iconName,
                title: title.value,
                vectorIcons: icon.vectorIcon
            }

            const incomeCatagoryAsync = await AsyncStorage.getItem('@MyStore:IncomeCatagories')
            const incomeCatagoryParse = incomeCatagoryAsync != null ? JSON.parse(incomeCatagoryAsync) : defaultIncomeCatagoryList
            incomeCatagoryParse.push(catagory)

            await AsyncStorage.setItem('@MyStore:IncomeCatagories', JSON.stringify(incomeCatagoryParse))
            await catagories.addIncomeCatagory(catagory)
        } else {
            const catagory = {
                iconName: icon.iconName,
                title: title.value,
                vectorIcons: icon.vectorIcon
            }

            const exspenseCatagoryAsync = await AsyncStorage.getItem('@MyStore:ExspenseCatagories')
            const exspenseCatagoryParse = exspenseCatagoryAsync != null ? JSON.parse(exspenseCatagoryAsync) : defaultCatagoryList
            exspenseCatagoryParse.push(catagory)

            await AsyncStorage.setItem('@MyStore:ExspenseCatagories', exspenseCatagoryParse)
            await catagories.addCatagory(catagory)
        }

        setIsVisible(!isVisible)
        setActiveSlide(0)
    }

    const slideHandler = () => {
        switch (activeSlide) {
            case 0:
                return (
                    <View>
                        <Text>{$t('InputTitle')} {isAccount ? $t('lowercaseAccount') : $t('lowercaseCatagory')}:</Text>
                        <TextInput
                            style={styles.textInput}
                            {...title}
                            value={title.value}
                            onChangeText={title.textInputHandler}
                        />

                        <TouchableOpacity
                            style={[styles.button, { alignSelf: 'center' }]}
                            onPress={() => {
                                if (title.value === '') {
                                    alert($t('EmptyValue'))
                                } else {
                                    setActiveSlide(1)
                                }
                            }}
                        >
                            <Text style={styles.buttonText}>{$t('Next')}</Text>
                        </TouchableOpacity>
                    </View>
                )
            case 1:
                return (
                    <View>
                        <Text>{$t('SelectAnIcon')}</Text>
                        <ScrollView>
                            <View style={styles.iconContainer}>
                                {
                                    iconsList.map((item, index) => (
                                        <View
                                            key={index}
                                            style={[styles.iconItem, icon.id === index ? styles.activeIcon : null]}
                                        >
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setIcon({
                                                        iconName: item.iconName,
                                                        vectorIcon: item.vectorIcons,
                                                        id: index
                                                    })
                                                }}
                                            >
                                                <Icon
                                                    iconName={item.iconName}
                                                    vectorIcon={item.vectorIcons}
                                                    size={20}
                                                    color="black"
                                                />
                                            </TouchableOpacity>
                                        </View>

                                    ))
                                }
                            </View>
                        </ScrollView>
                        <TouchableOpacity
                            style={[styles.button, { alignSelf: 'center' }]}
                            onPress={() => isAccount ? setActiveSlide(2) : setActiveSlide(3)}
                        >
                            <Text style={styles.buttonText}>{$t('Next')}</Text>
                        </TouchableOpacity>
                    </View>
                )
            case 2:
                return (
                    <>
                        <Text>{$t('InputAmmountOfAccount')}: </Text>
                        <TextInput
                            style={styles.textInput}
                            {...sum}
                            value={sum.value}
                            onChangeText={sum.textInputHandler}
                        />
                        <TouchableOpacity
                            style={[styles.button, { alignSelf: 'center' }]}
                            onPress={() => setActiveSlide(3)}
                        >
                            <Text style={styles.buttonText}>{$t('Next')}</Text>
                        </TouchableOpacity>
                    </>
                )
            case 3:
                return (
                    <>
                        <View>
                            <View style={{ flexDirection: 'row'}}>
                                <Text>{$t('SelectedIcon')}: </Text>
                                <Icon iconName={icon.iconName} vectorIcon={icon.vectorIcon} size={20} color={"black"} />
                            </View>

                            <Text>{$t('Title')} {isAccount ? $t('lowercaseAccount') : $t('lowercaseCatagory')}: {title.value}</Text>
                            {isAccount && (
                                <Text>{$t('SumOnAccount')}: {sum.value}</Text>
                            )}
                        </View>

                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setActiveSlide(0)}
                            >
                                <Text style={styles.buttonText}>{$t('Change')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, { width: 150 }]}
                                onPress={confirmHandler}
                            >
                                <Text style={styles.buttonText}>{$t('Confirm')}</Text>
                            </TouchableOpacity>
                        </View>

                    </>
                )
            default:
                return (
                    <View>
                        <Text>{$t('Error')}</Text>
                    </View>
                )
        }
    }
    return (
        <Modal
            style={styles.centeredView}
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onRequestClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.back} onPress={onRequestClose}>
                            <Icon iconName="left" vectorIcon={"AntDesign"} color="black" />
                        </TouchableOpacity>
                        <View style={styles.headerMain}>
                            {isAccount ? <Text>{$t('Accounts')}</Text> : <Text>{$t('Catagories')}</Text>}
                        </View>
                    </View>
                    <View style={styles.settingsModalBody}>
                        {slideHandler()}
                    </View>
                </View>
            </View>
        </Modal>
    );
})
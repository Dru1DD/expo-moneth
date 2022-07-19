import React, { useState, useCallback } from "react";
import { View, Text, Modal, TouchableOpacity, TextInput, ScrollView } from "react-native";


import { useStore } from "../../../hooks";
import { useTextInput } from "../../../hooks/useTextInput";

import { modalStyles as styles } from "../../../styles";
import { Icon } from "../../Icon/Icon";
import { observer } from 'mobx-react-lite';
import { iconsList } from "../../../helpers/iconsList";
import shortid from "shortid";

export const SettingsModal = observer(({ isVisible, setIsVisible, isAccount }) => {

    const [activeSlide, setActiveSlide] = useState(0);
    const [icon, setIcon] = useState({
        iconName: 'book',
        vectorIcon: 'AntDesign',
        id: 0
    })
    const { accounts, catagories } = useStore();

    const title = useTextInput('', 'Название...', 'default', false)
    const sum = useTextInput('', 'Сумма...', 'number-pad', false)

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

            await accounts.addAccount(account)
        } else {
            const catagory = {
                iconName: icon.iconName,
                title: title.value,
                vectorIcons: icon.vectorIcon
            }

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
                        <Text>Введите название {isAccount ? "счёта" : "категории"}:</Text>
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
                                    alert('Значение не может быть пустое')
                                } else {
                                    setActiveSlide(1)
                                }
                            }}
                        >
                            <Text style={styles.buttonText}>Далее</Text>
                        </TouchableOpacity>
                    </View>
                )
            case 1:
                return (
                    <View>
                        <Text>Выберите иконку</Text>
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
                            <Text style={styles.buttonText}>Далее</Text>
                        </TouchableOpacity>
                    </View>
                )
            case 2:
                return (
                    <>
                        <Text>Введите сумму на счету: </Text>
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
                            <Text style={styles.buttonText}>Далее</Text>
                        </TouchableOpacity>
                    </>
                )
            case 3:
                return (
                    <>
                        <View>
                            <View style={{ flexDirection: 'row'}}>
                                <Text>Выбрана иконка: </Text>
                                <Icon iconName={icon.iconName} vectorIcon={icon.vectorIcon} size={20} color={"black"} />
                            </View>

                            <Text>Название {isAccount ? 'счёта' : 'категории'}: {title.value}</Text>
                            {isAccount && (
                                <Text>Сумма на счету: {sum.value}</Text>
                            )}
                        </View>

                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setActiveSlide(0)}
                            >
                                <Text style={styles.buttonText}>Изменить</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, { width: 150 }]}
                                onPress={confirmHandler}
                            >
                                <Text style={styles.buttonText}>Подтвердить</Text>
                            </TouchableOpacity>
                        </View>

                    </>
                )
            default:
                return (
                    <View>
                        <Text>Ошибка</Text>
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
                            {isAccount ? <Text>Счета</Text> : <Text>Категории</Text>}
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
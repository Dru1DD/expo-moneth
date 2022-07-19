import React, { useCallback } from 'react'
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native'
import { observer } from 'mobx-react-lite'
import { modalStyles as styles } from '../../styles'
import { AntDesign } from '@expo/vector-icons';
import { useStore } from '../../hooks';
import shortid from 'shortid';
import { Icon } from '../Icon/Icon';

export const AccountModal = observer(({ isVisible, setIsVisible }) => {
    const { accounts } = useStore()

    const onRequestClose = useCallback(() => setIsVisible(!isVisible), [isVisible])

    return (
        <Modal
            style={styles.centeredView}
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onRequestClose}
        >
            <View style={styles.centeredView}>
                <View style={[styles.modalView, { maxHeight: 400 }]}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.back} onPress={onRequestClose}>
                            <AntDesign name="left" size={18} color="black" />
                        </TouchableOpacity>
                        <View style={styles.headerMain}>
                            <Text>Счета</Text>
                        </View>
                    </View>
                    <ScrollView style={styles.body}>
                        {accounts.accountsList.map((item, index) => (
                            <View key={shortid.generate()} style={styles.itemContainer}>
                                <TouchableOpacity
                                    style={styles.itemContainer}
                                    onPress={() => accounts.changeActiveAccount(index)}
                                >
                                    <View style={styles.itemIcon}>
                                        <Icon color={'white'} iconName={item.iconName} vectorIcon={item.vectorIcons} />
                                    </View>
                                    <View style={styles.itemBody}>
                                        <View>
                                            <Text style={{ color: 'white' }}>{item.title}</Text>
                                            <Text style={{ color: 'white' }}>{item.count} {item.currencySymbol}</Text>
                                        </View>
                                        <View>
                                            {accounts.activeAccount === index ? <AntDesign name="check" size={18} color="white" /> : null}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {index + 1 === accounts.accountsList.length && <View style={styles.line} />}
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
})
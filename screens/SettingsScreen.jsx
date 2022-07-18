import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { SettingsItem } from '../components'
import { settingsStyle as styles } from '../styles'

export const SettingsScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Настройки</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.blockContainer}>
                    <Text style={styles.blockHeader}>Общее</Text>
                    <View style={styles.itemContainer}>
                        <SettingsItem 
                            title="Денежная единица" 
                            isLine={true}
                            onPress={() => navigation.navigate('SettingsGeneral', {
                                pageName: 'CurrencySymbol'
                            })}
                        />
                        <SettingsItem 
                            title="Счета" 
                            isLine={true} 
                            onPress={() => navigation.navigate('SettingsGeneral', {
                                pageName: 'AccountPage'
                            })}
                        />
                        <SettingsItem 
                            title="Категория" 
                            isLine={false}
                            onPress={() => navigation.navigate('SettingsGeneral', {
                                pageName: 'CatagoryPage'
                            })}
                        />
                    </View>
                </View>
                <View style={styles.blockContainer}>
                    <Text style={styles.blockHeader}>Другое</Text>
                    <View style={styles.itemContainer}>
                        <SettingsItem 
                            title="Условия пользователя" 
                            onPress={() => navigation.navigate('TermsOfUse')}
                            isLine={true}
                        />
                        <SettingsItem 
                            title="Политика приватности"
                            onPress={() => navigation.navigate('PrivacyPolicy')} 
                            isLine={true}
                        />
                        <SettingsItem 
                            title="О приложении"
                            onPress={() => navigation.navigate('About')}
                            isLine={false}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
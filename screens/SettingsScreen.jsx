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
                            title="Категория(Рассходы)" 
                            isLine={true}
                            onPress={() => navigation.navigate('SettingsGeneral', {
                                pageName: 'CatagoryPage'
                            })}
                        />
                        <SettingsItem 
                            title="Категория(Доходы)" 
                            isLine={false}
                            onPress={() => navigation.navigate('SettingsGeneral', {
                                pageName: 'IncomeCatagoryPage'
                            })}
                        />
                    </View>
                </View>
                <View style={styles.blockContainer}>
                    <Text style={styles.blockHeader}>Другое</Text>
                    <View style={styles.itemContainer}>
                        <SettingsItem 
                            title="Условия пользователя" 
                            // onPress={() => navigation.navigate('TermsOfUse')}
                            href="https://www.notion.so/Terms-Of-Use-7072dbfd05e34940a6db14f87c3d477a"
                            isWeb={true}
                            isLine={true}
                        />
                        <SettingsItem 
                            title="Политика приватности"
                            // onPress={() => navigation.navigate('PrivacyPolicy')} 
                            href="https://www.notion.so/Privacy-Policy-cbc17bc87f8a42d0af73b51f5c990c25"
                            isWeb={true}
                            isLine={true}
                        />
                        <SettingsItem 
                            title="О приложении"
                            // onPress={() => navigation.navigate('About')}
                            href="https://witty-pharaoh-487.notion.site/Moneth-10553283127c4316b265df89beec2a9d"
                            isWeb={true}
                            isLine={false}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
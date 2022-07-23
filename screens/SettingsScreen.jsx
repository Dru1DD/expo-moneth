import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useStore } from '../hooks'
import { View, Text } from 'react-native'
import { SettingsItem } from '../components'
import { settingsStyle as styles } from '../styles'
import $t from '../locales/i18n'

export const SettingsScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{$t('Settings')}</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.blockContainer}>
                    <Text style={styles.blockHeader}>{$t('General')}</Text>
                    <View style={styles.itemContainer}>
                        <SettingsItem 
                            title={$t('MonetaryUnit')}
                            isLine={true}
                            onPress={() => navigation.navigate('SettingsGeneral', {
                                pageName: 'CurrencySymbol'
                            })}
                        />
                        <SettingsItem 
                            title={$t('Accounts')}
                            isLine={true} 
                            onPress={() => navigation.navigate('SettingsGeneral', {
                                pageName: 'AccountPage'
                            })}
                        />
                        <SettingsItem 
                            title={$t('CatagoryExspense')}
                            isLine={true}
                            onPress={() => navigation.navigate('SettingsGeneral', {
                                pageName: 'CatagoryPage'
                            })}
                        />
                        <SettingsItem 
                            title={$t('CatagoryIncomes')}
                            isLine={false}
                            onPress={() => navigation.navigate('SettingsGeneral', {
                                pageName: 'IncomeCatagoryPage'
                            })}
                        />
                    </View>
                </View>
                <View style={styles.blockContainer}>
                    <Text style={styles.blockHeader}>{$t('Other')}</Text>
                    <View style={styles.itemContainer}>
                        <SettingsItem 
                            title={$t('TermsOfUse')}
                            href="https://www.notion.so/Terms-Of-Use-7072dbfd05e34940a6db14f87c3d477a"
                            isWeb={true}
                            isLine={true}
                        />
                        <SettingsItem 
                            title={$t('PrivacyPolicy')}
                            href="https://www.notion.so/Privacy-Policy-cbc17bc87f8a42d0af73b51f5c990c25"
                            isWeb={true}
                            isLine={true}
                        />
                        <SettingsItem 
                            title={$t('AboutApplication')}
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
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import $t from '../locales/i18n'

export const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Text>{$t('SplashScreenTitle')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
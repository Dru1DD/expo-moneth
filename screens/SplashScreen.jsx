import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import icon from '../assets/icon.png'
import $t from '../locales/i18n'

export const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View 
                style={{
                    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,

                }}
            >
                <Image
                style={styles.image}
                source={icon}
            />
            </View>
            
            <Text style={styles.text}>{$t('SplashScreenTitle')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    text: {
        marginTop: 10,
        fontSize: 36
    }
})
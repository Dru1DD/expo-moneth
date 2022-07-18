import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { itemStyles as styles } from '../../styles'
import { Icon } from '../Icon/Icon'

export const SettingsItem = ({ title, onPress, isLine }) => {
    return (
        <>
        <View style={styles.container}>
            <TouchableOpacity style={styles.rightContainer} onPress={onPress}>
                <View style={styles.dataContainer}>
                    <Text>{title}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Icon vectorIcon={'AntDesign'} iconName="right" size={18} color="black" />
                </View>
            </TouchableOpacity>
        </View>
        { isLine ? <View style={styles.line} /> : null}
        </>
    )
}
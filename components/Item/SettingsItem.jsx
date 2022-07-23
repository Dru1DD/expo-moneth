import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { itemStyles as styles } from '../../styles'
import { Anchor } from '../Anchor/Anchor'
import { Icon } from '../Icon/Icon'

export const SettingsItem = ({ title, onPress, isLine, isWeb, href }) => {

    if (isWeb) {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.rightContainer}>
                        <View style={styles.dataContainer}>
                            <Anchor href={href}>{title}</Anchor>
                        </View>
                        <View style={styles.priceContainer}>
                            <Anchor href={href}>
                                <Icon vectorIcon={'AntDesign'} iconName="right" size={18} color="black" />
                            </Anchor>
                        </View>
                    </View>
                </View>
                {isLine ? <View style={styles.line} /> : null}
            </>

        )
    }
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
            {isLine ? <View style={styles.line} /> : null}
        </>
    )
}
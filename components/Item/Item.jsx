import React from 'react'
import { View, Text } from 'react-native'

import { AntDesign } from '@expo/vector-icons';

import { itemStyles as styles } from '../../styles/'
import { Icon } from '../Icon/Icon';
import $t from '../../locales/i18n'

export const Item = ({ itemInfo }) => {
    const { iconName, vectorIcons, catagory, account, addTime, currencySymbol, isIncome, price, isTransfer } = itemInfo
    
    if(isTransfer) {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Icon iconName="compare-arrows"  vectorIcon={'MaterialIcons'} color={'black'} />
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.dataContainer}>
                        <Text style={styles.catagory}>{catagory}</Text>
                        <Text style={styles.another}>{$t('Transfer')}</Text>
                        <Text style={styles.catagory}>{account}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={[ styles.price, { marginRight: 5 }]}>
                            {price} {currencySymbol}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon iconName={iconName} vectorIcon={vectorIcons} color={'black'}/>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.dataContainer}>
                    <Text style={styles.catagory}>{catagory}</Text>
                    <Text style={styles.another}>{account}</Text>
                    <Text style={styles.another}>{addTime}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={[styles.price, { marginRight: 5}]}>{`${isIncome ? '+': '-'} ${price} ${currencySymbol}`}</Text>
                    <AntDesign name="right" size={16} color="black" />
                </View>
            </View>
            
        </View>
    )
}
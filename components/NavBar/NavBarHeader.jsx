import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { navbarStyles as styles  } from '../../styles'

export const NavBarHeader = ({ activeCatagory, setActiveCatagory }) => {
    const clickHandler = (id) => {
        switch(id) {
            case 0:
                setActiveCatagory('Exspense')
                break;
            case 1:
                setActiveCatagory('Income')
                break
            case 2:
                setActiveCatagory('Transfer')
                break
            default:
                break
        }
    }
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => clickHandler(0)}
                style={[ styles.navbarItem, activeCatagory === 'Exspense' && styles.active]}
            >
                <Text style={styles.title}>Расходы</Text>
            </Pressable>
            <Pressable
                onPress={() => clickHandler(1)}
                style={[ styles.navbarItem, activeCatagory === 'Income' && styles.active]}
            >
                <Text style={styles.title}>Доходы</Text>
            </Pressable>
            <Pressable 
                onPress={() => clickHandler(2)}
                style={[ styles.navbarItem, activeCatagory === 'Transfer' && styles.active]}
            >
                <Text style={styles.title}>Перевод</Text>
            </Pressable>
        </View>
    )
}
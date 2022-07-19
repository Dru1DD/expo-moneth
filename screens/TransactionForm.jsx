import React, { useState } from 'react'
import { View } from 'react-native'
import { Exspense, Income, Transfer } from '../components'
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import { transactionFormStyles as styles } from '../styles'

export const TransactionForm = () => {
    const [ activeCatagory, setActiveCatagory ] = useState(0)

    const renderFormLayout = () => {
        switch( activeCatagory ) {
            case 1:
                return <Income />
            case 0:
                return <Exspense />
            case 2: 
                return <Transfer />
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SegmentedControl 
                    values={["Рассходы", "Доходы", "Перевод"]}
                    selectedIndex={activeCatagory}
                    onChange={(event) => { setActiveCatagory(event.nativeEvent.selectedSegmentIndex) }}
                />
            </View>
            { renderFormLayout() }
        </View>
    )
}
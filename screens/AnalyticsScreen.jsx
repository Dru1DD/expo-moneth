import React, { useState, useEffect } from 'react'
import { useStore } from '../hooks'
import { View, Text } from 'react-native'
import { Chart, ExspenseAnalytics, IncomeAnalytics } from '../components'
import { observer } from 'mobx-react-lite'

import { analyticsScreen as styles } from '../styles/analytics.styles'
import SegmentedControl from '@react-native-segmented-control/segmented-control'

export const AnalyticsScreen = observer(() => {
    const [ activeSegment, setActiveSegment ] = useState(0)
    const { accounts } = useStore()

    const renderSegment = () => {
        switch(activeSegment) {
            case 0: 
                return <IncomeAnalytics />
            case 1:
                return <ExspenseAnalytics />
            case 2:
                alert('Произошла ошибка')
                return null
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Баланс</Text>
                <Text style={styles.headerSubTitle}>{accounts.sum} {accounts.activeCurrencySymbol}</Text>
            </View>
            <View style={styles.footer}>
                <Chart />
                <View>
                    <Text style={{ fontSize: 16}}>Баланс показывает Ваш общий счёт. Это может помочь Вам понять, как Ваши активы растут и где Вы могли бы сэкономить</Text>
                </View>
                <View style={{ width: '100%', marginTop: 10 }}>
                 <SegmentedControl 
                    values={["Доходы", "Расходы"]}
                    selectedIndex={activeSegment}
                    onChange={(e) => setActiveSegment(e.nativeEvent.selectedSegmentIndex)}
                />
                </View>
                <View>
                    { renderSegment () }
                </View>
            </View>
        </View>
    )
})
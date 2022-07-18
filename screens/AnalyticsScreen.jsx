import React from 'react'
import { useStore } from '../hooks'
import { View, Text } from 'react-native'
import { observer } from 'mobx-react-lite'

export const AnalyticsScreen = observer(() => {
    const { accounts } = useStore()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {
                accounts.accountsList.map((item, index) => (
                    <Text key={index}>Title: {item.title}, count: {item.count}</Text>
                ))
            }
        </View>
    )
})
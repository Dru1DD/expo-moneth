import React from 'react'
import { useStore } from '../../hooks'
import { View, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { observer } from 'mobx-react-lite'

export const Chart = () => {
    const { accounts, transactions } = useStore()

    return (
        <View style={{ padding: 10 }}>
            <LineChart 
                data={{
                    labels: [],
                    datasets: [
                      {
                        data: transactions.balanceList
                      }
                    ]
                  }}
                  width={Dimensions.get("window").width} // from react-native
                  height={220}
                  yAxisLabel={accounts.activeCurrencySymbol}
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16
                    },
                    propsForDots: {
                      r: "6",
                      strokeWidth: "2",
                      stroke: "#ffa726"
                    }
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16
                  }}
            />
        </View>
    )
}
import React, { useState, useCallback } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useStore } from '../../hooks'
import { settingsGeneralStyles as styles } from '../../styles'
import { currencyList } from '../../helpers/currencyList'

import { Icon } from '../../components'
import { observer } from 'mobx-react-lite'
import { SettingsModal } from '../../components/Modals/SettingsModal/SettingsModal'

export const SettingsGeneral = (props) => {
    const { pageName } = props.route.params

    switch (pageName) {
        case 'CurrencySymbol':
            return <CurrencyList />
        case 'AccountPage':
            return <AccountsList />
        case 'CatagoryPage':
            return <CatagoriesList />
        case 'IncomeCatagoryPage':
            return <IncomeCatagoriesList />
    }


}

const CurrencyList = observer(() => {
    const { accounts } = useStore()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Денежная единица: {accounts.activeCurrencyName} {accounts.activeCurrencySymbol}</Text>
            </View>
            <View style={styles.footer}>
                <View style={{ flex: 5 }}>
                    <View style={styles.blockContainer}>
                        <ScrollView styles={{ width: '100%' }}>
                            <View style={styles.itemContainer}>
                                {
                                    currencyList.map((item, index) => {
                                        return (
                                            <View key={index}>
                                                <TouchableOpacity onPress={() => accounts.updateCurrency(item)}>
                                                    <View style={styles.item}>
                                                        <View>
                                                            <Text>{item.name}</Text>
                                                        </View>
                                                        <View>
                                                            <Text>{item.symbol}</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                                {index + 1 !== currencyList.length && <View style={styles.line} />}
                                            </View>
                                        )
                                    })
                                }
                            </View>

                        </ScrollView>
                    </View>

                </View>
                <View style={{ flex: 1 }}>

                </View>

            </View>
        </View>
    )
})

const AccountsList = () => {
    const [isAccountOpen, setIsAccountOpen] = useState(false)

    const { accounts } = useStore()

    const buttonHandler = useCallback(() => setIsAccountOpen(!isAccountOpen), [isAccountOpen])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Счета</Text>
            </View>
            <View style={styles.footer}>
                <ScrollView style={styles.blockContainer}>
                    <View style={styles.itemContainer}>
                        {
                            accounts.accountsList.map((account, index) => (
                                <TouchableOpacity key={index}>
                                    <View style={styles.item}>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginLeft: 10,
                                            marginRight: 10,
                                            paddingLeft: 10,
                                            paddingRight: 10
                                        }}>
                                            <Icon iconName={account.iconName} vectorIcon={account.vectorIcons} size={18} color={'black'} />
                                            <Text style={{ marginLeft: 10 }}>{account.title}</Text>
                                        </View>
                                        <View style={{ justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
                                            <Text>{account.count} </Text>
                                        </View>
                                    </View>
                                    {index + 1 !== accounts.accountsList.length && <View style={styles.line} />}
                                </TouchableOpacity>
                            ))
                        }
                    </View>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={buttonHandler}
                    >
                        <Icon iconName={"pluscircleo"} size={24} color={"black"} vectorIcon={"AntDesign"} />
                        <Text style={{ marginLeft: 10 }}>Добавить категорию</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <SettingsModal
                isVisible={isAccountOpen}
                setIsVisible={setIsAccountOpen}
                isAccount={true}
            />

        </View>
    )
}

const CatagoriesList = () => {
    const [isCatagoryOpen, setIsCatagoryOpen] = useState(false)
    const { catagories } = useStore()

    const buttonHandler = useCallback(() => setIsCatagoryOpen(!isCatagoryOpen), [isCatagoryOpen])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Категории</Text>
            </View>
            <View style={styles.footer}>
                <ScrollView style={styles.blockContainer}>
                    <View style={styles.itemContainer}>
                        {
                            catagories.catagoryList.map((catagory, index) => (
                                <TouchableOpacity key={index}>
                                    <View style={styles.item}>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginLeft: 10,
                                            marginRight: 10,
                                            paddingLeft: 10,
                                            paddingRight: 10
                                        }}>
                                            <Icon 
                                                iconName={catagory.iconName} 
                                                vectorIcon={catagory.vectorIcons} 
                                                size={18} 
                                                color={'black'} 
                                            />
                                            <Text style={{ marginLeft: 10 }}>{catagory.title}</Text>
                                        </View>
                                    </View>
                                    {index + 1 !== catagories.catagoryList.length && <View style={styles.line} />}
                                </TouchableOpacity>
                            ))
                        }
                    </View>

                    <TouchableOpacity
                        style={{ 
                            flexDirection: 'row',
                            marginTop: 10, 
                            justifyContent: 'center', 
                            alignItems: 'center'
                        }}
                        onPress={buttonHandler}
                    >
                        <Icon iconName={"pluscircleo"} size={24} color={"black"} vectorIcon={"AntDesign"} />
                        <Text style={{ marginLeft: 10 }}>Добавить категорию</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <SettingsModal
                isVisible={isCatagoryOpen}
                setIsVisible={setIsCatagoryOpen}
                isAccount={false}
            />
        </View>
    )
}


const IncomeCatagoriesList = () => {
    const [isCatagoryOpen, setIsCatagoryOpen] = useState(false)
    const { catagories } = useStore()

    const buttonHandler = useCallback(() => setIsCatagoryOpen(!isCatagoryOpen), [isCatagoryOpen])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Категории</Text>
            </View>
            <View style={styles.footer}>
                <ScrollView style={styles.blockContainer}>
                    <View style={styles.itemContainer}>
                        {
                            catagories.incomeCatagoryList.map((catagory, index) => (
                                <TouchableOpacity key={index}>
                                    <View style={styles.item}>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginLeft: 10,
                                            marginRight: 10,
                                            paddingLeft: 10,
                                            paddingRight: 10
                                        }}>
                                            <Icon 
                                                iconName={catagory.iconName} 
                                                vectorIcon={catagory.vectorIcons} 
                                                size={18} 
                                                color={'black'} 
                                            />
                                            <Text style={{ marginLeft: 10 }}>{catagory.title}</Text>
                                        </View>
                                    </View>
                                    {index + 1 !== catagories.catagoryList.length && <View style={styles.line} />}
                                </TouchableOpacity>
                            ))
                        }
                    </View>

                    <TouchableOpacity
                        style={{ 
                            flexDirection: 'row',
                            marginTop: 10, 
                            justifyContent: 'center', 
                            alignItems: 'center'
                        }}
                        onPress={buttonHandler}
                    >
                        <Icon iconName={"pluscircleo"} size={24} color={"black"} vectorIcon={"AntDesign"} />
                        <Text style={{ marginLeft: 10 }}>Добавить категорию</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <SettingsModal
                isVisible={isCatagoryOpen}
                setIsVisible={setIsCatagoryOpen}
                isAccount={false}
                isIncomeCatagory
            />
        </View>
    )
}